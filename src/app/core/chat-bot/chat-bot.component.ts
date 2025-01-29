import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef, signal } from '@angular/core';
import { ChatMessage, ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule, ChatMessageComponent, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage = '';
  loading = signal(false);
  @ViewChild('scrollDiv') private scrollDiv!: ElementRef;


  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  ngAfterViewChecked() {

    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.scrollDiv) {
    const div = this.scrollDiv.nativeElement;
    div.scrollTop = div.scrollHeight;
    console.log('scrolling', div.scrollTop, div.scrollHeight);
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.loading.set(true);
      this.chatService.sendMessage(this.newMessage).subscribe(response => {
        this.newMessage = '';
        this.messages.push(response);
        this.loading.set(false);
      });
    }
  }
}