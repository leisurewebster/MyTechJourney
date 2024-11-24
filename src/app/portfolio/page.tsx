export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project cards will be added here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Project Title</h3>
          <p className="text-gray-600 mb-4">
            Brief description of the project and your role in it.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Business Analysis
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              System Integration
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
