import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AdminProductState } from '../../../store/admin/product/product.state';
import { selectAdminProducts } from '../../../store/admin/product/product.selectors';
import { loadProducts } from '../../../store/admin/product/product.actions';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css',
  imports: [CurrencyPipe, AsyncPipe],
  standalone: true,
})
export class AdminProductsComponent {
  products$: Observable<Product[]>;

  constructor(
    private router: Router,

    private store: Store<{ adminProduct: AdminProductState }>
  ) {
    this.products$ = this.store.select(selectAdminProducts);
    this.products$.subscribe((products) => {
      console.log(products);
    });
  }

  ngOnInit(): void {
    console.log('here admin');
    this.store.dispatch(loadProducts());
  }

  addNewProduct() {
    this.router.navigate(['admin', 'products', 'new']);
  }

  editProduct(product: any) {
    this.router.navigate(['admin', 'products', product.id, 'edit']);
  }

  deleteProduct(product: any) {
    console.log('Delete Product:', product);
  }
}
