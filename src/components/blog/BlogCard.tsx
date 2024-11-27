import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { BlogPost } from '@/types/blog';
import { defaultImages } from '@/constants/config';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <Image
            src={post.image_url || defaultImages.blogPlaceholder}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <time className="text-sm text-gray-500">
            {format(new Date(post.created_at), 'MMMM d, yyyy')}
          </time>
          <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600">
            {post.title}
          </h2>
          <p className="mt-3 text-gray-500 line-clamp-3">
            {post.content.substring(0, 150)}...
          </p>
          <div className="mt-4 flex items-center">
            <span className="text-sm font-medium text-primary-600">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}