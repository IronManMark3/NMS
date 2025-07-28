import React from 'react';

const NewsSection = () => {
  const images = [
    {
      src: "/images/media1.png",
      text: "Garth Bharil Selected for 6th SGFI U-17 Boys Tennis National Camp",
    },
    {
      src: "/images/media2.png",
      text: "Neerja Modi School Excels At SGFI District Gymnastics Under-14 Competition",
    },
    {
      src: "/images/media3.png",
      text: "Neerja Modi School Players Shine In SGFI U-19 State Cricket Tournament",
    },
    {
      src: "/images/media4.png",
      text: "Shaping The Future With Innovation And Excellence",
    },
    {
      src: "/images/media5.png",
      text: "Rajasthan Women's Senior State Football Championship",
    },
  ];

  return (
    <section className="bg-white py-[28px] px-4 sm:px-6 lg:px-[81px]">
      <div className="max-w-[1277px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[30px] sm:mb-[40px] max-[360px]:mb-[24px]">
          <h2 className="font-poppins text-[26px] sm:text-[36px] md:text-[40px] leading-[30px] sm:leading-[48px] capitalize text-black mb-[10px] max-[360px]:text-[18px] max-[360px]:leading-[24px]">
            News &
          </h2>
          <div className="text-[50px] sm:text-[80px] md:text-[100px] leading-[60px] sm:leading-[100px] uppercase bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[12px] max-[360px]:text-[30px] max-[360px]:leading-[36px]">
            Media
          </div>
          <p className="font-poppins text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px] text-center capitalize text-black max-w-[500px] mx-auto max-[360px]:text-[12px] max-[360px]:leading-[18px]">
            Showcasing Our Achievements, Announcements, and Press Highlights.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[20px] max-[360px]:gap-[8px]">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group w-[150px] sm:w-[180px] md:w-[190px] h-[280px] sm:h-[320px] md:h-[350px] overflow-hidden transition-all duration-500 hover:w-[300px] hover:h-[360px] cursor-pointer max-[360px]:w-[120px] max-[360px]:h-[200px]"
            >
              <img
                src={item.src}
                alt={`Media ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3 sm:p-4 max-[360px]:p-2">
                <p className="text-white text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-medium max-[360px]:text-[10px] max-[360px]:leading-[14px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
