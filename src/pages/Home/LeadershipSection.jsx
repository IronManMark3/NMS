import React from 'react';

const LeadershipSection = () => {
  const desktopImage = "/images/desktop_image.png";

  return (
    <section className="bg-white">
      {/* Heading - shown on all screens */}
      <div className="text-center pt-[40px] px-4 sm:px-6 lg:px-0">
        <h2 className="text-[24px] sm:text-[32px] md:text-[38px] leading-[32px] sm:leading-[42px] md:leading-[46px] capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent max-[360px]:text-[18px] max-[360px]:leading-[24px]">
          Leadership & Distinguished Visitors
        </h2>
      </div>

      {/* Mobile layout (collage) */}
      <div className="block lg:hidden w-full max-w-[700px] mx-auto mt-[36px] px-4 sm:px-6">
        <div className="space-y-5 max-[360px]:space-y-4">
        {[
  "/images/img_rectangle_3.png",
  "/images/img_rectangle_4.png",
  "/images/img_rectangle_5.png",
  "/images/img_rectangle_6.png",
].map((src, idx) => (
  <div
    key={idx}
    className={`overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 ${
      idx >= 2 ? 'sm:grid sm:grid-cols-2 sm:gap-6' : ''
    }`}
  >
    <img
      src={src}
      alt={`Leadership Event ${idx + 1}`}
      className={`w-full h-auto object-cover rounded-lg 
        ${idx < 2 
          ? 'max-h-[300px] sm:max-h-[350px] max-[360px]:max-h-[200px]' 
          : 'max-h-[400px] sm:max-h-[450px] max-[360px]:max-h-[280px]'
        }`}
    />
  </div>
))}

        </div>
      </div>

      {/* Desktop layout - Single image below heading */}
      <div className="hidden lg:block w-full max-w-[1280px] mx-auto">
        <div className="mt-[28px] px-[15px]">
          <div
            className="w-100% "
            style={{ height: 'calc(100vh - 140px)' }} // Adjusted for heading and padding
          >
            <img
              src={desktopImage}
              alt="Leadership Desktop"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
