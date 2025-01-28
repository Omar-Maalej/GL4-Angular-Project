import { AuthEffects } from "./auth/auth.effects";
import { BlogEffects } from "./blog/blog.effects";

export const appEffects = [
  AuthEffects,
  BlogEffects
];
