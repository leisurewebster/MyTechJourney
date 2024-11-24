import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose lg:prose-lg">
            <p className="text-lg text-gray-600 mb-6">
              As an IT Analyst specializing in business and system analysis, I bridge
              the gap between business needs and technical solutions. With expertise
              in low-code/no-code platforms and system integration, I help
              organizations optimize their processes and achieve their digital
              transformation goals.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Skills & Expertise</h2>
            <div className="grid grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-gray-600">
                <li>Business Analysis</li>
                <li>System Integration</li>
                <li>Process Optimization</li>
                <li>Requirements Gathering</li>
              </ul>
              <ul className="list-disc list-inside text-gray-600">
                <li>Low-Code Development</li>
                <li>Project Management</li>
                <li>Stakeholder Management</li>
                <li>Technical Documentation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-center items-start pt-4 lg:pl-12">
          <div className="relative w-[400px] rounded-lg overflow-hidden group">
            <div className="aspect-square">
              <Image
                src="/img/about.webp"
                alt="Leisure Webster - IT Analyst"
                width={400}
                height={400}
                priority
                className="rounded-lg transition-transform duration-700 group-hover:scale-105 object-cover w-full h-full"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-500/5 to-transparent rounded-lg transition-opacity duration-700 group-hover:opacity-75"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
