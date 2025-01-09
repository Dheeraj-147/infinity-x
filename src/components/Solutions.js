'use client';
import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Education',
      description: 'Interactive solutions for modern classrooms',
      icon: '🎓',
    },
    {
      title: 'Corporate',
      description: 'Professional display solutions for businesses',
      icon: '💼',
    },
    {
      title: 'Retail',
      description: 'Engaging digital signage solutions',
      icon: '🏪',
    },
    {
      title: 'Hospitality',
      description: 'Premium entertainment solutions',
      icon: '🏨',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 