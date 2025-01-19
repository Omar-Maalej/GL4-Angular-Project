import { Component, input } from '@angular/core';
import { Blog } from '../../../models/blog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  blog = input<Blog>({
    id: 0,
    title: '',
    image: '',
    date: '',
    description: '',
    content: '',
    author: undefined,
    comments: []
  })

}
