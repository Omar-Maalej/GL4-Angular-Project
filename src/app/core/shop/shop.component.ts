import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../models/product';
import { ShopService } from '../../services/shop.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  constructor(
    private shopService : ShopService,
    private cartService : CartService
  ){}

  addToCart(product: Product) {
    const cartItem : CartItem = {
      prodId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    }
    this.cartService.addToCart(cartItem);

    //toast message

  }
  
  
  fakeProducts : Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'assets/sport-man.jpg',
      discount: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com/450',
      discount: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      discount : null,
      image: 'https://via.placeholder.com/450',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      image: 'https://via.placeholder.com/450',
      discount: 40,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com/450',
      discount: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      discount: null,
      image: 'https://via.placeholder.com/450',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      image: 'https://via.placeholder.com/450',
      discount: 40,
    }
  ]



}
