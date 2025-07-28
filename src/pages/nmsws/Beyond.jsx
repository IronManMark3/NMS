import React from 'react';

const beyondItems = [
  {
    img: '/images/beyond1.jpeg',
    title: 'International Olympiads & Model United Nations',
  },
  {
    img: '/images/beyond2.jpg',
    title: 'Design Thinking, Research, And Entrepreneurship Labs',
  },
  {
    img: '/images/beyond3.png',
    title: 'TEDx Events & Public Speaking',
  },
  {
    img: '/images/beyond4.JPG',
    title: 'Performing Arts & Theatre',
  },
  {
    img: '/images/beyond5.JPG',
    title: 'Extensive Library Access',
  },
];

const Beyond = () => {
  const fullRows = beyondItems.slice(0, 3);
  const lastRow = beyondItems.slice(3);

  return (
    <section className="bg-white py-[60px] px-4 sm:px-6 lg:px-[72px] font-[Book Antiqua]">
      {/* Heading */}
      <div className="text-center mb-[40px]">
        <h2 className="text-[26px] sm:text-[36px] md:text-[42px] leading-[32px] sm:leading-[48px] md:leading-[52px]">
          <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
            Beyond The Curriculum
          </span>
        </h2>
        <p className=" font-[poppins] text-[14px] sm:text-[16px] md:text-[18px] mt-2 text-black max-w-[900px] mx-auto">
          We champion well-rounded development with a wide range<br />
          of co-curricular experiences:
        </p>
      </div>

      {/* Grid for first 3 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fullRows.map(({ img, title }, index) => (
          <div
            key={index}
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
        ))}
      </div>

      {/* Last 2 items centered */}
      <div className="w-full flex justify-center flex-wrap gap-4 mt-4">
        {lastRow.map(({ img, title }, index) => (
          <div
            key={index}
            className="relative group overflow-hidden h-[220px] sm:h-[260px] md:h-[280px] w-full max-w-[420px]"
            data-aos="fade-up"
            data-aos-delay={(3 + index) * 100}
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
        ))}
      </div>
    </section>
  );
};

export default Beyond;
