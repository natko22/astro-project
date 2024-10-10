import React from "react";
import Marquee from "react-fast-marquee"; // Importing react-fast-marquee

const ContinuousScrollingSlideshow: React.FC = () => {
  const images = [
    "/images/slide/image1.svg",
    "/images/slide/image2.svg",
    "/images/slide/image3.png",
    "/images/slide/image4.svg",
  ];

  return (
    <div className="relative w-full h-60 flex justify-center items-center overflow-hidden ">
      <Marquee
        speed={60}
        gradient={false}
        direction="left"
        pauseOnHover={true}
        loop={0}
        className="space-x-2"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full max-w-xs">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-60 h-20 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ContinuousScrollingSlideshow;
