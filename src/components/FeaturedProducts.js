'use client';
import React from 'react';
import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    {
      title: 'Interactive Flat Panels',
      description: 'Advanced touch displays for education and business',
      image: '/images/ifp.jpg',
    },
    {
      title: 'LED Display Walls',
      description: 'Stunning visual solutions for any space',
      image: '/images/led-wall.jpg',
    },
    {
      title: 'Mirror TVs',
      description: 'Elegant entertainment solutions',
      image: '/images/mirror-tv.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200">
                  {/* Add actual images later */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Image Placeholder
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 