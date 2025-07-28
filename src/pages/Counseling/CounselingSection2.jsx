import React from 'react';

const CounselingSection2 = () => {
  return (
    <section
      className="bg-white py-[40px] px-4 sm:px-6 lg:px-[81px]"
      data-aos="fade-up"
    >
      <div className="max-w-[1277px] mx-auto flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[40px]">
        {/* Text on the left */}
        <div className="w-full sm:w-1/2" data-aos="fade-right">
          <h3 className="text-[22px] sm:text-[28px] md:text-[34px] leading-[30px] sm:leading-[38px] font-semibold mb-[16px] text-black">
          Guiding Every Student to the Right Future.
          </h3>
          <p className="text-[13px] sm:text-[16px] font-poppins text-black leading-[22px] sm:leading-[26px]">
          At NMS, college counseling is not just a service — it’s a journey we walk together. Our in-house team of 
          expert counselors works closely with every student, from Grade 9 onward, helping them discover their 
          strengths, explore career paths, and apply confidently to top universities across the world.
          </p>
        </div>

        {/* Image on the right */}
        <div className="w-full sm:w-1/2" data-aos="fade-left">
          <div className="w-full h-[300px] sm:h-[400px] rounded-[12px] overflow-hidden bg-gray-200">
            <img
              src="/images/counseling_section2.jpg" // ⬅ Replace this with your actual image path
              alt="Personalized Roadmaps"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselingSection2;
