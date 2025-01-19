import { Component } from '@angular/core';
import { BlogCardComponent } from "./blog-card/blog-card.component";

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
