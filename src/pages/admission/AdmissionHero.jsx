// src/pages/Admission/AdmissionHero.jsx
import React from 'react';

const AdmissionHero = () => {
    return (
        <section
          className="relative w-full overflow-hidden"
          style={{ height: 'calc(80vh - 154px)' }}
          data-aos="fade-in"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/counseling_hero.png')`, // Replace with actual path
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
    
          {/* Bottom Left Text */}
          <div className="relative z-20 h-full flex items-end px-[16px] sm:px-[30px] md:px-[50px] lg:px-[81px] pb-[30px]">
            <h1 className="text-white text-[38px] sm:text-[28px] md:text-[48px] leading-tight uppercase">
              Admission
            </h1>
          </div>
        </section>
      );
    };
    
export default AdmissionHero;
