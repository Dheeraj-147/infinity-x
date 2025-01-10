import React, { useState, useEffect } from 'react';
import { images } from '../utils/images';

const Cart = () => {
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    const savedProduct = localStorage.getItem('cartProduct');
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
      localStorage.removeItem('cartProduct');
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    message: ''
  });

  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
    { code: '+61', country: 'Australia' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePhone(formData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      //const brochureUrl = `/brochures/${product.model.toLowerCase()}.pdf`;
      const brochureUrl = `/brochures/interactive-boards.pdf`
      const link = document.createElement('a');
      link.href = brochureUrl;
      //link.download = `${product.model}-brochure.pdf`;
      link.download = 'interactive-boards.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Product Summary</h2>
          <div className="space-y-4">
            <img 
              src={images.products.getProductImage(product.image)}
              alt={product.name}
              className="w-full rounded-lg"
            />
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.specs}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Model:</span>
                  <span className="ml-2 font-medium">{product.model}</span>
                </div>
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-2 font-medium">{product.size}</span>
                </div>
                <div>
                  <span className="text-gray-600">Price:</span>
                  <span className="ml-2 font-medium text-blue-600">{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Request Information</h2>
          {submitSuccess ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600">Your brochure has been downloaded. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <div className="flex space-x-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    {countryCodes.map(({ code, country }) => (
                      <option key={code} value={code}>
                        {code} ({country})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    pattern="\d{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Example: {formData.countryCode} 9876543210
                </p>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="company">
                  Company/Institution
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <p className="mt-1 text-sm text-gray-500">
                  {500 - formData.message.length} characters remaining
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
                  isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors`}
              >
                {isSubmitting ? 'Processing...' : 'Download Brochure'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Required fields
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart; 