export interface User {
    refresh: string;
    access: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
}

export interface AuthState {
  user: User | null;
  error: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  isErrored: boolean;
}

export const authInitialState: AuthState = {
  user: null,
  error: '',
  isLoading: false,
  isLoggedIn: false,
    isErrored: false
};