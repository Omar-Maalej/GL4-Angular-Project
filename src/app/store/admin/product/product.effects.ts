import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as ProductActions from './product.actions';
import { ProductService } from '../../../services/product.service';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  // Load Products
  loadProducts$ = createEffect(
    () => () =>
      this.actions$.pipe(
        ofType(ProductActions.loadProducts),
        mergeMap(() =>
          this.productService.getProducts().pipe(
            map((products) => ProductActions.loadProductsSuccess({ products })),
            catchError((error) =>
              of(ProductActions.loadProductsFailure({ error }))
            )
          )
        )
      )
  );

  // Create Product
  createProduct$ = createEffect(
    () => () =>
      this.actions$.pipe(
        ofType(ProductActions.createProduct),
        mergeMap(({ productData }) =>
          this.productService.createProduct(productData).pipe(
            tap(() => {
              console.log('jaw behi lenna 2');
            }),
            map((product) => ProductActions.createProductSuccess({ product })),
            catchError((error) =>
              of(ProductActions.createProductFailure({ error }))
            )
          )
        )
      )
  );

  // Update Product
  updateProduct$ = createEffect(
    () => () =>
      this.actions$.pipe(
        ofType(ProductActions.updateProduct),
        mergeMap(({ id, productData }) =>
          this.productService.updateProduct(id, productData).pipe(
            map((product) => ProductActions.updateProductSuccess({ product })),
            catchError((error) =>
              of(ProductActions.updateProductFailure({ error }))
            )
          )
        )
      )
  );

  // Delete Product
  deleteProduct$ = createEffect(
    () => () =>
      this.actions$.pipe(
        ofType(ProductActions.deleteProduct),
        mergeMap(({ id }) =>
          this.productService.deleteProduct(id).pipe(
            map(() => ProductActions.deleteProductSuccess({ id })),
            catchError((error) =>
              of(ProductActions.deleteProductFailure({ error }))
            )
          )
        )
      )
  );
}
