import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BlogActions from './blog.actions';
import { BlogService } from '../../services/blog.service';

@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private blogService: BlogService) {}

  // Load Posts
  loadPosts$ = createEffect(() => () =>
    this.actions$.pipe(
      ofType(BlogActions.loadPosts),
      mergeMap(() => {
        console.log("here");

        return this.blogService.getPosts().pipe(
          map((posts) => BlogActions.loadPostsSuccess({ posts })),
          catchError((error) => of(BlogActions.loadPostsFailure({ error })))
        )}
      ) 
    )
  );

  // Create Post
  createPost$ = createEffect(() => () =>
    this.actions$.pipe(
      ofType(BlogActions.createPost),
      mergeMap(({ postData }) =>
        this.blogService.createPost(postData).pipe(
          map((post) => BlogActions.createPostSuccess({ post })),
          catchError((error) => of(BlogActions.createPostFailure({ error })))
        )
      )
    )
  );

  // Get Post Details
  getPostDetails$ = createEffect(() => () =>
    this.actions$.pipe(
      ofType(BlogActions.getPostDetails),
      mergeMap(({ id }) =>
        this.blogService.getPost(id).pipe(
          map((post) => BlogActions.getPostDetailsSuccess({ post })),
          catchError((error) => of(BlogActions.getPostDetailsFailure({ error })))
        )
      )
    )
  );

  // Update Post
  updatePost$ = createEffect(() => () =>
    this.actions$.pipe(
      ofType(BlogActions.updatePost),
      mergeMap(({ id, postData }) =>
        this.blogService.updatePost(id, postData).pipe(
          map((post) => BlogActions.updatePostSuccess({ post })),
          catchError((error) => of(BlogActions.updatePostFailure({ error })))
        )
      )
    )
  );

  // Delete Post
  deletePost$ = createEffect(() => () =>
    this.actions$.pipe(
      ofType(BlogActions.deletePost),
      mergeMap(({ id }) =>
        this.blogService.deletePost(id).pipe(
          map(() => BlogActions.deletePostSuccess({ id })),
          catchError((error) => of(BlogActions.deletePostFailure({ error })))
        )
      )
    )
  );
}