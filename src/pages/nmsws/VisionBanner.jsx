import React from 'react';

const VisionBanner = () => {
  return (
    <section
    className="relative w-full overflow-hidden min-h-[calc(100vh-154px)] pt-[100px] sm:min-h-[calc(100vh-154px-)] min-[0px]:min-h-[calc(100vh-184px)]"
  >
  
      {/* Background Image */}
      <img
  src="/images/visionbanner.png"
  alt="Vision Banner"
  className="absolute inset-0 w-full h-[100%] object-cover object-top translate-y-0 sm:translate-y-0 max-[640px]:-translate-y-[40px] max-[640px]:h-[calc(100%+100px)]"
/>



      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay z-10"></div>

      {/* Centered Flex Container */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-10 md:px-[72px] font-[Book Antiqua]">
        <div className="flex w-full max-w-[1440px] justify-between items-center flex-col md:flex-row gap-8 text-white text-center md:text-left">
          {/* Heading */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[22px] sm:text-[30px] md:text-[36px] leading-[30px] sm:leading-[38px] md:leading-[44px]">
              From Foundation<br />To Graduation.
            </h2>
          </div>

          {/* Paragraph */}
          <div className="font-[poppins] w-full md:w-1/2 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] md:leading-[30px]">
            <p>
              Whether your child begins in Nursery or joins later, NMS Mansarovar is
              equipped to offer a seamless academic journey all the way to Grade 12.<br />
              The focus is on nurturing each child’s individual strengths while developing
              strong academic and personal values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionBanner;
