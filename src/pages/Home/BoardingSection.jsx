import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const BoardingSection = () => {
  const images = [
    "/images/hostel1.png",
    "/images/hostel2.png",
    "/images/hostel3.png",
    "/images/hostel4.png",
    "/images/hostel5.png"
  ];

  const [centerIndex, setCenterIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getPositionStyle = (index) => {
    const left = (centerIndex - 1 + images.length) % images.length;
    const right = (centerIndex + 1) % images.length;

    if (index === centerIndex) return "scale-100 z-20 opacity-100";
    if (index === left || index === right) return "scale-90 z-10 opacity-80";
    return "scale-75 z-0 opacity-0 pointer-events-none";
  };

  const topIcons = [
    { icon: "/images/flask.png", gradientIcon: "/images/flask_gradient.jpg", label: "State-Of-The-Art facilities" },
    { icon: "/images/hand-shake.png", gradientIcon: "/images/hand-shake_gradient.jpg", label: "Dedicated Support Staff" },
    { icon: "/images/confident.png", gradientIcon: "/images/confident_gradient.jpg", label: "Holistic development programs" },
    { icon: "/images/verified.png", gradientIcon: "/images/verified_gradient.jpg", label: "24/7 Security And Pastoral Care" },
    { icon: "/images/cereal.png", gradientIcon: "/images/cereal_gradient.jpg", label: "Healthy & Nutritious Meals" },
  ];

  const bottomIcons = [
    { icon: "/images/scholar.png", gradientIcon: "/images/scholar_gradient.jpg", label: "Personalized Academic Support" },
    { icon: "/images/study.png", gradientIcon: "/images/study_gradient.jpg", label: "Well-Equipped Study Areas" },
    { icon: "/images/soccer-player.png", gradientIcon: "/images/soccer-player_gradient.jpg", label: "Modern Recreational Facilities" },
    { icon: "/images/sleep.png", gradientIcon: "/images/sleep_gradient.jpeg", label: "Comfortable & Spacious Dormitories" },
  ];

  return (
    <section className="bg-white py-[40px] px-4 sm:px-6 lg:px-[81px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[32px] sm:text-[48px] md:text-[61px] leading-[38px] sm:leading-[60px] uppercase bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[10px]">
            Boarding Life
          </h2>
          <p className="text-[14px] sm:text-[18px] font-poppins font-light tracking-[3px] sm:tracking-[6px] uppercase text-black mb-[12px]">
            AT NMS MANSAROVER
          </p>
          <p className="text-[14px] sm:text-[18px] font-poppins font-light tracking-[3px] sm:tracking-[6px] uppercase text-black mb-[18px]">
            A Home Away from Home
          </p>
          <p className="text-[14px] sm:text-[16px] font-poppins leading-[22px] text-black max-w-[744px] mx-auto">
            At NMS, our boarding school is not just a place to stay—it is a community where students grow, learn, and thrive in a nurturing and supportive environment, just like home.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[300px] sm:h-[400px] flex justify-center items-center mb-[40px]">
          {images.map((img, index) => {
            const position = getPositionStyle(index);
            const width = index === centerIndex ? '90%' : '60%';
            const height = index === centerIndex ? '100%' : '80%';
            const left =
              index === centerIndex
                ? 'calc(50% - 45%)'
                : index === (centerIndex - 1 + images.length) % images.length
                ? 'calc(50% - 70%)'
                : index === (centerIndex + 1) % images.length
                ? 'calc(50% + 10%)'
                : '50%';

            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-in-out transform rounded overflow-hidden shadow-xl ${position}`}
                style={{ width, height, left }}
              >
                <img
                  src={img}
                  alt={`Boarding ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            );
          })}
        </div>

        {/* Facilities Section */}
        <div className="flex flex-col items-center text-center">
          <div className="w-[60px] sm:w-[80px] h-[4px] sm:h-[5px] bg-gradient-to-r from-[#c30015] to-[#0025ae] rounded-full mb-[16px]" />
          <h2 className="text-[24px] sm:text-[32px] md:text-[38px] leading-[30px] sm:leading-[42px] md:leading-[46px] text-center capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[24px] max-w-[488px] mx-auto">
            Perfect Blend Of Comfort,<br />Security & Learning
          </h2>

          {/* Mobile Icons */}
          <div className="grid grid-cols-3 gap-4 sm:hidden">
            {[...topIcons, ...bottomIcons].map((item, index) => (
              <div key={index} className="flex flex-col items-center max-w-[100px]">
                <div className="w-[60px] h-[60px] p-[6px] bg-white rounded-[16px] shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                  <img src={item.icon} alt={item.label} className="w-[30px] h-[30px] object-contain" />
                </div>
                <p className="mt-[6px] font-poppins text-[9px] text-center bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

         {/* Desktop Icons */}
<div className="hidden sm:flex sm:flex-col sm:gap-y-[30px] sm:px-[60px] w-full">
  {/* Top Row */}
  <div className="flex justify-between w-full max-w-[1400px] mx-auto">
    {topIcons.map((item, index) => (
      <div key={index} className="flex flex-col items-center max-w-[180px] group">
        <div className="w-[110px] h-[110px] bg-white rounded-[20px] shadow-md overflow-hidden relative transition-all duration-300 transform hover:scale-105">
          {/* Normal Icon (small centered) */}
          <img
            src={item.icon}
            alt={item.label}
            className="w-[60px] h-[60px] object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300"
          />
          {/* Hover Icon (fills full box) */}
          <img
            src={item.gradientIcon}
            alt={item.label}
            className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p className="mt-[8px] text-[14px] text-center bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
          {item.label}
        </p>
      </div>
    ))}
  </div>

  {/* Bottom Row */}
  <div className="flex justify-evenly w-full max-w-[1200px] mx-auto">
    {bottomIcons.map((item, index) => (
      <div key={index} className="flex flex-col items-center max-w-[180px] group">
        <div className="w-[110px] h-[110px] bg-white rounded-[20px] shadow-md overflow-hidden relative transition-all duration-300 transform hover:scale-105">
          {/* Normal Icon (small centered) */}
          <img
            src={item.icon}
            alt={item.label}
            className="w-[60px] h-[60px] object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300"
          />
          {/* Hover Icon (fills full box) */}
          <img
            src={item.gradientIcon}
            alt={item.label}
            className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p className="mt-[8px] text-[14px] text-center bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-[40px] mb-[60px]">
          <Link to="/BoardingPage">
            <Button variant="gradient" className="px-[30px] py-[10px] text-[14px] leading-[21px] text-center rounded-sm hover:border-transparent">
              Know More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BoardingSection;
