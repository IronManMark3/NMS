import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BeyondAcademics = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      {/* Desktop View */}
      <section className="hidden sm:block relative w-full min-h-[200vh] bg-white overflow-hidden px-4">
        {/* Top Left - Vertical Image */}
        <div
          data-aos="slide-right"
          className="absolute top-[8%] left-0 w-[35%] h-[90vh] z-10"
        >
          <div className="relative w-full h-full">
            <img
              src="/images/violin.png"
              alt="Performing Arts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top Right - Horizontal Image */}
        <div
          data-aos="slide-left"
          className="absolute top-[8%] right-0 w-[65%] h-[70vh] z-10"
        >
          <div className="relative w-full h-full">
            <img
              src="/images/basketball.jpg"
              alt="Sports"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Left - Horizontal Image */}
        <div
          data-aos="slide-right"
          className="absolute bottom-[8%] left-0 w-[70%] h-[70vh] z-10"
        >
          <div className="relative w-full h-full">
            <img
              src="/images/robotics.png"
              alt="Robotics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Right - Vertical Image */}
        <div
          data-aos="slide-left"
          className="absolute bottom-[8%] right-0 w-[30%] h-[90vh] z-10"
        >
          <div className="relative w-full h-full">
            <img
              src="/images/painting.png"
              alt="Arts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Heading */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center max-w-[700px] px-4">
          <h2 className="font-[poppins] text-[40px] md:text-[50px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent font-bold">
            Beyond
          </h2>
          <p className="font-[poppins] text-[16px] text-gray-800 mt-4">
            THE BOOKS
          </p>
        </div>
      </section>

      {/* Mobile View - Horizontal Scroll Carousel */}
      <section className="sm:hidden w-full bg-white pt-6 pb-4">
        <h2 className="text-center font-[poppins] text-[28px] text-black leading-tight bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent font-bold mb-2">
          Beyond
        </h2>
        <p className="text-center font-[poppins] text-[14px] text-gray-800 mb-4">
          THE BOOKS
        </p>

        <div className="flex overflow-x-scroll no-scrollbar gap-4 py-10 px-4">
          {[
            { src: "/images/violin.png", alt: "Performing Arts" },
            { src: "/images/robotics.png", alt: "Robotics" },
            { src: "/images/basketball.jpg", alt: "Sports" },
            { src: "/images/painting.png", alt: "Arts" },
          ].map((img, index) => (
            <div
              key={index}
              className="w-[70vw] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BeyondAcademics;
