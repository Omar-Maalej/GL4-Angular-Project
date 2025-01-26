import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.headers.has('skip')) {
        console.log('skip value is true');
        const headers = req.headers.delete('skip');
        return next.handle(req.clone({ headers }));
    }

    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !req.url.includes('token/refresh/')) {
          // If unauthorized and not a token refresh request
          return this.authService.refreshToken().pipe(
            switchMap((tokens: any) => {
              localStorage.setItem('access_token', tokens.access); // Update access token
              req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${tokens.access}`,
                },
              });
              return next.handle(req); // Retry the failed request
            }),
            catchError(refreshError => {
              this.authService.logout(); // Logout if refresh fails
              return throwError(refreshError);
            })
          );
        }
        return throwError(error);
      })
    );
  }
}
