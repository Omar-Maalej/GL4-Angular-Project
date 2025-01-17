import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'blog', component : BlogComponent},
  {path : 'shop', component : ShopComponent}, 
  {path : '**',  redirectTo : ''}
];
