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
      description: 'This is a description of product 1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com/450',
      discount: 20,
      description: 'This is a description of product 2'


    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      discount : null,
      image: 'https://via.placeholder.com/450',
      description: 'This is a description of product 3'

    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      image: 'https://via.placeholder.com/450',
      discount: 40,
      description: 'This is a description of product 4'

    },
    {
      id: 5,
      name: 'Product 5',
      price: 200,
      image: 'https://via.placeholder.com/450',
      discount: 20,
      description: 'This is a description of product 5'

    },
    {
      id: 6,
      name: 'Product 6',
      price: 300,
      discount: null,
      image: 'https://via.placeholder.com/450',
      description: 'This is a description of product 7'

    },
    {
      id: 7,
      name: 'Product 7',
      price: 400,
      image: 'https://via.placeholder.com/450',
      discount: 40,
      description: 'This is a description of product 7'

    }
  ]



}
