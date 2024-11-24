import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              IT Analysis & Business Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bridging the gap between business needs and technical solutions through
              expert analysis and innovative strategies.
            </p>
            <div className="space-x-4">
              <Link
                href="/portfolio"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/blog"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <Image
              src="/img/main.webp"
              alt="IT Analysis and Business Solutions"
              width={800}
              height={600}
              priority
              className="rounded-lg transition-transform duration-700 group-hover:scale-105 object-cover w-full h-full"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-transparent rounded-lg transition-opacity duration-700 group-hover:opacity-75"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 border-t">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add featured project cards here */}
        </div>
      </section>
    </div>
  );
}
