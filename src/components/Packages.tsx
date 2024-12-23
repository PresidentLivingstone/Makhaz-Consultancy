import React from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic Package',
    price: '$499',
    features: [
      'University Application Support',
      'Document Review',
      'Basic Visa Guidance',
      'Email Support'
    ]
  },
  {
    name: 'Premium Package',
    price: '$999',
    features: [
      'All Basic Package Features',
      'Scholarship Application Support',
      'Interview Preparation',
      'Priority Support',
      'Accommodation Guidance'
    ]
  },
  {
    name: 'VIP Package',
    price: '$1499',
    features: [
      'All Premium Package Features',
      'Dedicated Consultant',
      'Airport Pickup',
      '24/7 Support',
      'Local Bank Account Setup'
    ]
  }
];

const Packages = () => {
  return (
    <section className="py-16 bg-white" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4">{pkg.name}</h3>
              <p className="text-4xl font-bold text-gray-900 mb-6">{pkg.price}</p>
              <ul className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-[#1e3a8a] text-white py-2 rounded-md hover:bg-blue-900 transition-colors">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;