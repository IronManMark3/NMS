import React from 'react';

const BoarderGrowthSection = () => {
  const topCards = [
    {
      title: "Strong Academic Performance",
      image: "/images/boarder_academic.jpg",
    },
    {
      title: "Holistic Personality Development",
      image: "/images/boarder_personality.jpg",
    },
  ];

  const pillars = [
    {
      icon: "/images/mentorship_icon.jpg",
      title: "University Application Mentorship",
    },
    {
      icon: "/images/global_icon.jpg",
      title: "Global Exposure & Soft Skills",
    },
    {
      icon: "/images/emotions_icon.jpg",
      title: "Emotional Intelligence & Confidence Building",
    },
  ];

  return (
    <section className="bg-white py-[60px] px-4 sm:px-6 lg:px-[81px]">
      {/* Section Heading */}
      <div className="text-center mb-[40px]">
        <h2 className="text-[22px] sm:text-[28px] md:text-[28px] leading-[28px] sm:leading-[36px] md:leading-[42px] uppercase mb-2">
          Our Boarders Don’t Just Dream Big
        </h2>
        <h3 className="text-[28px] sm:text-[38px] md:text-[48px] leading-[32px] sm:leading-[46px] md:leading-[54px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent font-bold uppercase">
          They Achieve BIG.
        </h3>
      </div>

      {/* Top Cards with Image and Bottom Text */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-[40px] mb-[50px]">
        {topCards.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/2 h-[300px] sm:h-[360px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-center p-4">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pillar Cards with Full Image and Text at Bottom */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-[40px] mb-[50px]">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/3 h-[260px] sm:h-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={pillar.icon}
              alt={pillar.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-center px-2 py-3">
              <p className="text-[15px] sm:text-[16px] leading-[22px] font-medium">
                {pillar.title}
              </p>
            </div>
          </div>
        ))}
      </div>

                {/* Highlight Quote with Full-Width Lines */}
      <div className="relative w-full max-w-[1277px] mx-auto mt-[60px] px-4">
        {/* Left Line */}
        <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-[20%] sm:w-[25%] h-[1px] bg-gradient-to-r from-transparent to-[#0025ae]" />
        
        {/* Right Line */}
        <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[20%] sm:w-[25%] h-[1px] bg-gradient-to-l from-transparent to-[#0025ae]" />
        
        {/* Center Gradient Text */}
        <p className="font-[poppins] text-center text-[14px] sm:text-[16px] leading-[26px] font-medium bg-gradient-to-r from-[#c30015] via-[#5e2a84] to-[#0025ae] bg-clip-text text-transparent px-4 max-w-[900px] mx-auto z-10 relative">
          With strong academic guidance and life-skills development, NMS students have gone on to top universities around the world, including the USA, UK, Canada, Australia, and Singapore.
          <br />
          We nurture potential — and prepare students for life beyond school.
        </p>
      </div>

    </section>
  );
};

export default BoarderGrowthSection;
