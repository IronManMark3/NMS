import React from 'react';

const AcademicSupport = () => {
  const points = [
    { icon: "/images/study_hours.png", text: "Structured Evening Study Hours" },
    { icon: "/images/homework_help.png", text: "Daily Homework Support" },
    { icon: "/images/olympiad.png", text: "Olympiads & Enrichment Clubs" },
    { icon: "/images/exam_prep.png", text: "Competitive Exam Mentorship" },
  ];

  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-234px)]">
      {/* Background Image */}
      <img
  src="/images/visionbanner.png"
  alt="Vision Banner"
  className="absolute inset-0 w-full h-[100%] object-cover object-top translate-y-0 sm:translate-y-0 max-[640px]:-translate-y-[40px] max-[640px]:h-[calc(100%+100px)]"
/>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-[81px]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[40px]">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left text-white">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] leading-[34px] sm:leading-[42px] md:leading-[48px] font-semibold mb-4">
              Academic Excellence, Every Day.
            </h2>
            <p className="font-[poppins] text-[14px] sm:text-[16px] leading-[24px] max-w-[500px]">
              Whether it’s a helping hand with homework or preparation for global competitions, our academic support ensures boarders never stop growing.
            </p>
          </div>

          {/* Right: Bullet Points */}
          <div className="flex-1 w-full">
          <div className="grid grid-cols-1 gap-5">
  {points.map((item, index) => (
    <div key={index} className="flex items-center gap-4 text-white">
      <img src={item.icon} alt={item.text} className="w-[24px] h-[24px] object-contain" />
      <p className="font-[poppins] text-[14px] sm:text-[24px] font-medium leading-[22px]">
        {item.text}
      </p>
    </div>
  ))}
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSupport;
