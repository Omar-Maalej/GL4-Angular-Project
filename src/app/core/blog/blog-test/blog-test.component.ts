import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';  // Make sure the correct path is used
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-blog-test',
  templateUrl: './blog-test.component.html',
  styleUrls: ['./blog-test.component.css']
})
export class BlogTestComponent implements OnInit {
  posts: Post[] = [];
  errorMessage: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.blogService.getPosts().subscribe(
      (data) => {
        console.log(data);
        console.log('type of data:', typeof data[0].constructor.name);
        this.posts = data; // On success, set the posts
      },
      (error) => {
        this.errorMessage = 'Error fetching posts: ' + error.message; // On error, display error message
      }
    );
  }
}
