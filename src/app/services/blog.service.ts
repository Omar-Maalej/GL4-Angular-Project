import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { Like } from '../models/like.model';
import { PostDetails } from '../models/post-details.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://127.0.0.1:8000/api/blog/';

  constructor(private http: HttpClient) { }

  // Get list of all posts
  getPosts(): Observable<Post[]> {
    console.log("here blog service");
    return this.http.get<Post[]>(`${this.baseUrl}posts/`, 

    {
      headers: {
        'skip': 'true',
      },
    }
    );
  }

  // Create a new post
  createPost(postData: FormData): Observable<Post> {
    const headers = new HttpHeaders();
    return this.http.post<Post>(`${this.baseUrl}posts/create/`, postData, { headers });
  }

  // Get a specific post by ID
  getPost(id: number): Observable<PostDetails> {
    return this.http.get<PostDetails>(`${this.baseUrl}posts/${id}/`);
  }

  // Update a post
  updatePost(id: number, postData: FormData): Observable<Post> {
    const headers = new HttpHeaders();
    return this.http.put<Post>(`${this.baseUrl}posts/${id}/update/`, postData, { headers });
  }

  // Delete a post
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}posts/${id}/delete/`);
  }

  // Get comments for a specific post
  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}comments/?post=${postId}`);
  }

  // Create a comment for a post
  createComment(postId: number, content: string): Observable<Comment> {
    const data = { post: postId, content };
    return this.http.post<Comment>(`${this.baseUrl}comments/create/`, data);
  }

  // Update a comment
  updateComment(commentId: number, content: string): Observable<Comment> {
    const data = { content };
    return this.http.put<Comment>(`${this.baseUrl}comments/${commentId}/update/`, data);
  }

  // Delete a comment
  deleteComment(commentId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}comments/${commentId}/delete/`);
  }

  // Toggle like for a post
  toggleLike(postId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}likes/toggle/`, { post: postId });
  }

  // Get all likes for a post
  getLikes(postId: number): Observable<Like[]> {
    return this.http.get<Like[]>(`${this.baseUrl}posts/${postId}/likes/`);
  }
}
