import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  sessionId: string | null = null;
  successMessage = '';

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.queryParamMap.get('session_id');

    if (this.sessionId) {
      this.orderService.confirmPayment(this.sessionId).subscribe({
        next: () => {
          this.successMessage = 'Payment Successful! Thank you for your order.';
        },
        error: () => {
          this.successMessage = 'Payment verification failed. Please contact support.';
        }
      });
    }
  }

  goToOrders(): void {
    // this.router.navigate(['/orders']);
    this.router.navigate(['/']);
  }
}
