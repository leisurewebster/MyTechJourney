import { supabase } from './config';
import { BlogPost } from '@/types/blog';

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch blog posts: ${error.message}`);
  }

  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error(`Failed to fetch blog post: ${error.message}`);
  }

  return data as BlogPost;
}