import React from 'react';

const BoardingHero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-60px)] sm:h-[100vh] overflow-hidden">
      {/* Mobile Image */}
      <img
        src="/images/boarding_hero_mobile.JPG"
        alt="Boarding Hero Mobile"
        className="block sm:hidden w-full h-full object-cover"
      />

      {/* Desktop Image */}
      <img
        src="/images/boarding_hero.png"
        alt="Boarding Hero Desktop"
        className="hidden sm:block w-full h-full object-cover"
      />

      {/* Mobile Text Only */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center px-4 w-[90%] sm:hidden">
        <h1 className="text-[30px]">
          A HOME <br /> AWAY FROM HOME
        </h1>
      </div>
    </section>
  );
};

export default BoardingHero;
