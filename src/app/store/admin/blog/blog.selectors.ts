import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminBlogState } from './blog.state';

export const selectAdminBlogState = createFeatureSelector<AdminBlogState>('adminBlog');

export const selectAdminPosts = createSelector(
  selectAdminBlogState,
  (state) => state.posts
);

export const selectAdminPostDetails = createSelector(
  selectAdminBlogState,
  (state) => state.postDetails
);