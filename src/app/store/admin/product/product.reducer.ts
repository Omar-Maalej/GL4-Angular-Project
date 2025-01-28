import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  createProduct,
  createProductSuccess,
  createProductFailure,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
} from './product.actions';

import { initialState } from './product.state';

export const adminProductReducer = createReducer(
  initialState,

  // Load Products
  on(loadProducts, (state) => ({ ...state, isLoading: true })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    isLoading: false,
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  // Create Product
  on(createProduct, (state) => ({ ...state, isLoading: true })),
  on(createProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    isLoading: false,
  })),
  on(createProductFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  // Update Product
  on(updateProduct, (state) => ({ ...state, isLoading: true })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((p) => (p.id === product.id ? product : p)),
    isLoading: false,
  })),
  on(updateProductFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  // Delete Product
  on(deleteProduct, (state) => ({ ...state, isLoading: true })),
  on(deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== id),
    isLoading: false,
  })),
  on(deleteProductFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
