// src/pages/Counseling/CounselingSection7.jsx
import React from 'react';

const CounselingSection7 = () => {
  const offerings = [
    { label: 'Internships', icon: '/images/internship.png' },
    { label: 'Research Projects', icon: '/images/research.png' },
    { label: 'Leadership roles in clubs & activities', icon: '/images/leadership.png' },
    { label: 'Social service initiatives', icon: '/images/social.png' },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[81px] py-[60px]">
      {/* Title + Subtitle */}
      <div className="text-center max-w-[900px] mx-auto mb-[40px]">
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] tracking-wide">
          Our <span className="text-transparent bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text">Approach</span>
        </h2>
        <p className="font-[poppins] mt-4 text-[15px] sm:text-[17px] text-[#333] leading-relaxed">
          Every student is unique — so is their path. We take time to understand each learner’s dreams, talents,
          and goals to help them make informed choices, with clarity and confidence.
        </p>
      </div>

      {/* Background Section with Overlay */}
      <div className="relative rounded-[20px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/painting_bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full py-[150px] px-6 sm:px-10 flex flex-col lg:flex-row justify-between items-center gap-[40px]">
          {/* Left Text */}
          <div className="text-white max-w-[500px] text-left">
            <h3 className="text-[28px] sm:text-[32px] md:text-[36px] mb-4">Beyond Academics</h3>
            <p className="font-[poppins] text-[15px] sm:text-[17px] leading-relaxed">
              We encourage students to build strong portfolios. <br />
              These experiences make our students stand out in college applications.
            </p>
          </div>

          {/* Right Icon Grid */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-[500px] ">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff33] backdrop-blur-md text-white rounded-[12px] p-6 flex flex-col items-center justify-center text-center min-h-[120px] transition-transform duration-300 transform hover:scale-110"
              >
                <div className="mb-3">
                  <img src={item.icon} alt={item.label} className="h-8 w-8" />
                </div>
                <p className="font-[poppins] text-[15px] sm:text-[16px]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselingSection7;
