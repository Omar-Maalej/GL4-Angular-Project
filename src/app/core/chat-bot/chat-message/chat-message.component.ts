import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../../services/chat.service';
import { CommonModule } from '@angular/common';
import { MarkdownPipe } from '../../../pipes/markdown.pipe';

@Component({
  selector: 'app-chat-message',
  imports: [CommonModule, MarkdownPipe],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {
  @Input() message!: ChatMessage;
  @Input() isBot!: boolean;
}