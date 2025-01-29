import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SampleUser } from '../models/sample-user.model';



export interface ChatMessage {
  id: number;
  user: SampleUser;
  message: string;
  response: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  private baseUrl = 'http://127.0.0.1:8000/api/chatbot/';
  // private mockMessages: ChatMessage[] = [/* Your JSON data here */];
  
  constructor(private http: HttpClient) {}
  

  getMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(`${this.baseUrl}`);
  }

  sendMessage(message: string): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(`${this.baseUrl}`, { message });
  }
}