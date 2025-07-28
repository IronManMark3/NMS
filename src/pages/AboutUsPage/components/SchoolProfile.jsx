import React from 'react';
import { FaDownload } from 'react-icons/fa';

const schoolProfiles = [
  {
    title: 'NMS School Profile 2024',
    image: '/images/nms-profile-cover1.png', // 🔁 replace with actual preview image path
    file: '/files/nms-profile-2024.pdf',
  },
  {
    title: 'NMS Boarding Profile 2024',
    image: '/images/nms-profile-cover2.png', // 🔁 replace with actual preview image path
    file: '/files/nms-profile-25.pdf',
  },
];

const SchoolProfile = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="space-y-6 text-gray-800"
    >
      <h2 className="inline-block text-[22px] sm:text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#502e94]">
        School Profile
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {schoolProfiles.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-4 bg-white border border-gray-200 shadow-sm rounded-lg p-4 items-center"
          >
            {/* PDF Cover Image */}
            <img
              src={item.image}
              alt={`${item.title} Cover`}
              className="w-[90px] h-[120px] object-cover rounded-md shadow-sm"
            />

            {/* Title and Button */}
            <div className="flex-1 space-y-1">
              <p className="text-[15px] font-medium text-gray-700">{item.title}</p>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-[14px]"
              >
                <FaDownload className="text-[16px]" />
                View / Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolProfile;
