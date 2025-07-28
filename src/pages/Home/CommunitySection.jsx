import React from 'react';

const CommunitySection = () => {
  const communityImages = [
    { src: "/images/img_0120.png", alt: "Community Service 1" },
    { src: "/images/img_0120_403x588.png", alt: "Community Service 2" },
    { src: "/images/img_0120_1.png", alt: "Community Service 3" },
    { src: "/images/img_0120.png", alt: "Community Service 4" },
    { src: "/images/img_0120_403x588.png", alt: "Community Service 5" },
    { src: "/images/img_0120_1.png", alt: "Community Service 6" },
    { src: "/images/img_0120.png", alt: "Community Service 7" },
    { src: "/images/img_0120_403x588.png", alt: "Community Service 8" },
    { src: "/images/img_0120_1.png", alt: "Community Service 9" }
  ];

  return (
    <section className="bg-white py-[40px] px-4 sm:px-6 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[40px] sm:mb-[60px] max-[360px]:mb-[28px]">
          <h2 className="text-[24px] sm:text-[32px] md:text-[38px] leading-[32px] sm:leading-[42px] md:leading-[46px] capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent max-[360px]:text-[18px] max-[360px]:leading-[24px]">
            Community Service & Social Initiatives
          </h2>
        </div>

        {/* Horizontal Scrollable Community Images */}
        <div className="w-full overflow-x-hidden">
          <div className="overflow-x-auto scroll-smooth" style={{ scrollbarWidth: "none" }}>
            <div
              className="flex gap-[20px] sm:gap-[30px] w-max px-2 sm:px-4 max-[360px]:gap-[12px]"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              {communityImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[400px] h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden rounded-md shadow-lg transition-transform duration-500 hover:scale-105 max-[360px]:w-[180px] max-[360px]:h-[160px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-md"
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

export default CommunitySection;
