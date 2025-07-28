import React from 'react';

const Location = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="space-y-6">
      <h2 className="inline-block text-[22px] sm:text-[38px] text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae]">
        Location
      </h2>
      <p className="font-[poppins] text-[15px] leading-[28px] text-gray-700">
        Neerja Modi School is situated in a serene and accessible area, providing a peaceful yet well-connected environment ideal for learning and growth. Tap the map below to view our exact location on Google Maps.
      </p>
      <a
        href="https://www.google.com/maps/place/Neerja+Modi+School/@26.8677924,75.7616577,16.09z/data=!4m6!3m5!1s0x396db5ab690a3789:0x3bab49c1897e74a8!8m2!3d26.8681323!4d75.7654469!16s%2Fm%2F02vkzzg?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D" // Replace with exact location if needed
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <img
          src="/images/nms-map-preview.png" // Replace this with your actual uploaded map image path
          alt="Neerja Modi School Location Map"
          className="w-full h-auto rounded-md shadow-md hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Location;
