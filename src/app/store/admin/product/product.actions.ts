import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product';

export const loadProducts = createAction('[Admin Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Admin Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Admin Product] Load Products Failure',
  props<{ error: any }>()
);

export const createProduct = createAction(
  '[Admin Product] Create Product',
  props<{ productData: FormData }>()
);
export const createProductSuccess = createAction(
  '[Admin Product] Create Product Success',
  props<{ product: Product }>()
);
export const createProductFailure = createAction(
  '[Admin Product] Create Product Failure',
  props<{ error: any }>()
);

export const updateProduct = createAction(
  '[Admin Product] Update Product',
  props<{ id: number; productData: FormData }>()
);
export const updateProductSuccess = createAction(
  '[Admin Product] Update Product Success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  '[Admin Product] Update Product Failure',
  props<{ error: any }>()
);

export const deleteProduct = createAction(
  '[Admin Product] Delete Product',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  '[Admin Product] Delete Product Success',
  props<{ id: number }>()
);

export const deleteProductFailure = createAction(
  '[Admin Product] Delete Product Failure',
  props<{ error: any }>()
);
