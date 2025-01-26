import { Component } from '@angular/core';
import { blogs, Blog } from './dummy-blogs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-blogs',
  imports: [],
  templateUrl: './admin-blogs.component.html',
  styleUrl: './admin-blogs.component.css',
})
export class AdminBlogsComponent {
  constructor(private router: Router) {}

  navigateToDetails(blog: Blog) {
    this.router.navigate(['admin', 'blogs', blog.id]);
  }
  deleteBlog(_t13: Blog) {
    throw new Error('Method not implemented.');
  }
  approveBlog(_t13: Blog) {
    throw new Error('Method not implemented.');
  }
  blogs: Blog[] = blogs;
}
