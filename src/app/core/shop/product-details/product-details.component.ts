import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: Product;
  constructor(private route: Router) {
    const navigationState = history.state;
    if (navigationState && navigationState.product) {
      this.product = navigationState.product;
    }
    console.log(this.product);
  }

  get discountedPrice(): number {
    if (this.product.discount) {
      return (
        this.product.price - (this.product.price * this.product.discount) / 100
      );
    }
    return this.product.price;
  }
}
