export interface AuthResponse {
    access: string; 
    refresh: string; 
  }
  
  export interface User {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    isAdmin?: boolean;
    
  }
  