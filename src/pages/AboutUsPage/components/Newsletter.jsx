import React from 'react';

const newsletters = [
  { name: 'NMS Junior Newsletter January – February 2024', year: 2024, link: 'https://nmsindia.org/newsletters/nms-junior-newsletter-jan-feb-2024' },
  { name: 'NMS Junior Newsletter November – December 2023', year: 2023, link: 'https://nmsindia.org/newsletters/nms-junior-newsletter-nov-dec-2023' },
  { name: 'NMS Junior Newsletter September – October 2023', year: 2023, link: 'https://nmsindia.org/newsletters/nms-junior-newsletter-september-october-2023' },
  { name: 'NMS Connect August 2023', year: 2023, link: 'https://nmsindia.org/newsletters/nms-connect-august-2023' },
  { name: 'NMS Junior Newsletter July – August 2023', year: 2023, link: 'https://nmsindia.org/newsletters/nms-junior-newsletter-july-aug-2023' },
  { name: 'NMS Connect April 2023', year: 2023, link: 'https://nmsindia.org/newsletters/nms-connect-april-2023' },
  { name: 'NMS Junior Newsletter April – May 2023', year: 2023, link: 'https://nmsindia.org/newsletters/nms-junior-newsletter-april-may-2023' },
  { name: 'NMS Junior Newsletter February 2023', year: 2023, link: 'https://nmsindia.org/newsletters/nms-junior-newsletter-feb-2023' },
  { name: 'NMS Junior Newsletter November 2022', year: 2022, link: 'https://nmsindia.org/newsletters/nms-junior-newsletter-november-2022' },
];

const Newsletter = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="space-y-8">
      <h2 className="inline-block text-[22px] sm:text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#502e94]">
        Newsletter
      </h2>

      {/* Featured Button */}
      <div>
        <button className="bg-green-600 hover:bg-green-700 text-white text-[14px] px-4 py-2 rounded-md font-medium">
          NMS Junior – Olympics Newsletter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-[14px]">
          <thead>
            <tr className="font-[poppins] bg-gray-100 text-gray-800">
              <th className="text-left py-2 px-4 border-b">Newsletter Name</th>
              <th className="text-left py-2 px-4 border-b">Year</th>
              <th className="text-left py-2 px-4 border-b">File</th>
            </tr>
          </thead>
          <tbody>
            {newsletters.map((item, idx) => (
              <tr key={idx} className={idx % 2 !== 0 ? 'bg-gray-50' : ''}>
                <td className="font-[poppins] py-2 px-4 border-b">{item.name}</td>
                <td className="font-[poppins] py-2 px-4 border-b">{item.year}</td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md inline-block"
                  >
                    Open / Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Newsletter;
