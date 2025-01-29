import { createReducer, on } from '@ngrx/store';
import {
  loadPostsSuccess,
  createPostSuccess,
  getPostDetailsSuccess,
  updatePostSuccess,
  deletePostSuccess,
  loadPostsFailure,
  createPostFailure,
  getPostDetailsFailure,
} from './blog.actions';
import { initialState } from './blog.state';


export const blogReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
  on(loadPostsFailure, (state, { error }) => ({ ...state, error })),
  on(createPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
  })),
  on(createPostFailure, (state, { error }) => ({ ...state, error })),
  on(getPostDetailsSuccess, (state, { post }) => ({
    ...state,
    postDetails: post,
  })),
  on(getPostDetailsFailure, (state, { error }) => ({ ...state, error })),
  on(updatePostSuccess, (state, { post }) => ({
    ...state,
    posts: state.posts.map((p) => (p.id === post.id ? post : p)),
  })),
  on(deletePostSuccess, (state, { id }) => ({
    ...state,
    posts: state.posts.filter((p) => p.id !== id),
  }))
);