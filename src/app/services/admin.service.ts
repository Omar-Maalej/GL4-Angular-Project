import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
// import { Comment } from '../models/comment.model';
// import { Like } from '../models/like.model';
// import { PostDetails } from '../models/post-details.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://127.0.0.1:8000/api/blog/admin/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    console.log('here blog service admin');
    return this.http.get<Post[]>(`${this.baseUrl}posts/`);
  }

  changeStatus(id: number, status: string): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}posts/${id}/status/`, {
      status,
    });
  }
}
