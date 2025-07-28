import React from 'react';

const BoardingSafetySection = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[520px] lg:h-[600px]">
      {/* Background image - Mobile */}
      <img
        src="/images/safety_bg_mobile.png"
        alt="Safety Mobile"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />
      {/* Background image - Desktop */}
      <img
        src="/images/safety_bg.png"
        alt="Safety"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between px-4 sm:px-[81px] text-white z-10 sm:flex-row sm:items-start sm:justify-between sm:top-1/2 sm:-translate-y-1/2">
        {/* Header (Top in mobile, left in desktop) */}
        <div className="text-center sm:text-left pt-6 sm:pt-0 sm:w-1/3">
          <p className="text-[22px] sm:text-[28px] md:text-[34px] leading-[1.2] font-semibold">
            Safe.<br />
            Secure.<br />
            Supportive.
          </p>
        </div>

        {/* Bullet Points (Bottom in mobile, right in desktop) */}
        <ul className="font-[poppins] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] sm:w-2/3 list-disc pl-5 text-left pb-6 sm:pb-0">
          <li>24x7 CCTV & access control.</li>
          <li>RFID attendance for parents’ peace of mind.</li>
          <li>Friendly wardens & female matrons.</li>
          <li>Emergency care with hospital tie-ups.</li>
        </ul>
      </div>
    </section>
  );
};

export default BoardingSafetySection;
