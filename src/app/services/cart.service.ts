import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : []);
  cartItems$ = this.cartItems.asObservable();

  constructor(private toastr : ToastrService, private router : Router) {}

  addToCart(product: CartItem) {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(item => item.prodId === product.prodId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(currentItems));

    const toast = this.toastr.success(
      `${product.quantity} x [ ${product.name} ] added! Click To View Cart`,
      'Product Added'
    );

    toast.onTap.subscribe(() => {
      this.router.navigate(['/cart']);
    });

    this.cartItems.next(currentItems);
  }

  removeFromCart(productId: number) {
    const productName = this.cartItems.getValue().find(item => item.prodId === productId)?.name;
    const currentItems = this.cartItems.getValue().filter(item => item.prodId !== productId);

    localStorage.setItem('cartItems', JSON.stringify(currentItems));
    this.cartItems.next(currentItems);

    const toast = this.toastr.error(
      `[ ${productName} ] removed!`,
      'Product Removed'
    );
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.getValue();
    const itemToUpdate = currentItems.find(item => item.prodId === productId);

    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
      localStorage.setItem('cartItems', JSON.stringify(currentItems));
      this.cartItems.next(currentItems);
    }
  }

  getCartItems() {
    return this.cartItems.getValue();
  }

  clearCart() {
    localStorage.removeItem('cartItems');
    this.cartItems.next([]);
  }
}
