import React from 'react';
import { Link } from 'react-router-dom';

const CampusSection = () => {
  const campuses = [
    {
      name: "Mansarovar",
      image: "/images/img_image_13.png",
      hoverText: "(K-12) CBSE Cambridge Program",
      delay: 0
    },
    {
      name: "World School, Mansarovar",
      image: "/images/img_world_school.png",
      hoverText: "(Sr KG-12) IB Board",
      delay: 200
    },
    {
      name: "Kalwara",
      image: "/images/img_image_14.png",
      hoverText: "(K-12)",
      delay: 400
    },
    {
      name: "Vaishali Nagar",
      image: "/images/img__0x0.png",
      hoverText: "(K-2) CBSE Board",
      delay: 600
    },
    {
      name: "Ajmer",
      image: "/images/img_image_15.png",
      hoverText: "(K-7) CBSE Board",
      delay: 800
    },
  ];

  return (
    <section className="bg-white py-[40px] px-4 sm:px-6">
      {/* Section Heading */}
      <div className="text-center mb-[32px] max-[360px]:mb-[24px]">
        <p className="font-poppins text-[18px] sm:text-[24px] leading-[26px] sm:leading-[36px] uppercase text-black mb-2 max-[360px]:text-[16px] max-[360px]:leading-[22px]">
          The world of
        </p>
        <h2 className="text-[24px] sm:text-[32px] md:text-[38px] leading-[32px] sm:leading-[42px] md:leading-[46px] text-center capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[28px] max-w-[488px] mx-auto max-[360px]:text-[18px] max-[360px]:leading-[24px]">
          Neerja Modi School
        </h2>
      </div>

      {/* Top Row - 3 Images */}
      <div className="w-full flex flex-col sm:flex-row justify-center gap-4 mb-4 max-[360px]:gap-3">
        {campuses.slice(0, 3).map((campus, index) => (
          <CampusImage key={index} {...campus} />
        ))}
      </div>

      {/* Bottom Row - 2 Images */}
      <div className="w-full flex flex-col sm:flex-row justify-center gap-4 max-[360px]:gap-3">
        {campuses.slice(3, 5).map((campus, index) => (
          <CampusImage key={index + 3} {...campus} />
        ))}
      </div>
    </section>
  );
};

const CampusImage = ({ image, name, hoverText, delay }) => {
  const isVaishali = name.includes("Vaishali");

  return (
    <Link
      to="/nmsws"
      data-aos="fade-right"
      data-aos-delay={delay}
      className="relative overflow-hidden group w-full max-w-[450px] h-[200px] sm:h-[300px] md:h-[350px] max-[360px]:h-[160px] cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className={`absolute bottom-0 left-0 w-full p-[12px] sm:p-[20px] ${isVaishali ? 'bg-gradient-to-t from-black/100 via-black/50 to-transparent' : ''}`}>
        <h3 className="text-[16px] sm:text-[22px] md:text-[25px] font-semibold text-white max-[360px]:text-[14px]">
          {name}
        </h3>
        <p className="text-[12px] sm:text-[16px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-[360px]:text-[10px]">
          {hoverText}
        </p>
      </div>
    </Link>
  );
};

export default CampusSection;
