import React from 'react';

const BoardingAchievementsCarousel = () => {
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
    // Repeated
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
        {/* Heading */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] leading-[26px] sm:leading-[32px] mb-[20px] capitalize">
            <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
              BOARDING SUCCESS STORIES
            </span>
          </h2>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-x-auto scroll-smooth px-2 sm:px-4" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-[30px] w-max">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col w-[220px] sm:w-[240px] md:w-[252px] h-[370px] sm:h-[400px]"
              >
                <div className="w-full h-[210px] sm:h-[230px] md:h-[245px] bg-gradient-to-br from-[#c30015a0] to-[#0025aea0] rounded overflow-hidden mb-[14px] pt-[40px] flex items-end justify-center">
                  <img
                    src={achievement.image}
                    alt={achievement.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[poppins] text-[14px] sm:text-[15px] leading-[22px] text-left capitalize text-black">
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
    </section>
  );
};

export default BoardingAchievementsCarousel;
