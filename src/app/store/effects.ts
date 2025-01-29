import { AdminBlogEffects } from './admin/blog/blog.effects';
import { ProductEffects } from './admin/product/product.effects';
import { AuthEffects } from './auth/auth.effects';
import { BlogEffects } from './blog/blog.effects';

export const appEffects = [
  AuthEffects,
  BlogEffects,
  AdminBlogEffects,
  ProductEffects,
];
