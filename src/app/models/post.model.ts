export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  comments_count: number;
  likes_count: number;
  images: Array<{ id: number, image: string }>;
}
