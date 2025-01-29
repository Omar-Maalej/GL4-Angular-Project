import { Component } from '@angular/core';
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { AuthState } from '../../store/auth/auth.state';
import { Observable, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../store/auth/auth.selectors';
import { loadPosts } from '../../store/blog/blog.actions';
import { BlogState } from '../../store/blog/blog.state';
import { selectPosts } from '../../store/blog/blog.selectors';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent, FormsModule,CommonModule ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  searchQuery: string = '';
  currentPage: number = 1;
  pageSize: number = 3;
  totalPosts: number = 0;
  posts$: Observable<Post[]> = of([]);
  isLoggedIn$: Observable<AuthState['isLoggedIn']>;

  constructor(private blogService: BlogService,
    private router: Router,
    private store: Store<{ auth: AuthState , blog: BlogState }>
  ) {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
    this.blogService.getPaginatedPosts(this.currentPage, this.pageSize, this.searchQuery).subscribe(
      (response) => {
        this.totalPosts = response.count;
        this.posts$ = of(response.results);
      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
    

  }

  loadPosts(): void {
    this.blogService.getPaginatedPosts(this.currentPage, this.pageSize, this.searchQuery).subscribe(
      (response) => {
        this.totalPosts = response.count;
        this.posts$ = of(response.results);
      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
  }

  searchBlogs = () => {
    this.currentPage = 1;
    this.loadPosts();
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPosts();
  }

  addBlog() {
    this.router.navigate(['/blog/add']);
  }

  trackByPostId(index: number, post: Post) {
    return post.id;
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.totalPosts / this.pageSize);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
