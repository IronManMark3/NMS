import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[72px] py-[50px] sm:py-[60px] lg:py-[76px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* School Info Section */}
          <div>
            <div className="flex items-center mb-5">
              <img src="/images/img_image_1.png" alt="Neerja Modi School Logo" className="w-[50px] h-[65px] sm:w-[66px] sm:h-[83px] mr-4" />
              <h3 className="text-[24px] sm:text-[28px] lg:text-[31px] text-black leading-[30px] sm:leading-[34px]">Neerja Modi School</h3>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black leading-[24px] sm:leading-[26px] mb-6">
              We, at Neerja Modi World School, are focused on providing a fertile platform powered by the best-in-class education, facilities and nurturing for students to attain their highest potential.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-black leading-[28px] mb-4 sm:mb-6 capitalize">Explore</h4>
            <ul className="space-y-3 sm:space-y-4">
              {["Blogs", "Sports", "Infrastructure", "Carrer with us", "Community Service", "Privacy Policy"].map((label, i) => (
                <li key={i}>
                  <Link to={`/${label.toLowerCase().replace(/ /g, '')}`} className="text-[14px] sm:text-[15px] lg:text-[16px] text-black leading-[22px] hover:text-[#c30015] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Section */}
          <div>
            <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-black leading-[28px] mb-4 sm:mb-6 capitalize">Academics</h4>
            <ul className="space-y-3 sm:space-y-4">
              {["Kindergarten", "Primary School", "Middle School", "Senior School", "IGCSE", "IB"].map((label, i) => (
                <li key={i}>
                  <Link to={`/${label.toLowerCase().replace(/ /g, '')}`} className="text-[14px] sm:text-[15px] lg:text-[16px] text-black leading-[22px] hover:text-[#c30015] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-black leading-[28px] mb-4 sm:mb-6 capitalize">Address</h4>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black leading-[26px] sm:leading-[30px]">
              Neerja Modi School,<br />
              Shipra Path, Mansarovar,<br />
              Jaipur 302020 Rajasthan, INDIA.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[40px] text-right">
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black leading-[24px]">
            © 2025 Neerja Modi School. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
