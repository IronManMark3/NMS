import React from 'react';
import { FiSend } from 'react-icons/fi';

const Careers = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="space-y-10">
      {/* Heading and Email */}
      <div>
        <h2 className="inline-block text-[22px] sm:text-[38px] text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#502e94] font-semibold mb-2">
          Want To Work At Neerja Modi School?
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-700">
          Send in your resume to{' '}
          <span className="text-[#c30015] font-medium">nmsjaipur@yahoo.com</span>
        </p>
      </div>

      {/* Current Openings */}
      <div className="space-y-6">
        <h3 className="font-[poppins] text-[18px] sm:text-[30px] font-semibold">Current Openings:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[15px] leading-[28px] text-gray-800">
          {/* Teaching */}
          <div>
            <h4 className="font-[poppins] font-semibold mb-2">Teaching Positions</h4>
            <ul className="font-[poppins] list-disc ml-5 space-y-1">
              <li>Pre Primary and Primary teachers.</li>
              <li>TGT – English, Math, Science, Social Science, Mental Ability, French and Fine Arts.</li>
              <li>
                PGT – English, Maths, Physics, Chemistry, Biology, Psychology, Economics, Accountancy, B.st, Fine arts, Home science, PE, Entrepreneurship, History, Geography.
              </li>
              <li>Computer teachers for primary, middle and senior school</li>
              <li>PTI (Male/ Female) – English Speaking preferred.</li>
              <li>
                Activity teachers – yoga, vocal music (Western and Indian), Instrumental Music (synthesizer, Guitar, violin, tabla, sitar & flute), Dance – western and Indian classical.
              </li>
              <li>Teachers for IB and IGCSE – English, Maths, Science, French and ICT.</li>
            </ul>
          </div>

          {/* Non-Teaching */}
          <div>
            <h4 className="font-[poppins] font-semibold mb-2">Non – Teaching Positions</h4>
            <ul className="font-[poppins] list-disc ml-5 space-y-1">
              <li>Counselor – Behavioural and Admission.</li>
              <li>Nurse (Male / Female) – 2–3 years experience in a reputed organization.</li>
              <li>Sr. Accountant.</li>
              <li>Office admin (Male / Female)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Applicant Requirements */}
      <div className="space-y-4">
        <h3 className="font-[poppins] text-[18px] sm:text-[30px] font-semibold">Applicants should:</h3>
        <ul className="font-[poppins] list-disc ml-5 space-y-1 text-[15px] leading-[28px] text-gray-800">
          <li>Be from an English medium background</li>
          <li>Be experienced and comfortable working in an internationally-minded environment</li>
          <li>Be able to build a learning environment that is supportive and productive</li>
          <li>Be able to challenge and develop all students through differentiated approaches</li>
          <li>
            Be able to build a learning programme that reflects their students’ needs,
            backgrounds, perspectives and interest
          </li>
          <li>Be committed to continuous professional growth and professional learning</li>
        </ul>
      </div>

      {/* Send Mail Button */}
      <div>
        <a
          href="mailto:nmsjaipur@yahoo.com" // You can update this link later
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white text-[15px] font-medium transition duration-300 hover:opacity-90"
        >
          <FiSend className="text-[18px]" />
          Send Mail
        </a>
      </div>

      {/* Note */}
      <p className="italic font-[poppins] text-[18px]">
        Only shortlisted candidates will be contacted further.
        <br />
        <span className="not-italic">We thank you for your interest in our school.</span>
      </p>
    </div>
  );
};

export default Careers;
