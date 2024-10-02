import React from 'react';

const ContinuousScrollingSlideshow: React.FC = () => {

  const images = [
    '/images/image1.svg',
    '/images/image2.svg',
    '/images/image3.png',
    '/images/image4.svg',
  ];

  // Duplicate images array to create a seamless loop
  const doubledImages = [...images, ...images]; 

  return (
    <div className="relative w-full h-60 flex justify-center items-center overflow-hidden">
      <div className="flex animate-marquee space-x-2 whitespace-no-wrap">
        {doubledImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full max-w-xs">
            <img src={src} alt={`Slide ${index}`} className="w-60 h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousScrollingSlideshow;
