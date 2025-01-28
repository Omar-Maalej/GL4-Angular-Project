import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { PostDetails } from '../../models/post-details.model';

// Load Posts
export const loadPosts = createAction('[Blog] Load Posts');
export const loadPostsSuccess = createAction(
  '[Blog] Load Posts Success',
  props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(
  '[Blog] Load Posts Failure',
  props<{ error: any }>()
);

// Create Post
export const createPost = createAction(
  '[Blog] Create Post',
  props<{ postData: FormData }>()
);
export const createPostSuccess = createAction(
  '[Blog] Create Post Success',
  props<{ post: Post }>()
);
export const createPostFailure = createAction(
  '[Blog] Create Post Failure',
  props<{ error: any }>()
);

// Get Post Details
export const getPostDetails = createAction(
  '[Blog] Get Post Details',
  props<{ id: number }>()
);
export const getPostDetailsSuccess = createAction(
  '[Blog] Get Post Details Success',
  props<{ post: PostDetails }>()
);
export const getPostDetailsFailure = createAction(
  '[Blog] Get Post Details Failure',
  props<{ error: any }>()
);

// Update Post
export const updatePost = createAction(
  '[Blog] Update Post',
  props<{ id: number; postData: FormData }>()
);
export const updatePostSuccess = createAction(
  '[Blog] Update Post Success',
  props<{ post: Post }>()
);
export const updatePostFailure = createAction(
  '[Blog] Update Post Failure',
  props<{ error: any }>()
);

// Delete Post
export const deletePost = createAction(
  '[Blog] Delete Post',
  props<{ id: number }>()
);
export const deletePostSuccess = createAction(
  '[Blog] Delete Post Success',
  props<{ id: number }>()
);
export const deletePostFailure = createAction(
  '[Blog] Delete Post Failure',
  props<{ error: any }>()
);