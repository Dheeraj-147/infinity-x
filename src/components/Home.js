import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../utils/images';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Video Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/videos/home-page-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
          <span className="text-xl mb-4">Explore the Colourful World</span>
          <h1 className="text-6xl font-bold mb-8">
            <span>INFINITY</span>
            <span className="text-orange-500">X</span>
          </h1>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">"To Teach Smart, Think Smart"</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Solution */}
            <div className="flex flex-col items-center">
              <img 
                src="/images/education-classroom.jpg"
                alt="Education Solution" 
                className="w-full h-[300px] object-cover rounded-lg mb-8"
              />
              <h3 className="text-2xl font-bold mb-4 text-center">EDUCATION</h3>
              <p className="text-gray-600 text-center mb-6">
                "It captures the essence of how technology, especially large interactive screens like smart boards, 
                can enhance children's learning experiences and expand their imagination"
              </p>
              <Link 
                to="/solutions/education" 
                className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* Corporate Solution */}
            <div className="flex flex-col items-center">
              <img 
                src="/images/corporate-meeting.jpg"
                alt="Corporate Solution" 
                className="w-full h-[300px] object-cover rounded-lg mb-8"
              />
              <h3 className="text-2xl font-bold mb-4 text-center">CORPORATE</h3>
              <p className="text-gray-600 text-center mb-6">
                "Corporate meetings with interactive boards that enable seamless collaboration, 
                real-time brainstorming, and dynamic presentations"
              </p>
              <Link 
                to="/solutions/corporate"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="relative py-32 min-h-[400px]">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${images.products.backgrounds.explore})`,
            backgroundAttachment: 'fixed',
            zIndex: 0
          }}
        />
        
        {/* Content with Semi-transparent Overlay */}
        <div 
          className="relative z-10 uagb-container-inner-blocks-wrap"
          data-aos="slide-up"
          data-aos-duration="400"
          data-aos-delay="0"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="uagb-ifb-content">
              <div className="uagb-ifb-title-wrap">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Explore The World Of SMART
                </h2>
              </div>
              <div className="uagb-ifb-separator bg-orange-500 h-1 w-24 mx-auto mb-8"></div>
              <div className="uagb-ifb-button-wrapper">
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Learn More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512" 
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Purpose Solution Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Text Content */}
            <div className="md:col-span-1 space-y-6">
              <h4 className="text-2xl font-bold">
                "Multi-Purpose Solution for Learning,<br/>Collaboration, and Engagement"
              </h4>
              <div className="w-24 h-1 bg-orange-500"></div>
              <p className="text-gray-600">
                Interactive boards are transforming the way we learn and collaborate in schools and corporate offices. 
                For schools, they create dynamic and engaging classrooms, allowing teachers to present lessons 
                interactively with multimedia content, digital annotations, and real-time collaboration. In corporate 
                settings, interactive boards facilitate effective communication during meetings, brainstorming sessions, 
                and presentations, enhancing productivity and fostering a collaborative work environment. With advanced 
                features like screen mirroring, annotation tools, and seamless integration with digital devices, 
                interactive boards are essential tools for modern education and business.
              </p>
              <Link 
                to="/products" 
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
              >
                Learn More
              </Link>
            </div>

            {/* Right Columns - Images */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {/* First Column */}
              <div className="space-y-4">
                <img 
                  src="/images/classroom-interactive.png"
                  alt="Classroom Interactive" 
                  className="w-full h-56 object-cover rounded-lg"
                />
                <img 
                  src="/images/classroom-science.png"
                  alt="Science Class" 
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>

              {/* Second Column */}
              <div className="space-y-4">
                <img 
                  src="/images/corporate-meeting.png"
                  alt="Corporate Meeting" 
                  className="w-full h-72 object-cover rounded-lg"
                />
                <img 
                  src="/images/google-workspace.jpg"
                  alt="Google Workspace" 
                  className="w-full h-56 object-contain bg-white rounded-lg p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unveiling Banner Section */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <img 
            src="/images/unveiling-banner.png"
            alt="Unveiling the future of Smart Classrooms with Interactive Panels" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home; 