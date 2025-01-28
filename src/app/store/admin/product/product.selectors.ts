import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminProductState } from './product.state';

export const selectAdminBlogState =
  createFeatureSelector<AdminProductState>('adminBlog');

export const selectAdminProducts = createSelector(
  selectAdminBlogState,
  (state) => state.products
);
