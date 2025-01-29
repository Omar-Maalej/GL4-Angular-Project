import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  stripePromise = loadStripe('pk_test_51L9WOHDGmZ79p2nYZilrkl0oAe463ehlxg9z62IpcNxCR7HXOLtl801ff2cQwNv39tdlW3z7WUGj3K1BKy3Z8vYG00qx4F8V1A'); 

  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  async checkoutSpeceficOrder(orderId: number): Promise<void> {
    this.orderService.checkoutSpeceficOrder(orderId)
      .subscribe(async response => {
        const stripe = await this.stripePromise;
        stripe?.redirectToCheckout({ sessionId: response.sessionId });
      });
  }
}
