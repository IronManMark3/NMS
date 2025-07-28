import React from 'react';

const AcademicsSection = () => {
  const achievements = [
    {
      name: "Aditya Agarwal",
      university: "Cornell University, An Ivy League institute",
      scholarship: "₹2,40,00,000",
      image: "/images/img_aditya_agarwal_1.png"
    },
    {
      name: "Hitishaa Goyal",
      university: "Cornell University, An Ivy League institute",
      scholarship: "₹2,40,00,000",
      image: "/images/img_screenshot_20250308_at_12537pm_1.png"
    },
    {
      name: "Shriya Jagwayan",
      university: "Tulane University, An Ivy League institute",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_13848pm_1.png"
    },
    {
      name: "Aaradhya Khandelwal",
      university: "The University of Texas at Austin",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_14140pm_1.png"
    },
    {
      name: "Aditya Agarwal",
      university: "Cornell University, An Ivy League institute",
      scholarship: "₹2,40,00,000",
      image: "/images/img_aditya_agarwal_1.png"
    },
    {
      name: "Hitishaa Goyal",
      university: "Cornell University, An Ivy League institute",
      scholarship: "₹2,40,00,000",
      image: "/images/img_screenshot_20250308_at_12537pm_1.png"
    },
    {
      name: "Shriya Jagwayan",
      university: "Tulane University, An Ivy League institute",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_13848pm_1.png"
    },
    {
      name: "Aaradhya Khandelwal",
      university: "The University of Texas at Austin",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_14140pm_1.png"
    }
  ];

  return (
    <section className="bg-white py-[40px] px-4 sm:px-6 lg:px-[81px]">
      <div className="max-w-[1277px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[40px] max-[360px]:mb-[28px]">
          <h2 className="text-[20px] sm:text-[26px] md:text-[30px] leading-[26px] sm:leading-[32px] mb-[20px] capitalize max-[360px]:text-[16px] max-[360px]:leading-[22px]">
            <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
              EXCEPTIONAL RESULTS &
            </span>
            <br /><br />
            <span className="text-[30px] sm:text-[48px] md:text-[61px] leading-[40px] sm:leading-[50px] md:leading-[55px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent max-[360px]:text-[20px] max-[360px]:leading-[28px]">
              ACHIEVEMENTS
            </span>
          </h2>
          <p className="font-poppins text-[13px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-black max-w-[688px] mx-auto max-[360px]:text-[11px] max-[360px]:leading-[18px]">
            Guiding students to success through quality education, dedicated support, and a nurturing environment.
          </p>
        </div>

        {/* Horizontal Scrollable Achievements */}
        <div className="w-full overflow-x-hidden">
          <div className="overflow-x-auto scroll-smooth px-2 sm:px-4" style={{ scrollbarWidth: "none" }}>
            <div className="flex gap-[20px] w-max max-[360px]:gap-[12px]" style={{ WebkitOverflowScrolling: "touch" }}>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col w-[190px] sm:w-[240px] md:w-[252px] h-[340px] sm:h-[400px] max-[360px]:w-[150px] max-[360px]:h-[300px]"
                >
                  <div className="w-full h-[210px] sm:h-[230px] md:h-[245px] bg-gradient-to-br from-[#c30015a0] to-[#0025aea0] rounded overflow-hidden mb-[12px] flex items-end justify-center pt-[50px] sm:pt-[50px] max-[360px]:h-[160px]">
                    <img
                      src={achievement.image}
                      alt={achievement.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full px-1">
                    <p className="font-poppins text-[12px] sm:text-[15px] leading-[18px] sm:leading-[22px] text-left capitalize text-black max-[360px]:text-[10px] max-[360px]:leading-[16px]">
                      {achievement.name}<br />
                      {achievement.university}<br />
                      Scholarship : {achievement.scholarship}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicsSection;