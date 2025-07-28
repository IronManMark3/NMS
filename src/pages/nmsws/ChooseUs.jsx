import React from 'react';

const features = [
  {
    icon: '/images/choose_icon1.png',
    text: 'Complete IB Continuum (PYP, MYP, IBDP) & IGCSE available',
  },
  {
    icon: '/images/choose_icon2.png',
    text: 'Focus on future-ready skills:\ncollaboration, AI literacy, creativity',
  },
  {
    icon: '/images/choose_icon3.png',
    text: 'International college placement\nand alumni network',
  },
  {
    icon: '/images/choose_icon4.png',
    text: 'Low student-teacher ratio and\npersonalised mentorship',
  },
  {
    icon: '/images/choose_icon5.png',
    text: 'Global exposure through academic\nand cultural exchange programs',
  },
];

const ChooseUs = () => {
  return (
    <section className="relative bg-white pt-[60px] pb-0 px-0 font-[poppins] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-[1440px] mx-auto gap-10">

        {/* Left: Image */}
        <div
          className="relative w-full lg:w-[60%] h-[400px] sm:h-[500px] lg:h-screen overflow-hidden"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <img
            src="/images/choose_building.png"
            alt="World School Campus"
            className="w-full h-full object-contain align-bottom"
          />
        </div>

        {/* Right: Icons list */}
        <div
  className="w-full lg:w-[40%] px-4 sm:px-6 lg:pl-[40px] lg:pr-[10px]"
  data-aos="fade-up"
>
  {/* Desktop: original flex column layout */}
  <div className="hidden lg:flex flex-col gap-10">
    {features.map(({ icon, text }, index) => (
      <div
        key={index}
        className="flex flex-col items-start gap-4"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <img src={icon} alt="Feature Icon" className="w-[32px] h-[32px]" />
        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] whitespace-pre-line text-black">
          {text}
        </p>
      </div>
    ))}
  </div>

  {/* Mobile: 2-2-1 Grid Layout */}
  <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:hidden">
    {features.map(({ icon, text }, index) => (
      <div
        key={index}
        className={`flex flex-col items-start gap-4 ${
          index === 4 ? 'col-span-2 justify-self-center' : ''
        }`}
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <img src={icon} alt="Feature Icon" className="w-[32px] h-[32px]" />
        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] whitespace-pre-line text-black">
          {text}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default ChooseUs;
