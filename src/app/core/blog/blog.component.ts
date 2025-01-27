import { Component } from '@angular/core';
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { CommonModule, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Blog } from '../../models/blog';
import { BlogTestComponent } from "./blog-test/blog-test.component";
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';
import { AuthState } from '../../store/auth/auth.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent, FormsModule,CommonModule ,BlogTestComponent, BlogTestComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  searchQuery: string = '';

  posts: Post[] = [];
  isLoggedIn$: Observable<AuthState['isLoggedIn']>;

  constructor(private blogService: BlogService,
    private router: Router,
    private store: Store<{ auth: AuthState }>
  ) {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
    
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  addBlog() {
    this.router.navigate(['/blog/add']);
  }




  fetchPosts(): void {
    this.blogService.getPosts().subscribe(
      (data) => {
        console.log(data);
        this.posts = data; // On success, set the posts
        console.log('type of data:', typeof data[0].constructor.name);
      },
      (error) => {
        console.log(error);
        // this.errorMessage = 'Error fetching posts: ' + error.message; // On error, display error message
      }
    );
  }

  // blogs: Blog[] = [
  //   {
  //     id: 1,
  //     title: 'The Ultimate Guide to Fitness',
  //     date: 'July 20, 2025',
  //     description: 'Discover the best tips to stay in shape and achieve your fitness goals.',
  //     content: 'Full article content goes here...',
  //     image: 'assets/blog1.jpg',
  //     author: {
  //       firstname: 'Sarah',
  //       lastname: 'Johnson',
  //       email: 'sarah@example.com',
  //       image: 'https://api.dicebear.com/9.x/initials/svg?seed=Sarah%20Johnson'
  //     },
  //     comments: []
  //   },
  //   {
  //     id: 2,
  //     title: '10 Best Exercises for Weight Loss',
  //     date: 'August 5, 2025',
  //     description: 'These exercises will help you burn fat and stay in great shape!',
  //     content: 'Full article content goes here...',
  //     image: 'assets/blog2.jpg',
  //     author: {
  //       firstname: 'Michael',
  //       lastname: 'Brown',
  //       email: 'michael@example.com',
  //       image: 'https://api.dicebear.com/9.x/initials/svg?seed=Michael%20Brown'
  //     },
  //     comments: []
  //   },
  //   {
  //     id: 3,
  //     title: 'Healthy Eating: What You Need to Know',
  //     date: 'September 12, 2025',
  //     description: 'Learn how to create a balanced diet for a healthier lifestyle.',
  //     content: 'Full article content goes here...',
  //     image: 'assets/blog3.jpg',
  //     author: {
  //       firstname: 'Emily',
  //       lastname: 'Davis',
  //       email: 'emily@example.com',
  //       image: 'https://api.dicebear.com/9.x/initials/svg?seed=Emily%20Davis'
  //     },
  //     comments: []
  //   },
  //   {
  //     id: 4,
  //     title: '10 Best Exercises for Weight Loss',
  //     date: 'August 5, 2025',
  //     description: 'These exercises will help you burn fat and stay in great shape!',
  //     content: 'Full article content goes here...',
  //     image: 'assets/blog2.jpg',
  //     author: {
  //       firstname: 'Michael',
  //       lastname: 'Brown',
  //       email: 'michael@example.com',
  //       image: 'https://api.dicebear.com/9.x/initials/svg?seed=Michael%20Brown'
  //     },
  //     comments: []
  //   },
  //   {
  //     id: 5,
  //     title: 'Healthy Eating: What You Need to Know',
  //     date: 'September 12, 2025',
  //     description: 'Learn how to create a balanced diet for a healthier lifestyle.',
  //     content: 'Full article content goes here...',
  //     image: 'assets/blog3.jpg',
  //     author: {
  //       firstname: 'Emily',
  //       lastname: 'Davis',
  //       email: 'emily@example.com',
  //       image: 'https://api.dicebear.com/9.x/initials/svg?seed=Emily%20Davis'
  //     },
  //     comments: []
  //   }
  // ];
}
