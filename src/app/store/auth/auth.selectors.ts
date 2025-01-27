import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const selectAuth = (state: { auth: AuthState }) => state.auth;

export const user = createSelector(
    selectAuth,
  (state) => state.user
);

export const selectIsLoggedInAndError = createSelector(
    selectAuth,
  (state) => ({ isLoggedIn: state.isLoggedIn, error: state.error })
);

export const selectError = createSelector(
    selectAuth,
  (state) => state.error
);

export const selectIsLoading = createSelector(
    selectAuth,
  (state) => state.isLoading
);

export const selectIsErrored = createSelector(
    selectAuth,
  (state) => state.isErrored
);

export const selectIsLoggedIn = createSelector(
    selectAuth,
  (state) => state.isLoggedIn
);

export const selectUserRoleAndIsLoggedIn = createSelector(
    selectAuth,
  (state) => { return {isLoggedIn: state.isLoggedIn,  role: state.user?.role } }
);
