import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminProductState } from './product.state';

export const selectAdminProductState =
  createFeatureSelector<AdminProductState>('adminProduct');

export const selectAdminProducts = createSelector(
  selectAdminProductState,
  (state) => state.products
);
