import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8000/api/product/';

  constructor(private http: HttpClient) {}

//   getProducts(): Observable<any> {
//     return this.http.get(`${this.apiUrl}products/`);
//   }

  createCheckoutSession(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}create-checkout-session/`, orderData);
  }

  confirmPayment(sessionId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}payment-success/`, { session_id: sessionId });
  }

  getUserOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}user-orders/`);
  }
}
