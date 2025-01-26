import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './core/contact/contact.component';
import { BlogComponent } from './core/blog/blog.component';
import { ShopComponent } from './core/shop/shop.component';
import { LoginComponent } from './core/auth/login/login.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { BlogDetailsComponent } from './core/blog/blog-details/blog-details.component';
import { CartComponent } from './core/cart/cart.component';

export const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'blog', component : BlogComponent},
  {path : 'blog/:id', component: BlogDetailsComponent}, 
  {path : 'shop', component : ShopComponent}, 
  {path : 'login', component : LoginComponent},
  {path : 'signup',component: SignupComponent},
  {path : 'cart', component : CartComponent},
  {path : '**',  redirectTo : ''}
];
