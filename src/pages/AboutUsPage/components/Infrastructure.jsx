import React from 'react';

const Infrastructure = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="space-y-6">
      <h2 className="inline-block text-[22px] sm:text-[38px] text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae]">
        Infrastructure
      </h2>

      {/* Infrastructure Image */}
      <img
        src="/images/infrastructure-nms.png" // replace with your uploaded path
        alt="Neerja Modi School Infrastructure"
        className="w-full rounded-md shadow-md"
      />

      {/* Infrastructure Content */}
      <div className="font-[poppins] text-[15px] leading-[28px] text-gray-700 space-y-4">
        <p>
          We are proud of our green, expansive 20 acre property and state of the art facilities.
          We have a football field, a cricket ground (International Standard), a 25 meter lap swimming pool,
          a 400m athletic track; as well as courts for tennis, basketball, badminton & volleyball,
          horse riding, cricket nets, table tennis, and squash.
        </p>
        <p>
          The school hosts inter-school tournaments & our teams participate at the district, state & national levels
          in the following: chess, squash, tennis, badminton, athletics, basketball, football, archery,
          cricket, swimming and table tennis.
        </p>
        <p>
          Sustainability is also upheld throughout our operations through rain-water harvesting, water recycling,
          and solar-powered buildings. We understand that environmental awareness and conservation is key for
          the future of our community and generations to come.
        </p>
      </div>
    </div>
  );
};

export default Infrastructure;
