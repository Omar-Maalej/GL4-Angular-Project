import { Component, Input, input } from '@angular/core';
import { Comment } from '../../../models/comment.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-comments',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-comments.component.html',
  styleUrl: './blog-comments.component.css'
})
export class BlogCommentsComponent {

    // comments = input<Comment[]>([]);
    @Input() comments: Comment[] = [];
    @Input() postId: number = 0;
    comment: string = '';

    constructor(
      private blogService: BlogService,
    ) {}

    ngOnChanges(): void {};   

    formatDate(date: string): string {
        return new Date(date).toDateString()
    }
    
    onComment(): void {
      
      this.blogService.createComment(this.postId, this.comment).subscribe(
        (data) => {
          console.log(data);
          this.comments = [data, ...this.comments];
          this.comment = '';
        },
        (error) => {
          console.log(error);
        }
      );

      
    }



}
