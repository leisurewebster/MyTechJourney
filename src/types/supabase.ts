export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          image_url: string | null;
          created_at: string;
          author: string | null;
          slug: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          image_url?: string | null;
          created_at?: string;
          author?: string | null;
          slug: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          image_url?: string | null;
          created_at?: string;
          author?: string | null;
          slug?: string;
        };
      };
    };
  };
}