import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [UpperCasePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input<Product>({
    id : 0,
    name : "",
    price : 0,
    discount : null,
    image : ""
  });
}
