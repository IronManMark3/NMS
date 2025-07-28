import React from 'react';
import CountUp from 'react-countup';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import useInView from '@/components/ui/useInView';

const AboutSection = () => {
  const [ref, inView] = useInView(0.3);

  const stats = [
    { number: 25, suffix: "+", label: "Years\nof Excellence" },
    { number: 500, suffix: "+", label: "Crores in\nInternational Scholarships" },
    { number: 1000, suffix: "+", label: "National & International Toppers" },
    { number: 100, suffix: "+", label: "Sports &\nArts Programs" },
    { number: 250, suffix: "+", label: "Awards & Recognitions" },
  ];

  return (
    <section className="bg-white py-[40px] px-4 sm:px-6 lg:px-[81px] relative">
      <div className="max-w-[1277px] mx-auto">
        {/* Heading */}
        <h2 className="text-[22px] sm:text-[32px] md:text-[38px] leading-[30px] sm:leading-[42px] md:leading-[46px] text-center capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[28px] max-w-[488px] mx-auto max-[360px]:text-[18px] max-[360px]:leading-[24px]">
          Shaping Young Minds, Building Global Leaders
        </h2>

        {/* Description */}
        <p className="text-[13px] font-poppins sm:text-[16px] leading-[22px] text-center text-black mb-[28px] max-w-[852px] mx-auto max-[360px]:text-[12px] max-[360px]:leading-[20px]">
          Welcome to Neerja Modi School (NMS)—a place where education inspires, nurtures, and transforms. As one of Jaipur's top CBSE and IB school, we provide an enriching environment where students explore their potential, think critically, and grow into confident individuals. With a strong foundation in CBSE, IB, and Cambridge curriculums, we blend academic excellence with real-world skills, creativity, and leadership, preparing students to thrive on a global stage.
        </p>

        {/* Button */}
        <div className="flex justify-center mb-[28px]">
          <Link to="#">
            <Button
              variant="gradient"
              className="px-[25px] py-[9px] text-[13px] leading-[19px] text-center rounded-sm hover:border-transparent max-[360px]:text-[12px] max-[360px]:px-[20px] max-[360px]:py-[8px]"
            >
              Know More
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="flex flex-col sm:flex-row justify-center gap-[20px] pb-[5px] sm:pb-[150px]">
            <div className="hidden sm:block rounded-xl transform transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-[400px] h-[280px] overflow-hidden rounded-md">
                <img
                  src="/images/img_0182.png"
                  alt="School Image 1"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>

            <div className="block rounded-xl transform transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-[400px] h-[280px] sm:h-[280px] max-[360px]:h-[200px] overflow-hidden rounded-md">
                <img
                  src="/images/img_1098_74.png"
                  alt="School Image 2"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>

            <div className="hidden sm:block rounded-xl transform transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-[400px] h-[280px] overflow-hidden rounded-md">
                <img
                  src="/images/img_0136.png"
                  alt="School Image 3"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Statistics Box */}
          <div
            ref={ref}
            className="w-full max-w-[1100px] px-4 py-[20px] sm:px-[30px] bg-white rounded-xl shadow-lg flex flex-wrap justify-center gap-[16px] sm:gap-[30px] mx-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-bottom-[-68px] z-10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex-1 min-w-[100px] text-center">
                <h3 className="font-bold text-[24px] sm:text-[32px] leading-[34px] uppercase bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[4px] font-[Book Antiqua] max-[360px]:text-[20px] max-[360px]:leading-[28px]">
                  {inView ? (
                    <CountUp start={0} end={stat.number} duration={1.5} suffix={stat.suffix} />
                  ) : (
                    "0" + stat.suffix
                  )}
                </h3>
                <p className="text-[10px] sm:text-[12px] leading-[14px] text-black whitespace-pre-line uppercase font-poppins max-[360px]:text-[9px] max-[360px]:leading-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
