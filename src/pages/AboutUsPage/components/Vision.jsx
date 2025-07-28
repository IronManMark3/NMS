import React from 'react';
import { FaRocket, FaEye } from 'react-icons/fa';
import { GiYinYang } from 'react-icons/gi';

const Vision = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="space-y-10">

      {/* Our Vision */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaEye className="text-[24px] text-gradient-primary" />
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae]">
            Our Vision
          </h2>
        </div>
        <p className="font-[poppins] text-[15px] leading-[28px] text-gray-700">
          Cultivate the leaders of tomorrow, today; to enrich each student’s academic and personal development
          whilst upholding values of integrity; to deepen each student's understanding of the complexities of the world;
          to nurture each student to reach his or her fullest potential.
        </p>
      </div>

      {/* Our Mission */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaRocket className="text-[24px] text-gradient-primary" />
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae]">
            Our Mission
          </h2>
        </div>
        <div className="font-[poppins] text-[15px] leading-[28px] text-gray-700 space-y-4">
          <p>
            We are dedicated to holistic excellence and to the development of self-confident individuals of good character
            who are prepared to embrace diversity, change and lifelong learning.
          </p>
          <p>
            The school aims to create a learning environment that is challenging, diverse, and supportive, where talented,
            dedicated faculty and students are encouraged to interact in an atmosphere of mutual respect and trust.
            At NMS many paths exist in partnership and students are guided to find paths that are most effective for them.
          </p>
          <p>
            The school is committed to building a dynamic learning community that nurtures independent learning,
            innovation and creativity.
          </p>
        </div>
      </div>

      {/* Our Philosophy */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <GiYinYang className="text-[26px] text-gradient-primary" />
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae]">
            Our Philosophy
          </h2>
        </div>
        <div className="font-[poppins] text-[15px] leading-[28px] text-gray-700 space-y-4">
          <p>
            We understand that every child learns differently and is gifted with a unique ability that needs to be carefully
            honed through an inspiring learning environment. We celebrate the diversity and individuality of our students.
          </p>
          <p>
            With a clear recognition of the needs and the capabilities of students of differing ages and experiences,
            the school implements its philosophy:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>By gradually guiding a student from dependent to independent learning.</li>
            <li>By stressing high academic standards through a strong commitment to the process of learning.</li>
            <li>By creating an environment for learning which is stimulating, innovative, tolerant, enjoyable and which encourages intellectual inquiry and curiosity.</li>
            <li>By stressing the fundamental value of integrity & trust.</li>
            <li>By providing opportunities for personal growth, and preparing students to take their place as global citizens.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Vision;
