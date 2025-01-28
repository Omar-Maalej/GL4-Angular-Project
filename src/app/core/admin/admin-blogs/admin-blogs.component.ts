import { Component } from '@angular/core';
import { blogs, Blog } from './dummy-blogs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminBlogState } from '../../../store/admin/blog/blog.state';
import { Observable } from 'rxjs';
import { Post } from '../../../models/post.model';
import { selectAdminPosts } from '../../../store/admin/blog/blog.selectors';
import { changePostStatus, loadPosts } from '../../../store/admin/blog/blog.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-blogs',
  imports: [CommonModule],
  templateUrl: './admin-blogs.component.html',
  styleUrl: './admin-blogs.component.css',
})
export class AdminBlogsComponent {

  posts$: Observable<Post[]>;
  

  constructor(private router: Router, 
    private store: Store<{ adminBlog: AdminBlogState }>
  ) {
    this.posts$ = this.store.select(selectAdminPosts);
    this.posts$.subscribe((posts) => {
      console.log(posts);
    });
  }

  ngOnInit(): void {
    console.log("here admin");
    this.store.dispatch(loadPosts());
  }

  changePostStatus(id: number, status: string) {
    this.store.dispatch(changePostStatus({ id, status }));
  }



  navigateToDetails(blog: Blog) {
    this.router.navigate(['admin', 'blogs', blog.id]);
  }
  deleteBlog(_t13: Blog) {
    throw new Error('Method not implemented.');
  }
  approveBlog(blog: Post) {
    this.changePostStatus(blog.id, 'approved');
  }
  trackByPostId(index: number, post: Post) {
    return post.id;
  }
  // blogs: Blog[] = blogs;
}
