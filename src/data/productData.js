import { images } from '../utils/images';

export const productCategories = {
  'Interactive Boards': {
    description: 'Advanced interactive solutions for modern collaboration',
    models: [
      { 
        name: 'IFP75', 
        badge: 'Google Certified Panel', 
        image: images.products.getProductImage('ifp75.jpg'),
        specs: 'Ultra HD 4K Resolution, 75" Display'
      },
      { 
        name: 'IFP86', 
        badge: 'Google Certified Panel', 
        image: images.products.getProductImage('ifp86.jpg'),
        specs: 'Ultra HD 4K Resolution, 86" Display'
      },
      { 
        name: 'IFP98', 
        badge: 'Google Certified Panel', 
        image: images.products.getProductImage('ifp98.jpg'),
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
  }
}; 