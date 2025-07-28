import React from 'react';

const BoardingFacilities = () => {
  const leftImages = [
    "/images/facility1.png",
    "/images/facility2.jpg"
  ];
  const rightImages = [
    "/images/facility3.jpg",
    "/images/facility4.jpg"
  ];
  const labels = [
    "Separate, secure blocks for boys and girls",
    "Fully air-conditioned rooms with attached bathrooms",
    "Study tables, personal storage & daily cleaning",
    "High-speed Wi-Fi and 24/7 electricity backup"
  ];
  const icons = [
    "/images/facility_icon1.png",
    "/images/facility_icon2.png",
    "/images/facility_icon3.png",
    "/images/facility_icon4.png"
  ];

  // Swapped array for mobile view
  const swappedIcons = [...icons];
  [swappedIcons[1], swappedIcons[2]] = [swappedIcons[2], swappedIcons[1]];
  const swappedLabels = [...labels];
  [swappedLabels[1], swappedLabels[2]] = [swappedLabels[2], swappedLabels[1]];

  return (
    <section className="bg-white py-[50px] px-4 sm:px-6 lg:px-[81px] overflow-hidden">
      <div className="text-center mb-[40px]">
        <h2 className="text-[22px] sm:text-[30px] md:text-[40px] leading-tight mb-3">
          Where Comfort Meets <span className="bg-gradient-to-r from-[#0025ae] to-[#c30015] bg-clip-text text-transparent">Care</span>
        </h2>
        <p className="font-[poppins] text-[14px] sm:text-[16px] max-w-[750px] mx-auto text-gray-700 leading-[22px] sm:leading-[24px]">
          Thoughtfully Designed Living Spaces for a Safe, Comfortable & Productive Stay
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
        
        <div className="flex flex-col gap-6 w-full sm:w-1/3 items-end" data-aos="fade-right">
          {leftImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Facility ${idx + 1}`}
              className="w-full h-[180px] sm:h-[250px] object-cover rounded-xl"
            />
          ))}
        </div>

        {/* Mobile icon order */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-6 w-full sm:hidden px-2" data-aos="zoom-in-up">
          {swappedIcons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <img src={icon} alt={swappedLabels[index]} className="w-[40px] h-[40px] object-contain" />
              <p className="font-[poppins] text-[13px] text-gray-800 leading-[20px] max-w-[160px]">
                {swappedLabels[index]}
              </p>
            </div>
          ))}
        </div>

        {/* Default icon order for tablet & desktop */}
        <div className="hidden sm:grid grid-cols-2 gap-y-8 gap-x-6 w-full sm:w-1/3 px-2 sm:px-6" data-aos="zoom-in-up">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <img src={icon} alt={labels[index]} className="w-[50px] h-[50px] object-contain" />
              <p className="font-[poppins] text-[15px] text-gray-800 leading-[20px] max-w-[200px]">
                {labels[index]}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 w-full sm:w-1/3 items-start" data-aos="fade-left">
          {rightImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Facility ${idx + 3}`}
              className="w-full h-[180px] sm:h-[250px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardingFacilities;
