import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Text overlay only for mobile */}
      <div className="absolute inset-0 flex items-center justify-center z-10 sm:hidden">
        <h1
          className="text-white text-[32px] font-bold uppercase text-center"
          style={{ fontFamily: 'Book Antiqua, serif' }}
        >
          World School Campus
        </h1>
      </div>

      <picture>
        <source
          media="(max-width: 640px)"
          srcSet="/images/nmsws_hero_mobile.png"
        />
        <img
          src="/images/nmsws_hero_static.png"
          alt="World School Campus"
          className="w-full h-screen sm:h-[100vh] object-cover"
        />
      </picture>
    </section>
  );
};

export default HeroSection;
