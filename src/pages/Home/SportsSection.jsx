import React, { useState } from 'react';

const SportsSection = () => {
  const sportsImages = [
    { src: "/images/img_frame_10.png", alt: "Sports Activity 1" },
    { src: "/images/img_frame_9.png", alt: "Sports Activity 2" },
    { src: "/images/img_23082331.png", alt: "Sports Activity 3" },
    { src: "/images/img_frame_7.png", alt: "Sports Activity 4" },
    { src: "/images/img_frame_6.png", alt: "Sports Activity 5" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % sportsImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + sportsImages.length) % sportsImages.length);
  };

  const getPosition = (index) => {
    if (index === currentIndex) return 'z-20 scale-100 opacity-100';
    if (index === (currentIndex - 1 + sportsImages.length) % sportsImages.length) return 'left-[5%] scale-90 opacity-50 z-10';
    if (index === (currentIndex + 1) % sportsImages.length) return 'right-[5%] scale-90 opacity-50 z-10';
    return 'opacity-0 scale-75 z-0 pointer-events-none';
  };

  return (
    <section className="bg-white py-[40px] px-4 sm:px-6 lg:px-[70px]">
      <div className="max-w-[1300px] mx-auto text-center mb-[50px]">
        {/* Heading */}
        <h2 className="text-[20px] sm:text-[26px] md:text-[30px] leading-[26px] sm:leading-[32px] mb-[16px] capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent max-[360px]:text-[16px] max-[360px]:leading-[20px]">
          <span>SPORTS & EXTRACURRICULAR</span><br />
          <span className="text-[30px] sm:text-[48px] md:text-[61px] leading-[36px] sm:leading-[50px] md:leading-[55px] max-[360px]:text-[20px] max-[360px]:leading-[26px]">
            EXCELLENCE
          </span>
        </h2>

        {/* Carousel */}
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden max-[360px]:h-[200px]">
          {sportsImages.map((image, index) => {
            const positionClass = getPosition(index);
            const isCenter = index === currentIndex;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-in-out transform rounded-lg ${positionClass}`}
                style={{
                  width: isCenter ? '90%' : '70%',
                  maxWidth: isCenter ? '600px' : '450px',
                  height: isCenter ? '100%' : '90%',
                  maxHeight: '400px'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            );
          })}

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="fixed lg:absolute left-0 lg:left-[10px] top-1/2 -translate-y-1/2 text-black text-3xl lg:text-6xl z-40 px-2 max-[360px]:text-2xl"
            aria-label="Previous"
          >
            &#8249;
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="fixed lg:absolute right-0 lg:right-[10px] top-1/2 -translate-y-1/2 text-black text-3xl lg:text-6xl z-40 px-2 max-[360px]:text-2xl"
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
