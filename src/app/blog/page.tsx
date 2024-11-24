export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog post 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Low-Code
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Development
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">The Rise of Low-Code Platforms in Enterprise Solutions</h3>
            <p className="text-gray-600 mb-4">
              Exploring how low-code platforms are transforming enterprise application development and enabling rapid digital transformation.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Read more →</span>
            </div>
          </div>
        </div>

        {/* Blog post 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Business Analysis
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                Best Practices
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Effective Requirements Gathering Techniques</h3>
            <p className="text-gray-600 mb-4">
              A comprehensive guide to modern requirements gathering methods and tools for successful project outcomes.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Read more →</span>
            </div>
          </div>
        </div>

        {/* Blog post 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                System Integration
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                Architecture
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Bridging Legacy Systems with Modern Solutions</h3>
            <p className="text-gray-600 mb-4">
              Strategies for integrating legacy systems with modern applications while maintaining business continuity.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Read more →</span>
            </div>
          </div>
        </div>

        {/* Blog post 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                Project Management
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                Agile
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Agile Methodologies in Business Analysis</h3>
            <p className="text-gray-600 mb-4">
              How to effectively incorporate agile methodologies into business analysis practices for better project outcomes.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Read more →</span>
            </div>
          </div>
        </div>

        {/* Blog post 5 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                Digital Transformation
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Strategy
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Transformation Roadmap for SMEs</h3>
            <p className="text-gray-600 mb-4">
              A step-by-step guide to planning and implementing digital transformation initiatives for small and medium enterprises.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Read more →</span>
            </div>
          </div>
        </div>

        {/* Blog post 6 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm">
                UI/UX
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                Design
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">User-Centric Design in Business Applications</h3>
            <p className="text-gray-600 mb-4">
              Best practices for incorporating user experience design principles in business application development.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Read more →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
