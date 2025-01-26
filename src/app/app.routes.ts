import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './core/contact/contact.component';
import { BlogComponent } from './core/blog/blog.component';
import { ShopComponent } from './core/shop/shop.component';
import { LoginComponent } from './core/auth/login/login.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { BlogDetailsComponent } from './core/blog/blog-details/blog-details.component';
import { AdminComponent } from './core/admin/admin.component';
import { AdminProductsComponent } from './core/admin/admin-products/admin-products.component';
import { AdminBlogsComponent } from './core/admin/admin-blogs/admin-blogs.component';
import { AdminDashboardComponent } from './core/admin/admin-dashboard/admin-dashboard.component';
import { AdminProductEditComponent } from './core/admin/admin-products/admin-product-edit/admin-product-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'products',
        component: AdminProductsComponent,
      },
      {
        path: 'products/:id/edit',
        component: AdminProductEditComponent,
      },
      {
        path: 'products/new',
        component: AdminProductEditComponent,
      },
      {
        path: 'blogs',
        component: AdminBlogsComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
