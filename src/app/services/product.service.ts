import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://127.0.0.1:8000/api/product/';

  constructor(private http: HttpClient) {}

  // Get list of all posts
  getProducts(): Observable<Product[]> {
    console.log('here product service');
    return this.http.get<Product[]>(`${this.baseUrl}`, {
      headers: {
        skip: 'true',
      },
    });
  }

  createProduct(productData: FormData): Observable<Product> {
    const headers = new HttpHeaders();
    return this.http.post<Product>(`${this.baseUrl}create/`, productData, {
      headers,
    });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}${id}/`);
  }

  updateProduct(id: number, postData: FormData): Observable<Product> {
    const headers = new HttpHeaders();
    return this.http.put<Product>(`${this.baseUrl}${id}/update/`, postData, {
      headers,
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${id}/delete/`);
  }
}
