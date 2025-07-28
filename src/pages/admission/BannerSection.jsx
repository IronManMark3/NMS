// src/pages/Admission/BannerSection.jsx
import React from 'react';

const BannerSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[calc(100vh-154px)] sm:h-[80vh] xs:h-[90vh] h-[85vh] overflow-hidden">
        <img
          src="/images/visionbanner.png"
          alt="Admission Banner"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#270041dd] to-[#730000cc] text-white flex flex-col justify-center px-4 sm:px-10 lg:px-[81px] py-[40px] sm:py-[60px] lg:py-[80px]"
          data-aos="fade-up"
        >
          <h2 className="text-[20px] xs:text-[22px] sm:text-[28px] lg:text-[40px] font-semibold mb-4 sm:mb-6 leading-tight max-w-[900px]">
            Thank you for your interest in <br className="hidden sm:block" />
            Neerja Modi School!
          </h2>

          <div className="font-[poppins] space-y-4 sm:space-y-5 max-w-[950px] text-[13px] xs:text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[28px]">
            <p>
              At Neerja Modi, students are dedicated to holistic development: academic excellence as well as personal, social and moral development.
            </p>
            <p>
              Admissions are open to all students who exhibit a strong desire to learn in a challenging and stimulating environment. We understand that some students learn best by reading; some, through actual experience; some, through pursuing passion.
            </p>
            <p>
              At NMS diversity is celebrated and many paths are explored; students are guided and encouraged to find paths that are most effective for them.
            </p>
            <p>
              Founded in 2001, Neerja Modi has a history of providing an academically rigorous and comprehensive curriculum that promotes academic excellence, integrity and social responsibility.
            </p>
            <p>
              The school follows a strict policy for admissions; however, chance vacancies occur from time to time. Parents are requested to enquire at our reception where information on vacancies are available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
