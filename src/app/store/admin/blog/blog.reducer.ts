import { createReducer, on } from '@ngrx/store';
import { loadPosts, loadPostsSuccess, loadPostsFailure, getPostDetails, getPostDetailsSuccess, getPostDetailsFailure, changePostStatus, changePostStatusSuccess, changePostStatusFailure } from './blog.actions';


import { initialState } from './blog.state';

export const adminBlogReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
  on(loadPostsFailure, (state, { error }) => ({ ...state, error })),
  on(getPostDetails, state => ({ ...state, postDetails: null })),
  on(getPostDetailsSuccess, (state, { post }) => ({
    ...state,
    postDetails: post,
  })),
  on(getPostDetailsFailure, (state, { error }) => ({ ...state, error })),
  on(changePostStatus, state => ({ ...state, isLoading: true })),  
  on(changePostStatusSuccess, (state, { post }) => ({
    ...state,
    posts: state.posts.map(p => (p.id === post.id ? post : p)),
    isLoading: false,
  })),
  on(changePostStatusFailure, (state, { error }) => ({ ...state, error, isLoading: false })),
);