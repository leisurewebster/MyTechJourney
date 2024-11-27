import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/supabase/queries';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { defaultImages } from '@/constants/config';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.content.substring(0, 160),
    };
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Read our blog post',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative h-64 sm:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image_url || defaultImages.blogPlaceholder}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 mb-8">
          <time>{format(new Date(post.created_at), 'MMMM d, yyyy')}</time>
          {post.author && (
            <>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </>
          )}
        </div>
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    );
  } catch (error) {
    return <ErrorMessage message={(error as Error).message} />;
  }
}