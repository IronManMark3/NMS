import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BoardingWellness = () => {
  const wellnessItems = [
    { image: "/images/yoga.jpg", caption: "Daily Yoga & Meditation" },
    { image: "/images/counselor.jpg", caption: "Emotional Wellness Support" },
    { image: "/images/health_check.png", caption: "Regular Health Checkups" },
    { image: "/images/medical_care.jpg", caption: "24/7 Medical Assistance" },
  ];

  useEffect(() => {
    AOS.init({
      once: false,
      offset: 150,
      duration: 1000,
    });
  }, []);

  return (
    <section className="bg-white py-[60px] px-4 sm:px-6 lg:px-[81px]">
      {/* Heading */}
      <div className="text-center mb-[50px]">
        <h2 className="text-[22px] sm:text-[30px] md:text-[40px] leading-[28px] sm:leading-[38px] md:leading-[48px] font-semibold mb-3">
          Wellness That Nurtures Every Student
        </h2>
        <p className="font-[poppins] text-[14px] sm:text-[16px] leading-[24px] max-w-[750px] mx-auto text-gray-700">
          From daily mindfulness to round-the-clock medical care, we prioritize the health and happiness of every boarder.
        </p>
      </div>

      {/* Image Cards with Bottom Text Overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-w-[1140px] mx-auto">
      {wellnessItems.map((item, index) => (
  <div
    key={index}
    className="relative w-full h-[310px] sm:h-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
    data-aos="fade-up"
    data-aos-delay={`${index * 150}`}
  >
    <img
      src={item.image}
      alt={item.caption}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 text-white text-center">
      <p className="font-[poppins] text-[14px] sm:text-[15px] font-medium">
        {item.caption}
      </p>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default BoardingWellness;
