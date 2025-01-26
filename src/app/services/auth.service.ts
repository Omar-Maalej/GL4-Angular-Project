import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api/users/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(this.baseUrl+'login/', body, {
      headers: {
        'skip': 'true',
      },
    });
  }

  signup(email: string, password: string, firstName: string, lastName: string, isAdmin:boolean=false): Observable<any> {
    const body = {  "first_name":firstName,
      "last_name":lastName,
      "email":email,
      "password":password,"is_admin":isAdmin};
    return this.http.post(this.baseUrl+'register/', body, 
      {
        headers: {
          'skip': 'true',
        },
      }
    );
  }

  refreshToken(): Observable<any> {
    const body = { refresh: localStorage.getItem('refresh_token') };
    return this.http.post(this.baseUrl+'token/refresh/', body);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  
}
