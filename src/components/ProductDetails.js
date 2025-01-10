import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { productCategories } from '../data/productData';
import { images } from '../utils/images';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { category, model } = useParams();
  const location = useLocation();

  // Get category data
  const categoryData = React.useMemo(() => {
    const normalized = category.replace(/-/g, ' ');
    return productCategories[Object.keys(productCategories).find(
      cat => cat.toLowerCase() === normalized.toLowerCase()
    )];
  }, [category]);

  React.useEffect(() => {
    // If no specific model is selected, show the category overview
    if (!model) {
      // Show category overview
      return;
    }
    // Show specific model details
  }, [category, model]);

  // Enhanced product data
  const productData = {
    name: 'IFP75 Interactive Display',
    tagline: 'Next-Generation Teaching & Collaboration Solution',
    price: '₹199,999',
    rating: 4.8,
    reviews: 124,
    availability: 'In Stock',
    deliveryTime: '3-5 business days',
    specs: [
      { name: 'Display Size', value: '75"' },
      { name: 'Resolution', value: '4K UHD (3840 x 2160)' },
      { name: 'Touch Technology', value: 'IR Recognition' },
      { name: 'Touch Points', value: '20 Points' },
      { name: 'Display Colors', value: '1.07 Billion Colors' },
      { name: 'Brightness', value: '400 cd/m²' },
      { name: 'Response Time', value: '8ms' },
      { name: 'Operating System', value: 'Android 11.0' }
    ],
    features: [
      {
        title: 'Zero Bonding Display',
        description: 'Minimizes parallax error and provides a natural writing experience',
        icon: '✨'
      },
      {
        title: 'Wireless Casting',
        description: 'Support for multiple devices with built-in screen mirroring',
        icon: '📱'
      },
      {
        title: 'Smart Whiteboard',
        description: 'Advanced annotation tools with cloud saving capability',
        icon: '📝'
      }
    ],
    certifications: [
      {
        name: 'Google Certified',
        description: 'Verified for optimal Android performance',
        icon: '🔰'
      },
      {
        name: 'CE Certification',
        description: 'Meets European safety standards',
        icon: '🏅'
      },
      {
        name: 'FCC Certification',
        description: 'Compliant with US regulations',
        icon: '🎖️'
      },
      {
        name: 'RoHS Compliant',
        description: 'Environment-friendly manufacturing',
        icon: '🌱'
      }
    ],
    applications: [
      {
        sector: 'Education',
        uses: [
          'Interactive Classroom Teaching',
          'Remote Learning Sessions',
          'Student Collaboration Projects'
        ]
      },
      {
        sector: 'Corporate',
        uses: [
          'Board Room Presentations',
          'Video Conferencing',
          'Team Brainstorming'
        ]
      },
      {
        sector: 'Healthcare',
        uses: [
          'Medical Training',
          'Patient Education',
          'Team Consultations'
        ]
      }
    ],
    comparisons: [
      {
        model: 'IFP75',
        price: '₹199,999',
        features: ['4K UHD', '20 Touch Points', 'Android 11'],
        bestFor: 'Standard Classrooms'
      },
      {
        model: 'IFP86',
        price: '₹249,999',
        features: ['4K UHD', '20 Touch Points', 'Android 11'],
        bestFor: 'Large Classrooms'
      },
      {
        model: 'IFP98',
        price: '₹399,999',
        features: ['4K UHD', '20 Touch Points', 'Android 11'],
        bestFor: 'Auditoriums'
      }
    ],
    testimonials: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'Principal, DPS School',
        comment: 'Transformed our teaching methodology completely. Students are more engaged than ever.',
        rating: 5
      },
      {
        name: 'Priya Sharma',
        role: 'IT Head, Tech Solutions',
        comment: 'Perfect for our conference rooms. The touch accuracy is impressive.',
        rating: 4.5
      }
    ],
    support: {
      warranty: '3 Years Comprehensive',
      installation: 'Free Professional Installation',
      training: 'Complimentary Training Session',
      support: '24/7 Technical Support'
    },
    modelComparisons: {
      title: "Compare IFP Series Models",
      description: "Find the perfect interactive display for your needs",
      models: [
        {
          name: "IFP75",
          price: "₹199,999",
          displaySize: "75\"",
          resolution: "4K UHD",
          brightness: "400 cd/m²",
          touchPoints: 20,
          processor: "Quad Core",
          ram: "4GB",
          storage: "32GB",
          bestFor: "Standard Classrooms",
          highlighted: true
        },
        {
          name: "IFP86",
          price: "₹249,999",
          displaySize: "86\"",
          resolution: "4K UHD",
          brightness: "450 cd/m²",
          touchPoints: 20,
          processor: "Octa Core",
          ram: "8GB",
          storage: "64GB",
          bestFor: "Large Classrooms"
        },
        {
          name: "IFP98",
          price: "₹399,999",
          displaySize: "98\"",
          resolution: "4K UHD",
          brightness: "500 cd/m²",
          touchPoints: 20,
          processor: "Octa Core",
          ram: "8GB",
          storage: "128GB",
          bestFor: "Auditoriums"
        }
      ],
      comparisonPoints: [
        "Display Size",
        "Resolution",
        "Brightness",
        "Touch Points",
        "Processor",
        "RAM",
        "Storage",
        "Best For",
        "Price"
      ]
    }
  };

  const handleBuyNow = () => {
    // Store product data in localStorage
    localStorage.setItem('cartProduct', JSON.stringify({
      name: productData.name,
      model: model,
      specs: productData.specs[0].value,
      size: productData.specs[0].value,
      price: productData.price,
      image: `${model}.jpg`
    }));
    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {!model ? (
        // Category Overview
        <div>
          <h1 className="text-3xl font-bold mb-6">{categoryData?.description}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryData?.models?.map((item) => (
              <div 
                key={item.name}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => navigate(`/products/${category}/${item.name.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  {item.badge && <span className="text-blue-600 text-sm">{item.badge}</span>}
                  <p className="text-gray-600 mt-2">{item.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Product Details Content
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <img 
                src={images.products.getProductImage(`${model}.jpg`)}
                alt={model}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="mt-4 flex items-center justify-center space-x-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-600">{productData.rating} ({productData.reviews} reviews)</span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{productData.tagline}</p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-blue-600">{productData.price}</div>
                  <span className="text-green-600">{productData.availability}</span>
                </div>
                
                {/* Quick Info */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-gray-600">Delivery</div>
                      <div className="font-medium">{productData.deliveryTime}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Warranty</div>
                      <div className="font-medium">{productData.support.warranty}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-4">
                  <button 
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productData.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productData.applications.map((app, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">{app.sector}</h3>
                  <ul className="space-y-2">
                    {app.uses.map((use, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Rest of your existing sections... */}
          {/* Specifications, Certifications, Model Comparison */}

          {/* Testimonials */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div className="text-yellow-400">{'★'.repeat(Math.floor(testimonial.rating))}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Support & Warranty */}
          <section className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Support & Warranty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(productData.support).map(([key, value]) => (
                <div key={key} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-2 capitalize">{key}</h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Model Comparison Table */}
          <section className="mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{productData.modelComparisons.title}</h2>
              <p className="text-gray-600 mb-6">{productData.modelComparisons.description}</p>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left bg-gray-50">Features</th>
                      {productData.modelComparisons.models.map(model => (
                        <th 
                          key={model.name} 
                          className={`p-4 text-left ${model.highlighted ? 'bg-blue-50' : 'bg-gray-50'}`}
                        >
                          <div className="font-bold text-lg">{model.name}</div>
                          <div className="text-blue-600 font-medium">{model.price}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Display Size */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">Display Size</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.displaySize}
                        </td>
                      ))}
                    </tr>
                    
                    {/* Resolution */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">Resolution</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.resolution}
                        </td>
                      ))}
                    </tr>
                    
                    {/* Brightness */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">Brightness</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.brightness}
                        </td>
                      ))}
                    </tr>
                    
                    {/* Touch Points */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">Touch Points</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.touchPoints} Points
                        </td>
                      ))}
                    </tr>
                    
                    {/* Processor */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">Processor</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.processor}
                        </td>
                      ))}
                    </tr>
                    
                    {/* RAM */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">RAM</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.ram}
                        </td>
                      ))}
                    </tr>
                    
                    {/* Storage */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">Storage</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.storage}
                        </td>
                      ))}
                    </tr>
                    
                    {/* Best For */}
                    <tr className="border-t">
                      <td className="p-4 font-medium">Best For</td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          {model.bestFor}
                        </td>
                      ))}
                    </tr>
                    
                    {/* Actions */}
                    <tr className="border-t">
                      <td className="p-4"></td>
                      {productData.modelComparisons.models.map(model => (
                        <td 
                          key={model.name}
                          className={`p-4 ${model.highlighted ? 'bg-blue-50' : ''}`}
                        >
                          <button 
                            className={`w-full py-2 px-4 rounded-lg ${
                              model.highlighted 
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                            } transition-colors`}
                          >
                            {model.highlighted ? 'Current Model' : 'View Details'}
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductDetails; 