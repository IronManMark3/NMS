// src/pages/Counseling/CounselingSection3.jsx
import React from 'react';
import Button from '../../components/ui/Button';

const CounselingSection3 = () => {
  const achievements = [
    {
      name: "Aditya Agarwal",
      scholarship: "₹2,40,00,000",
      image: "/images/img_aditya_agarwal_1.png",
      university: "/images/logo1.png",
    },
    {
      name: "Hitishaa Goyal",
      scholarship: "₹2,40,00,000",
      image: "/images/img_screenshot_20250308_at_12537pm_1.png",
      university: "/images/logo2.png",
    },
    {
      name: "Shriya Jagwayan",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_13848pm_1.png",
      university: "/images/logo3.png",
    },
    {
      name: "Aaradhya Khandelwal",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_14140pm_1.png",
      university: "/images/logo4.png",
    },
    {
      name: "Aditya Agarwal",
      scholarship: "₹2,40,00,000",
      image: "/images/img_aditya_agarwal_1.png",
      university: "/images/logo1.png",
    },
    {
      name: "Hitishaa Goyal",
      scholarship: "₹2,40,00,000",
      image: "/images/img_screenshot_20250308_at_12537pm_1.png",
      university: "/images/logo2.png",
    },
    {
      name: "Shriya Jagwayan",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_13848pm_1.png",
      university: "/images/logo3.png",
    },
    {
      name: "Aaradhya Khandelwal",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_14140pm_1.png",
      university: "/images/logo4.png",
    }
  ];

  return (
    <section className="bg-white py-[40px] px-4 sm:px-6 lg:px-[81px]">
      <div className="max-w-[1277px] mx-auto">
        {/* Section Header */}
        <div className="font-[book antiqua] text-center mb-[40px] max-[360px]:mb-[28px]">
          <h2 className="text-[20px] sm:text-[26px] md:text-[30px] leading-[26px] sm:leading-[32px] mb-[20px] capitalize max-[360px]:text-[16px] max-[360px]:leading-[22px]">
            <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
              GLOBAL&nbsp;
            </span>
            <span className="text-[20px] sm:text-[26px] md:text-[30px] leading-[26px] sm:leading-[32px] capitalize text-black">
              UNIVERSITY PLACEMENTS
            </span>
          </h2>
        </div>

        {/* Scrollable Carousel */}
        <div className="w-full overflow-x-hidden">
          <div className="overflow-x-auto scroll-smooth px-2 sm:px-4 no-scrollbar">
            <div className="flex gap-[20px] w-max max-[360px]:gap-[12px]">
              {achievements.map((student, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col w-[190px] sm:w-[240px] md:w-[252px] h-[390px] sm:h-[440px] max-[360px]:w-[150px] max-[360px]:h-[320px]"
                >
                  {/* Student Image */}
                  <div className="w-full h-[210px] sm:h-[230px] md:h-[245px] bg-gradient-to-br from-[#c30015a0] to-[#0025aea0] rounded overflow-hidden mb-[12px] flex items-end justify-center pt-[50px] sm:pt-[50px] max-[360px]:h-[160px]">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Student Info */}
                  <div className="w-full px-1 text-left">
                    <p className="font-poppins text-[12px] sm:text-[15px] leading-[18px] sm:leading-[22px] capitalize text-black max-[360px]:text-[10px] max-[360px]:leading-[16px]">
                      {student.name}<br />
                      Scholarship : {student.scholarship}
                    </p>
                  </div>

                  {/* University Logo with conditional style */}
                  <div className={`px-1 ${student.university.includes('logo1') ? 'mt-[-12px]' : 'mt-2'}`}>
                    <img
                      src={student.university}
                      alt="University Logo"
                      className="w-[70%] h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-[32px]">
          <Button
            variant="gradient"
            className="px-[30px] py-[10px] text-[14px] leading-[21px] text-center rounded-sm hover:border-transparent"
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CounselingSection3;
