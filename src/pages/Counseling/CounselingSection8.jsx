// src/pages/Counseling/CounselingSection8.jsx
import React from 'react';
import Button from '../../components/ui/Button';

const CounselingSection8 = () => {
    return (
        <section
          className="bg-white py-[40px] px-4 sm:px-6 lg:px-[81px]"
          data-aos="fade-up"
        >
          <div className="max-w-[1277px] mx-auto flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[40px]">
            {/* Text */}
            <div className="w-full sm:w-1/2" data-aos="fade-right">
            <h3 className="text-[22px] sm:text-[28px] md:text-[34px] leading-[30px] sm:leading-[38px] font-semibold mb-[16px] text-black">
  <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">Parent</span> Involvement
</h3>

              <p className="text-[13px] sm:text-[16px] font-poppins text-black leading-[22px] sm:leading-[26px]">
              We conduct regular parent orientation sessions to align on options, timelines, and choices — because this is a team journey.
              </p>
            </div>
    
            {/* Image */}
            <div className="w-full sm:w-1/2" data-aos="fade-left">
              <img 
              src="/images/parent_section8.png" // ⬅ Replace this with your actual image path
              alt="Parent Involvement"
              className="w-full h-[300px] sm:h-[400px] bg-gray-200 rounded-[12px]" />
            </div>
          </div>
        </section>
      );
};

export default CounselingSection8;
