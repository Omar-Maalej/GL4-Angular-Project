import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  addToCart(product: CartItem) {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(item => item.prodId === product.prodId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...product, quantity: 1 });
    }

    this.cartItems.next(currentItems);
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.getValue().filter(item => item.prodId !== productId);
    this.cartItems.next(currentItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.getValue();
    const itemToUpdate = currentItems.find(item => item.prodId === productId);

    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
      this.cartItems.next(currentItems);
    }
  }

  getCartItems() {
    return this.cartItems.getValue();
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
