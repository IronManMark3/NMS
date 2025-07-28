import React, { useEffect, useState } from 'react';

const PartnersSection = () => {
  const allPartners = [
    { name: "Partner 1", image: "/images/img_image_34.png", width: "159px", height: "89px" },
    { name: "Partner 2", image: "/images/img_image_27.png", width: "184px", height: "50px" },
    { name: "Partner 3", image: "/images/img_image_35.png", width: "171px", height: "46px" },
    { name: "Partner 4", image: "/images/img_image_30.png", width: "145px", height: "37px" },
    { name: "Partner 5", image: "/images/img_image_36.png", width: "124px", height: "50px" },
    { name: "Partner 6", image: "/images/partner6.png", width: "140px", height: "60px" },
    { name: "Partner 7", image: "/images/partner7.png", width: "150px", height: "60px" },
    { name: "Partner 8", image: "/images/partner8.png", width: "160px", height: "60px" },
    { name: "Partner 9", image: "/images/partner9.jpg", width: "200px", height: "130px" }
  ];

  const [showFirstBatch, setShowFirstBatch] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstBatch((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const firstBatch = allPartners.slice(0, 5);
  const secondBatch = allPartners.slice(5, 9);

  return (
    <section className="bg-white border-t border-black py-[100px] px-4 sm:px-6 lg:px-[80px] overflow-hidden">
      <div className="max-w-[1278px] mx-auto">
        <h2 className="text-[20px] sm:text-[26px] md:text-[30px] leading-[26px] sm:leading-[32px] md:leading-[20px] text-center capitalize mb-[33px] max-w-[488px] mx-auto max-[360px]:text-[16px] max-[360px]:leading-[22px]">
          KNOWLEDGE PARTNERS
        </h2>

        <div className="relative h-auto min-h-[120px]">
          {/* Mobile: Stack in rows */}
          <div className="grid grid-cols-2 gap-y-6 justify-items-center sm:hidden max-[360px]:gap-y-4">
            {(showFirstBatch ? firstBatch : secondBatch).map((partner, index) => (
              <img
                key={index}
                src={partner.image}
                alt={partner.name}
                className="object-contain w-[90px] h-auto max-[360px]:w-[75px]"
              />
            ))}
          </div>

          {/* Desktop: Horizontal Fade Toggle */}
          <div className="hidden sm:block relative h-[140px] overflow-hidden">
            <div className={`absolute inset-0 flex items-center justify-between px-[20px] transition-opacity duration-1000 ${showFirstBatch ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
              {firstBatch.map((partner, index) => (
                <div key={index} className="flex items-center justify-center w-full">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    style={{ width: partner.width, height: partner.height }}
                    className="object-contain mx-4"
                  />
                </div>
              ))}
            </div>

            <div className={`absolute inset-0 flex items-center justify-evenly px-[20px] transition-opacity duration-1000 ${!showFirstBatch ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
              {secondBatch.map((partner, index) => (
                <div key={index} className="flex items-center justify-center w-full">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    style={{ width: partner.width, height: partner.height }}
                    className="object-contain mx-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
