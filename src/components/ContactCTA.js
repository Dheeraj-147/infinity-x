'use client';
import React from 'react';

const ContactCTA = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Get in touch with us to discuss your display solution needs
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Contact Us Now
        </button>
      </div>
    </section>
  );
};

export default ContactCTA; 