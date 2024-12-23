import React from 'react';

const scholarships = [
  {
    title: 'Merit Scholarship',
    amount: '50% tuition coverage',
    description: 'For students with exceptional academic performance',
    requirements: ['Minimum 85% in previous studies', 'Valid IELTS/TOEFL score', 'Letter of recommendation']
  },
  {
    title: 'Sports Excellence Scholarship',
    amount: '40% tuition coverage',
    description: 'For outstanding athletes',
    requirements: ['National level achievements', 'Sports certificates', 'Physical fitness test']
  },
  {
    title: 'Cultural Scholarship',
    amount: '35% tuition coverage',
    description: 'For students excelling in arts and culture',
    requirements: ['Portfolio submission', 'Previous performances record', 'Cultural achievement certificates']
  }
];

const Scholarships = () => {
  return (
    <section className="py-16 bg-gray-50" id="scholarships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Scholarships</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">{scholarship.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">{scholarship.amount}</p>
              <p className="text-gray-600 mb-4">{scholarship.description}</p>
              <ul className="list-disc list-inside text-gray-600">
                {scholarship.requirements.map((req, idx) => (
                  <li key={idx} className="mb-1">{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scholarships;