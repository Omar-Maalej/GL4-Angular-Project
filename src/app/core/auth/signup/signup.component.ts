import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports:[FormsModule, RouterLink]
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  onSubmit() {
    const user: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };

    this.authService.signup(this.email,this.password,this.firstName,this.lastName).subscribe(
      (response: User) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
