import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loginSuccess, loginFailure } from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    
    constructor(private actions$: Actions, private authService: AuthService,
        private router: Router
    ) {}

  login$ = createEffect(() =>
    () => this.actions$.pipe(
      ofType('[Login] User Login'),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map(user => loginSuccess({ user })),
          catchError(error => of(loginFailure({ error })))
        )
      ),
      catchError(error => of(loginFailure({ error })))
    )
  );

  loginSuccess$ = createEffect(() =>
    () => this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => {
        this.router.navigate(['']);
      })
    ),
    { dispatch: false }
  );

    loginFailure$ = createEffect(() =>
        () => this.actions$.pipe(
        ofType(loginFailure),
        tap(({ error }) => {
            console.error('Login failed:', error);
        })
        ),
        { dispatch: false }
    );

}