import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'blog', component : BlogComponent},
  {path : 'shop', component : ShopComponent}, 
  {path : 'login', component : LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path : '**',  redirectTo : ''}
];
