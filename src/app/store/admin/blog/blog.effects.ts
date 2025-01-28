import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadPosts, loadPostsSuccess, loadPostsFailure, 
    changePostStatus, changePostStatusSuccess, changePostStatusFailure,
    getPostDetails, getPostDetailsSuccess, getPostDetailsFailure } from './blog.actions';
import { AdminService } from '../../../services/admin.service';

@Injectable()
export class AdminBlogEffects {
    constructor(private actions$: Actions, private adminService: AdminService) {}

    // Load Posts
    loadPosts$ = createEffect(() => () =>
        this.actions$.pipe(
            ofType(loadPosts),
            mergeMap(() => {
                console.log("here");

                return this.adminService.getPosts().pipe(
                    map((posts) => loadPostsSuccess({ posts })),
                    catchError((error) => of(loadPostsFailure({ error })))
                )}
            )
        )
    );

    //change post status
    changePostStatus$ = createEffect(() => () =>
        this.actions$.pipe(
            ofType(changePostStatus),
            mergeMap(({ id, status }) =>
                this.adminService.changeStatus(id, status).pipe(
                    map((post) => changePostStatusSuccess({ post})),
                    catchError((error) => of(changePostStatusFailure({ error })))
                )
            )
        )
    );


    // Get Post Details
    // getPostDetails$ = createEffect(() => () =>
    //     this.actions$.pipe(
    //         ofType(getPostDetails),
    //         mergeMap(({ id }) =>
    //             this.adminBlogService.getPost(id).pipe(
    //                 map((post) => getPostDetailsSuccess({ post })),
    //                 catchError((error) => of(getPostDetailsFailure({ error })))
    //             )
    //         )
    //     )
    // );

}
    