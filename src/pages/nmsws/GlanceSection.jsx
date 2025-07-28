import React from 'react';

const campusHighlights = [
  {
    img: '/images/glance1.jpg',
    title: '8.5–Acre Campus',
  },
  {
    img: '/images/glance2.jpg',
    title: 'Science & Robotics Labs',
  },
  {
    img: '/images/glance3.JPG',
    title: 'Smart Classrooms And Digital Learning Tools',
  },
  {
    img: '/images/glance4.JPG',
    title: 'Indoor Sports Complex & Outdoor Fields',
  },
  {
    img: '/images/glance5.JPG',
    title: 'Visual & Performing Arts Studios',
  },
  {
    img: '/images/glance6.JPG',
    title: 'Library With 15,000+ Books',
  },
  {
    img: '/images/glance7.jpg',
    title: 'Cafeteria Serving Nutritious Meals',
  },
  {
    img: '/images/glance8.jpeg',
    title: 'Full CCTV Surveillance & Safety Infrastructure',
  },
];

const GlanceSection = () => {
  const firstItems = campusHighlights.slice(0, 6);
  const lastItems = campusHighlights.slice(6);

  return (
    <section className="bg-white pt-[60px] font-[Book Antiqua]">
      {/* Heading */}
      <div className="px-4 sm:px-6 lg:px-[72px] mb-10">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[36px] sm:leading-[48px] md:leading-[64px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
          Campus at a <span className="inline-block">Glance</span>
        </h2>
      </div>

      {/* Grid of 6 images */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {firstItems.map(({ img, title }, index) => (
          <div key={index} className="p-[10px]">
            <div
              className="relative group overflow-hidden h-[220px] sm:h-[260px] md:h-[280px] w-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="text-white text-[14px] sm:text-[15px] md:text-[16px]">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Last row: 2 images centered */}
      <div className="w-full flex justify-center flex-wrap">
        {lastItems.map(({ img, title }, index) => (
          <div
            key={index}
            className="p-[10px] max-w-[420px] w-full sm:w-1/2 lg:w-1/3"
          >
            <div
              className="relative group overflow-hidden h-[220px] sm:h-[260px] md:h-[280px] w-full"
              data-aos="fade-up"
              data-aos-delay={(6 + index) * 100}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="text-white text-[14px] sm:text-[15px] md:text-[16px]">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlanceSection;
