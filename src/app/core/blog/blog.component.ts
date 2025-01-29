import { Component } from '@angular/core';
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { AuthState } from '../../store/auth/auth.state';
import { Observable, tap } from 'rxjs';
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

  posts$: Observable<Post[]>;
  isLoggedIn$: Observable<AuthState['isLoggedIn']>;

  constructor(private blogService: BlogService,
    private router: Router,
    private store: Store<{ auth: AuthState , blog: BlogState }>
  ) {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
    this.posts$ = this.store.select(selectPosts);
    this.posts$.subscribe((posts) => {
      tap((posts) => {
        console.log(posts);
      });
    }
      );
    
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  addBlog() {
    this.router.navigate(['/blog/add']);
  }

  trackByPostId(index: number, post: Post) {
    return post.id;
  }
}
