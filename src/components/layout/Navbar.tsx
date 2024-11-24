import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Leisure Webster
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/blog" className="hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <Link href="/portfolio" className="hover:text-gray-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-gray-600 transition-colors">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
