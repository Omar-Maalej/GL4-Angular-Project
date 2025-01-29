import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { loadStripe } from '@stripe/stripe-js';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems : CartItem[] = [];

  stripePromise = loadStripe('pk_test_51L9WOHDGmZ79p2nYZilrkl0oAe463ehlxg9z62IpcNxCR7HXOLtl801ff2cQwNv39tdlW3z7WUGj3K1BKy3Z8vYG00qx4F8V1A'); 
  constructor(private cartService : CartService,
    private orderService: OrderService
  ) { }



  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, event: any) {
    const quantity = event.target.value;
    this.cartService.updateQuantity(productId, quantity);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  async checkout(): Promise<void> {
    console.log('checkout', this.cartItems);
    //items format 
    let items = this.cartItems.map(item => {
      return {
        "product_id": item.prodId,
        "quantity": item.quantity
      }
    });

    console.log("final items", items);
    this.orderService.createCheckoutSession({ items: items }).subscribe(async response => {
      const stripe = await this.stripePromise;
      stripe?.redirectToCheckout({ sessionId: response.sessionId });
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
