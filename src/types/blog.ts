export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  author: string;
  slug: string;
}

export interface BlogPostPreview extends Pick<BlogPost, 'id' | 'title' | 'image_url' | 'created_at' | 'author' | 'slug'> {
  description: string;
}