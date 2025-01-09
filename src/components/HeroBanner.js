'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroBanner = () => {
  const slides = [
    {
      title: "Interactive Flat Panels",
      description: "Transform your presentations with our cutting-edge Interactive Displays",
      image: "/images/ifp-banner.jpg",
    },
    {
      title: "LED Display Walls",
      description: "Create stunning visual experiences with our LED Wall solutions",
      image: "/images/led-wall-banner.jpg",
    },
    {
      title: "Mirror TVs",
      description: "Blend technology with elegance using our Mirror TV solutions",
      image: "/images/mirror-tv-banner.jpg",
    },
  ];

  return (
    <div className="relative h-[600px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center">
                <div className="max-w-2xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner; 