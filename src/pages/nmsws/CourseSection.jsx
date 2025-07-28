import React from 'react';

const CourseSection = () => {
  return (
    <section className="bg-white py-[60px] px-4 sm:px-6 lg:px-[72px]">
      {/* Heading & Intro */}
      <div className="max-w-[1320px] mx-auto text-center mb-[40px]">
        <h2 className="inline-block text-[24px] sm:text-[30px] md:text-[36px] leading-[40px] font-[Book Antiqua] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-2">
          Courses We Offer
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black leading-[28px] max-w-[900px] mx-auto font-[poppins]">
          World School Campus specializes in globally accepted curricular designed to foster&nbsp;
          <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-2">innovation</span>,&nbsp;
          <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-2">critical thinking</span>, and&nbsp;
          <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-2">intercultural understanding</span>.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* IB Programmes Card */}
        <div className="border border-[#d1d1d1] rounded-xl p-5 max-w-[600px] w-full">
          <img
            src="/images/ib_img.png"
            alt="IB Programmes"
            className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-md mb-4"
          />
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] text-left leading-[28px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-2 font-[Book Antiqua]">
            IB Programmes – PYP, MYP & Diploma
          </h3>
          <div className="text-[14px] sm:text-[15px] text-left text-black space-y-2 font-[poppins]">
            <p>Classes Offered :</p>
            <ul className="list-disc list-inside space-y-1 font-[poppins]">
              <li>PYP (Primary Years Programme) : Nursery to Grade 5</li>
              <li>MYP (Middle Years Programme) : Grade 6 to Grade 10</li>
              <li>IBDP (IB Diploma Programme) : Grade 11 to Grade 12</li>
            </ul>
          </div>
        </div>

        {/* IGCSE Programme Card */}
        <div className="border border-[#d1d1d1] rounded-xl p-5 max-w-[600px] w-full">
          <img
            src="/images/igcse_img.png"
            alt="IGCSE Programme"
            className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-md mb-4"
          />
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] text-left leading-[28px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-2">
            IGCSE (Cambridge Curriculum)
          </h3>
          <div className="font-[poppins] text-[14px] sm:text-[15px] text-left text-black space-y-2">
            <p>Classes Offered : Grade 6 – 10</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Academic excellence paired with global assessment standards.</li>
              <li>Ideal for students who enjoy a flexible and interdisciplinary approach.</li>
              <li>Sets a strong foundation for A-Levels, IB Diploma, and beyond.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
