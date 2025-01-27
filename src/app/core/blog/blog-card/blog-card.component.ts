import { Component, input } from '@angular/core';
import { Blog } from '../../../models/blog';
import { RouterLink } from '@angular/router';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-blog-card',
  imports: [RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  // blog = input<Blog>({
  //   id: 0,
  //   title: '',
  //   image: '',
  //   date: '',
  //   description: '',
  //   content: '',
  //   author: undefined,
  //   comments: []
  // })

  //a function to truncate the content of the blog post
  truncateContent(content: string, limit: number): string {
    return content.length > limit ? content.substring(0, limit) + '...' : content;
  }

  blogLink(id: number): string {
    return '/blog/' + id;
  }

  formatDate(date: string): string {
    return new Date(date).toDateString()
  }

  blog = input<Post>({
    id: 0,
    title: '',
    content: '',
    created_at: '',
    updated_at: '',
    comments_count: 0,
    likes_count: 0,
    images: [],
    user: {
      id: 0,
      first_name: '',
      last_name: '',
      email: ''
    }
  })
}
