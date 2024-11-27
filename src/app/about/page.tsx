import { Metadata } from 'next';
import Image from 'next/image';
import { defaultImages } from '@/constants/config';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team',
};

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: defaultImages.teamPlaceholder,
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: defaultImages.teamPlaceholder,
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: defaultImages.teamPlaceholder,
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Mission Section */}
      <section className="mb-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Our mission is to create innovative digital solutions that empower businesses
            and individuals to achieve their goals. We believe in combining cutting-edge
            technology with exceptional user experience to deliver outstanding results.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-sm p-6">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Email:</span>
                  contact@example.com
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Phone:</span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Address:</span>
                  123 Business Street, Suite 100, City, State 12345
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}