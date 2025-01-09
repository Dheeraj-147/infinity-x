'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';  // Adjust the path/filename as needed

const Footer = () => {
  const footerData = {
    companyInfo: {
      name: "InfinityX",
      description: "Leading provider of interactive display solutions for education and business",
      address: "Gopala Krishna Complex, Ground Floor, Benz Circle, Vijayawada, Andhra Pradesh, India",
      email: "matrixsolutions.inn@gmail.com",
      phone: "+91 96663 05689"
    },
    quickLinks: [
      { name: "About Us", path: "/about" },
      { name: "Products", path: "/products" },
      { name: "Solutions", path: "/solutions" },
      { name: "Support", path: "/support" },
      { name: "Contact", path: "/contact" }
    ],
    products: [
      { name: "Interactive Boards", path: "/products/interactive-boards" },
      { name: "Interactive Flat Panels", path: "/products/interactive-flat-panels" },
      { name: "Commercial Display", path: "/products/commercial-display" },
      { name: "LED Display", path: "/products/led-display" }
    ],
    support: [
      { name: "Technical Support", path: "/support/technical" },
      { name: "Downloads", path: "/support/downloads" },
      { name: "FAQs", path: "/support/faqs" },
      { name: "Warranty Info", path: "/support/warranty" }
    ],
    socialMedia: [
      { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/company/infinityxindia" },
      { name: "Twitter", icon: "twitter", url: "https://twitter.com/infinityxindia" },
      { name: "Facebook", icon: "facebook", url: "https://facebook.com/infinityxindia" },
      { name: "Instagram", icon: "instagram", url: "https://instagram.com/infinityxindia" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src={logo} 
                  alt="InfinityX Logo" 
                  className="h-12 w-auto"
                />
                <span className="flex items-center text-2xl font-bold">
                  <span className="text-orange-500">INFINITY</span>
                  <span className="text-white">X</span>
                </span>
              </Link>
            </div>
            <p className="mb-4 text-sm">{footerData.companyInfo.description}</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {footerData.companyInfo.address}
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {footerData.companyInfo.email}
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {footerData.companyInfo.phone}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerData.products.map((product) => (
                <li key={product.name}>
                  <Link to={product.path} className="hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerData.support.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              {footerData.socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} {footerData.companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 