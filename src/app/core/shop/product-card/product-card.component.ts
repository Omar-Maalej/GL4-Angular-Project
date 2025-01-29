import { Component, input, output } from '@angular/core';
import { Product } from '../../../models/product';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [UpperCasePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(
    private router: Router
  ) {}

  product = input<Product>({
    id : 0,
    name : "",
    price : 0,
    discount : null,
    image : "",
    description : ""
  });
  navigateToProductDetails() {
    const productToSend = {
      id: this.product().id,
      name: this.product().name,
      price: this.product().price,
      discount: this.product().discount,
      image: this.product().image,
      description: this.product().description
    };
  
    this.router.navigate(['/product', this.product().id], {
      state: { product: productToSend }
      
    });
  }
  
  

  addToCart = output<Product>();

  onAddToCart() {
    this.addToCart.emit(this.product());
  }
}
