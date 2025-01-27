import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import {selectUserRoleAndIsLoggedIn } from '../../store/auth/auth.selectors';
import { AppState } from '../../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(selectUserRoleAndIsLoggedIn).pipe(
      take(1), // We only need the value once
      map(d => {
        console.log('AdminGuard: User is an admin', d);

        if (!d.isLoggedIn) {
          // If not logged in, navigate to the login page
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
        } else if (d.isLoggedIn && d.role !== 'admin') {
          // If logged in but not an admin, navigate to the home page
          this.router.navigate(['']);
          return false;
        }
        // If logged in and an admin, allow access
        return true;
      })
    );
  }
}
