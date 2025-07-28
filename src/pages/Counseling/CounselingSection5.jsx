import React from 'react';

const offerings = [
  { desc: "One-On-One Counseling Sessions", icon: "/images/icon1.png" },
  { desc: "University Shortlisting (India & abroad)", icon: "/images/icon2.png" },
  { desc: "Application & Essay Writing Support", icon: "/images/icon3.png" },
  { desc: "SAT/ACT/IELTS/TOEFL Guidance", icon: "/images/icon4.png" },
  { desc: "Letters of Recommendation Assistance", icon: "/images/icon5.png" },
  { desc: "Scholarship & Financial Aid Guidance", icon: "/images/icon6.png" },
  { desc: "Interview Preparation", icon: "/images/icon7.png" },
];

const CounselingSection5 = () => {
  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <h2 className="font-[book antiqua] text-[26px] sm:text-[30px] md:text-[36px] text-primary-black mb-4">
            WHAT WE&nbsp;
            <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
              OFFER
            </span>
          </h2>

          <p className="font-[poppins] text-[15px] sm:text-[16px] text-black max-w-[750px]">
            Our dedicated counseling services help students make informed decisions about their academic and career journeys. We offer personalized assistance every step of the way.
          </p>
        </div>

        {/* ✅ MOBILE ONLY */}
        <div className="block sm:hidden w-full max-w-[400px] grid grid-cols-2 gap-6 mt-12 justify-items-center">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#f4f4f4cc] rounded-lg p-4 flex flex-col items-center text-center w-[150px] transition-transform duration-300 transform hover:scale-110 ${idx === 6 ? 'col-span-2 justify-self-center' : ''}`}
            >
              <img src={item.icon} className="w-[40px] h-[40px] mb-3 object-contain" />
              <p className="font-[poppins] text-[13px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ DESKTOP & TABLET ONLY */}
        <div className="hidden sm:flex flex-col items-center w-full mt-12">
          <div className="w-full max-w-[1150px] grid sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {offerings.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f4f4f4cc] rounded-lg p-6 flex flex-col items-center text-center w-[230px] transition-transform duration-300 transform hover:scale-110"
              >
                <img src={item.icon} className="w-[40px] h-[40px] mb-4 object-contain" />
                <p className="font-[poppins] text-[14px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full max-w-[865px] grid sm:grid-cols-3 gap-6 mt-10 justify-items-center">
            {offerings.slice(4).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f4f4f4cc] rounded-lg p-6 flex flex-col items-center text-center w-[230px] transition-transform duration-300 transform hover:scale-110"
              >
                <img src={item.icon} className="w-[40px] h-[40px] mb-4 object-contain" />
                <p className="font-[poppins] text-[14px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselingSection5;
