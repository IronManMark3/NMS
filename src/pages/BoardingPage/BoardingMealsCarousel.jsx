import React, { useState } from 'react';

const BoardingMealsCarousel = () => {
  const images = [
    "/images/meal1.jpg",
    "/images/meal2.jpg",
    "/images/meal3.jpg",
    "/images/meal4.jpg",
    "/images/meal5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="bg-white py-[60px] px-4 sm:px-6 lg:px-[81px]">
      {/* Heading */}
      <div className="text-center mb-[40px]">
        <h2 className="text-[22px] sm:text-[30px] md:text-[40px] leading-[28px] sm:leading-[38px] md:leading-[48px] font-semibold mb-3">
          Healthy Meals, Happy Students
        </h2>
        <p className="font-[poppins] text-[14px] sm:text-[16px] leading-[24px] max-w-[750px] mx-auto text-gray-700">
          Nutritious meals in a clean, hygienic environment to energize growing minds and bodies.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-[800px] h-[350px] sm:h-[410px] mx-auto overflow-hidden rounded-lg shadow-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Meal ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-40 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-20"
          aria-label="Previous"
        >
          ◀
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-40 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-20"
          aria-label="Next"
        >
          ▶
        </button>
      </div>

      {/* Caption */}
      <p className="font-[poppins] text-center text-[13px] sm:text-[14px] mt-[30px] text-gray-600">
        Clean, hygienic dining spaces designed to provide a home-style meal experience.
      </p>
    </section>
  );
};

export default BoardingMealsCarousel;
