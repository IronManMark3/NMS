import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white pt-[100px] pb-[60px] px-4 sm:px-6 lg:px-[72px] lg:ml-[72px]">
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Logo + Text */}
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
          <img
            src="/images/img_image_1.png"
            alt="Neerja Modi School Logo"
            className="w-[50px] h-[65px] sm:w-[66px] sm:h-[83px]"
          />
          <div className="font-[Book Antiqua] space-y-1 text-center sm:text-left">
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent leading-[26px]">
              World-Class Education.
            </h2>
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent leading-[26px]">
              Global Outlook.
            </h2>
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent leading-[26px]">
              Personalised Learning.
            </h2>
          </div>
        </div>

        {/* Right Side: Paragraph */}
        <div className="flex-1 text-center sm:text-left font-[poppins]">
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] text-black max-w-[650px] mx-auto">
            Located in the heart of Jaipur’s urban growth corridor, Neerja Modi World School Campus is an institution designed for learners who aspire to compete and collaborate on a global stage. With an emphasis on international curricula and modern educational methodologies, the campus cultivates thinkers, creators, and leaders of tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
