import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/supabase/queries';
import { BlogCard } from '@/components/blog/BlogCard';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts',
};



export default async function BlogPage() {
  try {
    const posts = await getBlogPosts();

    if (!posts.length) {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-500">No blog posts found.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        <ErrorMessage message={(error as Error).message} />
      </div>
    );
  }
}