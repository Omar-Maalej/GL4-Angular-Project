import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogState } from './blog.state';

export const selectBlogState = createFeatureSelector<BlogState>('blog');

export const selectPosts = createSelector(
  selectBlogState,
  (state) => state.posts
);

export const selectPostDetails = createSelector(
  selectBlogState,
  (state) => state.postDetails
);