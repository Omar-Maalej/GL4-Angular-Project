import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AuthResponse } from '../../../models/auth';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { FormsModule } from '@angular/forms';  
import { select, Store } from '@ngrx/store';
import { login } from '../../../store/auth/auth.actions';
import { selectIsErrored, selectIsLoggedInAndError } from '../../../store/auth/auth.selectors';
import { AuthState } from '../../../store/auth/auth.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  
  isErrored$: Observable<AuthState['isErrored']>;




  

  constructor(private authService: AuthService,private router : Router, 
    private store:  Store<{ auth: AuthState }>
  ) {
    this.isErrored$ = this.store.select(selectIsErrored);
  }

  onLogin() {
    this.store.dispatch(login({ email: this.email, password: this.password }))
  }
  

}
