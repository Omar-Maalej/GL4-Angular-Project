import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AuthResponse } from '../../../models/auth';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router, } from '@angular/router';

import { FormsModule } from '@angular/forms';  
import { HeaderComponent } from '../../../layout/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]  
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,private router : Router,
    private headerComponent: HeaderComponent
  ) {}

  onLogin() {
    this.authService.login(this.email, this.password)
      .pipe(
        tap((response: AuthResponse) => {
          console.log('Login successful:', response);
          localStorage.setItem('access_token', response.access);
          localStorage.setItem('refresh_token', response.refresh);
          console.log('Before signal set: ', this.headerComponent.isLoggedInSignal());
          this.headerComponent.isLoggedInSignal.set(true);
          console.log('After signal set: ', this.headerComponent.isLoggedInSignal());
          this.router.navigate(['']);
        }),
        catchError((error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid credentials';
          return of(null); 
        })
      )
      .subscribe();
  }

  navigateToSignup(){
    this.router.navigate(['/signup']);
  }
  

}
