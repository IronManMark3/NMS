import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Welcome to Neerja Modi School",
    backgroundImage: "/images/img_.png"
  },
  {
    id: 2,
    title: "Excellence in Education",
    backgroundImage: "/images/slide2.png"
  },
  {
    id: 3,
    title: "Shaping Future Leaders",
    backgroundImage: "/images/slide_3.JPG"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.backgroundImage;
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 154px)' }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${index === 2 ? 'slide-3' : ''}`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text */}
          {index === currentSlide && (
            <div className="relative z-20 flex flex-col justify-end items-start sm:items-start text-left sm:text-left max-[640px]:items-center max-[640px]:text-center h-full px-[16px] sm:px-[30px] md:px-[50px] lg:px-[57px] text-white pb-[50px] max-[360px]:pb-[30px]">
              <p className="text-[16px] sm:text-[20px] md:text-[22px] leading-[22px] sm:leading-[30px] md:leading-[32px] uppercase mb-2 max-[360px]:text-[14px] max-[360px]:leading-[20px]">
                Welcome to
              </p>
              <h1 className="text-[24px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[30px] sm:leading-[42px] md:leading-[50px] lg:leading-[56px] uppercase mb-0 max-w-[90%] break-words max-[360px]:text-[18px] max-[360px]:leading-[24px]">
                {slide.title}
              </h1>
            </div>
          )}
        </div>
      ))}

      {/* Slide Dots */}
      <div className="absolute right-[20px] sm:right-[30px] md:right-[40px] lg:right-[61px] top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[12px] h-[12px] max-[360px]:w-[8px] max-[360px]:h-[8px] rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
