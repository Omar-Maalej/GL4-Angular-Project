import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://127.0.0.1/api/blog/';

  constructor(private http: HttpClient) { }

  getPostsLists() {
    return this.http.get(this.baseUrl);
  }
}
