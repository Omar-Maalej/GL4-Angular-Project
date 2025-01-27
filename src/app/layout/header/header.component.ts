import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthState } from '../../store/auth/auth.state';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn, user } from '../../store/auth/auth.selectors';
import { CommonModule } from '@angular/common';
import { logout } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone : true
})
export class HeaderComponent {

  isLoggedIn$: Observable<AuthState['isLoggedIn']>;
  userFullName$: Observable<AuthState['user']>;

  isOpen = false;

  constructor(private router : Router
    , private store: Store<{ auth: AuthState }>
  ){
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
    this.userFullName$ = this.store.select(user);
  }

  toggleDropdown(){
    console.log('toggleDropdown');
    this.isOpen = !this.isOpen;
  }

  onLogout(){
    console.log('onLogout');
    this.store.dispatch(logout());
  }


  Login(){
    this.router.navigate(['/login']);
  }

}
