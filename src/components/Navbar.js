import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

/**
 * @typedef {Object} ProductItem
 * @property {string} name
 * @property {string} [image]
 * @property {string} [badge]
 * @property {string} [specs]
 * @property {string} [icon]
 */

/**
 * @typedef {Object} ProductCategory
 * @property {string} description
 * @property {ProductItem[]} [models]
 * @property {ProductItem[]} [series]
 * @property {ProductItem[]} [products]
 * @property {ProductItem[]} [categories]
 * @property {string[]} [types]
 * @property {string[]} [features]
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const productCategories = {
    'Interactive Boards': {
      description: 'Advanced interactive solutions for modern collaboration',
      models: [
        { 
          name: 'IFP75', 
          badge: 'Google Certified Panel', 
          image: '/images/products/ifp75.jpg',
          specs: 'Ultra HD 4K Resolution, 75" Display'
        },
        { 
          name: 'IFP86', 
          badge: 'Google Certified Panel', 
          image: '/images/products/ifp86.jpg',
          specs: 'Ultra HD 4K Resolution, 86" Display'
        },
        { 
          name: 'IFP98', 
          badge: 'Google Certified Panel', 
          image: '/images/products/ifp98.jpg',
          specs: 'Ultra HD 4K Resolution, 98" Display'
        },
      ],
    },
    'Interactive Flat Panels': {
      description: 'Professional display solutions for education and business',
      models: [
        { name: 'V6 Classic Series', image: '/images/products/v6-classic.jpg', specs: 'Standard 4K Display' },
        { name: 'V6 ViewPro Series', image: '/images/products/v6-viewpro.jpg', specs: 'Advanced Touch Features' },
        { name: 'V6 Transcend Series', image: '/images/products/v6-transcend.jpg', specs: 'Premium Display Solution' },
      ],
    },
    'Commercial Display': {
      description: 'Versatile display solutions for various applications',
      series: [
        { name: 'CMA Series', image: '/images/products/cma.jpg' },
        { name: 'CMA-T Series', image: '/images/products/cma-t.jpg' },
        { name: 'CMD Series', image: '/images/products/cmd.jpg' },
        { name: 'UW Series', image: '/images/products/uw.jpg' },
      ],
    },
    'LED Display': {
      description: 'High-brightness LED solutions for any environment',
      series: [
        {
          name: 'Indoor LED Series',
          models: [
            { name: 'P1.5 Fine Pixel', specs: '1.5mm Pixel Pitch, 800 nits', image: '/images/products/led-p1.5.jpg' },
            { name: 'P2.5 Standard', specs: '2.5mm Pixel Pitch, 1000 nits', image: '/images/products/led-p2.5.jpg' },
            { name: 'P3.9 Economy', specs: '3.9mm Pixel Pitch, 1200 nits', image: '/images/products/led-p3.9.jpg' }
          ]
        },
        {
          name: 'Outdoor LED Series',
          models: [
            { name: 'P4 Outdoor', specs: '4mm Pixel Pitch, 5500 nits', image: '/images/products/led-p4.jpg' },
            { name: 'P6 Billboard', specs: '6mm Pixel Pitch, 6000 nits', image: '/images/products/led-p6.jpg' },
            { name: 'P10 Large Format', specs: '10mm Pixel Pitch, 7000 nits', image: '/images/products/led-p10.jpg' }
          ]
        },
        {
          name: 'Creative LED',
          models: [
            { name: 'Transparent LED', specs: '85% Transparency, P3.9', image: '/images/products/led-transparent.jpg' },
            { name: 'Flexible LED', specs: 'Bendable up to 30°, P4', image: '/images/products/led-flexible.jpg' },
            { name: 'Floor LED', specs: 'Interactive Floor Display, P3.9', image: '/images/products/led-floor.jpg' }
          ]
        }
      ]
    },
    'Unified Communication': {
      description: 'Complete communication solutions for modern workspaces',
      products: [
        { name: 'Video Conferencing', icon: '🎥' },
        { name: 'Audio Systems', icon: '🎤' },
        { name: 'Collaboration Tools', icon: '🤝' },
      ],
    },
    'Capture System': {
      description: 'Professional recording and streaming solutions',
      products: [
        {
          name: 'Lecture Capture Pro',
          specs: '4K Recording, Multi-Source Input',
          features: [
            'Simultaneous 3-Source Recording',
            'Live Streaming Capability',
            'Scheduled Recording',
            'Auto-Tracking Camera Support'
          ],
          image: '/images/products/lecture-capture.jpg'
        },
        {
          name: 'Studio Master',
          specs: '4K@60fps, NDI Support',
          features: [
            'Professional Broadcasting',
            'Virtual Studio Support',
            'Multi-Camera Switching',
            'Real-time Effects'
          ],
          image: '/images/products/studio-master.jpg'
        },
        {
          name: 'Mobile Recorder',
          specs: '1080p Portable Solution',
          features: [
            'Wireless Recording',
            'Built-in Storage',
            'Battery Powered',
            'WiFi Streaming'
          ],
          image: '/images/products/mobile-recorder.jpg'
        }
      ]
    },
    'Accessories': {
      description: 'Essential add-ons for your display solutions',
      categories: [
        {
          name: 'Mounting Solutions',
          products: [
            { 
              name: 'Mobile Stand Pro',
              specs: 'Height Adjustable, 100kg Capacity',
              compatibility: '55"-98" Displays',
              image: '/images/products/mobile-stand.jpg'
            },
            { 
              name: 'Wall Mount Ultra',
              specs: 'Low Profile, 80kg Capacity',
              compatibility: '43"-86" Displays',
              image: '/images/products/wall-mount.jpg'
            },
            { 
              name: 'Ceiling Mount System',
              specs: 'Adjustable Drop, 60kg Capacity',
              compatibility: '43"-75" Displays',
              image: '/images/products/ceiling-mount.jpg'
            }
          ]
        },
        {
          name: 'Interactive Tools',
          products: [
            { 
              name: 'Stylus Pro Kit',
              specs: '4096 Pressure Levels, Palm Rejection',
              compatibility: 'All Touch Displays',
              image: '/images/products/stylus.jpg'
            },
            { 
              name: 'Wireless Presenter',
              specs: '30m Range, Laser Pointer',
              compatibility: 'Universal USB',
              image: '/images/products/presenter.jpg'
            },
            { 
              name: 'Control Panel',
              specs: 'Touch-sensitive, Programmable',
              compatibility: 'IFP Series',
              image: '/images/products/control-panel.jpg'
            }
          ]
        },
        {
          name: 'Connectivity',
          products: [
            { 
              name: 'Wireless Module Pro',
              specs: 'Dual Band WiFi 6, Bluetooth 5.0',
              compatibility: 'All IFP Models',
              image: '/images/products/wireless-module.jpg'
            },
            { 
              name: 'Cable Management Kit',
              specs: 'Professional Grade, Tool-free',
              compatibility: 'Universal',
              image: '/images/products/cable-kit.jpg'
            },
            { 
              name: 'Signal Extender',
              specs: '4K@60Hz up to 100m',
              compatibility: 'All Digital Displays',
              image: '/images/products/signal-extender.jpg'
            }
          ]
        }
      ]
    },
  };

  const handleModelClick = (modelName) => {
    window.open(`/products/${activeCategory.toLowerCase().replace(/\s+/g, '-')}/${modelName.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
  };

  const getCategoryData = (category) => productCategories[category];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Desktop Menu - Left Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home Link */}
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>

            {/* Products Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setIsProductsOpen(true);
                if (!activeCategory) {
                  setActiveCategory(Object.keys(productCategories)[0]);
                }
              }}
              onMouseLeave={() => {
                setIsProductsOpen(false);
                setActiveCategory('');
                setSelectedModel('');
              }}
            >
              <button className="text-gray-700 group-hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                Products
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Panel */}
              <div
                className={`absolute left-0 mt-2 w-screen max-w-[1200px] bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
                  isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => {
                  setIsProductsOpen(false);
                  setActiveCategory('');
                  setSelectedModel('');
                }}
              >
                <div className="flex">
                  {/* Categories Sidebar */}
                  <div 
                    className="w-64 bg-gray-50 p-6"
                    onMouseLeave={() => setSelectedModel('')}
                  >
                    {Object.keys(productCategories).map((category) => (
                      <div
                        key={category}
                        className={`cursor-pointer p-3 rounded-lg transition-colors ${
                          activeCategory === category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                        }`}
                        onMouseEnter={() => {
                          setActiveCategory(category);
                          setSelectedModel('');
                        }}
                      >
                        <span className="font-medium">{category}</span>
                      </div>
                    ))}
                  </div>

                  {/* Models List */}
                  <div className="w-80 border-r border-gray-200">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {activeCategory ? `${activeCategory} Models` : 'Available Models'}
                      </h3>
                      <div 
                        className="space-y-2"
                        onMouseLeave={() => setSelectedModel('')}
                      >
                        {activeCategory && 
                          (productCategories[activeCategory].models || 
                           productCategories[activeCategory].series || 
                           productCategories[activeCategory].products || 
                           []).map((item) => (
                          <div
                            key={item.name}
                            className={`p-3 rounded-lg cursor-pointer transition-colors ${
                              selectedModel === item.name ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                            }`}
                            onMouseEnter={() => setSelectedModel(item.name)}
                            onClick={() => handleModelClick(item.name)}
                          >
                            <div className="font-medium">{item.name}</div>
                            {item.badge && (
                              <span className="text-sm text-blue-600">{item.badge}</span>
                            )}
                            {item.specs && <div className="text-sm text-gray-500">{item.specs}</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Model Preview */}
                  <div className="flex-1 p-6">
                    {selectedModel && activeCategory && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">{selectedModel}</h3>
                        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={
                              (() => {
                                const category = productCategories[activeCategory];
                                const item = 
                                  (category.models?.find(m => m.name === selectedModel) ||
                                  category.series?.find(s => s.name === selectedModel) ||
                                  category.products?.find(p => p.name === selectedModel) ||
                                  category.categories?.find(c => c.name === selectedModel))?.image ||
                                  '/images/placeholder.jpg';
                                return item;
                              })()
                            }
                            alt={selectedModel}
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                        <div className="mt-4">
                          <p className="text-gray-600">
                            {(() => {
                              const category = productCategories[activeCategory];
                              const item = 
                                (category.models?.find(m => m.name === selectedModel) ||
                                category.series?.find(s => s.name === selectedModel) ||
                                category.products?.find(p => p.name === selectedModel) ||
                                category.categories?.find(c => c.name === selectedModel));
                              return item?.specs || category.description;
                            })()}
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleModelClick(selectedModel)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    )}
                    {!selectedModel && (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        Hover over a model to see preview
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of navigation items */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo with Text - Right Side */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="InfinityX Logo" 
                className="h-10 w-auto"
              />
              <span className="flex items-center text-xl font-bold">
                <span className="text-orange-500">INFINITY</span>
                <span className="text-black">X</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Products Menu */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-base font-medium text-gray-900">Products</div>
              {Object.keys(productCategories).map((category) => (
                <Link
                  key={category}
                  to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 ml-4"
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 