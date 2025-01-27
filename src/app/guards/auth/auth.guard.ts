import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { selectIsLoggedIn } from '../../store/auth/auth.selectors';
import { AppState } from '../../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      take(1), // We only need the value once
      map(isLoggedIn => {
        if (!isLoggedIn) {
          // If not logged in, navigate to the login page
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }
        // If logged in, allow access
        return true;
      })
    );
  }
}
