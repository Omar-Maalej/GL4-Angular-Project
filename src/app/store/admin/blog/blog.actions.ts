import { createAction, props } from '@ngrx/store';
import { Post } from '../../../models/post.model';
import { PostDetails } from '../../../models/post-details.model';


export const loadPosts = createAction('[Admin Blog] Load Posts');
export const loadPostsSuccess = createAction(
  '[Admin Blog] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Admin Blog] Load Posts Failure',
  props<{ error: any }>()
);

export const getPostDetails = createAction(
  '[Admin Blog] Get Post Details',
  props<{ id: number }>()
);

export const getPostDetailsSuccess = createAction(
  '[Admin Blog] Get Post Details Success',
  props<{ post: PostDetails }>()
);  

export const getPostDetailsFailure = createAction(
  '[Admin Blog] Get Post Details Failure',
  props<{ error: any }>()
);

export const changePostStatus = createAction(
  '[Admin Blog] Change Post Status',
  props<{ id: number, status: string }>()
);


export const changePostStatusSuccess = createAction(
  '[Admin Blog] Change Post Status Success',
  props<{ post: Post }>()
);

export const changePostStatusFailure = createAction(
  '[Admin Blog] Change Post Status Failure',
  props<{ error: any }>()
);
