import { SampleUser } from "./sample-user.model";

export interface Like {
    id: number;
    user: SampleUser;
    post: number;
  }
  