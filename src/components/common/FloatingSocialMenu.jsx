import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const FloatingSocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const icons = [
    { icon: "img_symbol.png", link: "https://www.facebook.com/nmsjaipur/" },
    { icon: "img_symbol_22x14.png", link: "https://www.instagram.com/nmsjaipur/?hl=en" },
    { icon: "img_symbol_21x14.png", link: "https://x.com/NMS_MCS" },
    { icon: "img_symbol_21x13.png", link: "https://www.linkedin.com/company/neerjamodi-school/?originalSubdomain=in" },
    { icon: "whatsapp_icon.png", link: "https://wa.me/918905551586" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          ref={popupRef}
          className="mb-3 flex flex-col items-end bg-white rounded-md shadow-lg p-3 space-y-3 animate-fadeIn"
        >
          {icons.map(({ icon, link }, i) => (
  <a
    key={i}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[40px] h-[40px] bg-[#f4f4f4] rounded-full flex items-center justify-center hover:scale-110 transition"
  >
    <img
  src={`/images/${icon}`}
  alt="Social"
  className={`object-contain ${
    i === 0 ? 'w-[16px] h-[20px]' : i === icons.length - 1 ? 'w-[30px] h-[30px]' : 'w-[20px] h-[20px]'
  }`}
/>

  </a>
))}

        </div>
      )}

      {/* Animated Icon Button */}
      <div className="relative w-[56px] h-[56px]">
        {/* Chat Bubble Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[56px] h-[56px] bg-gradient-to-r from-[#c30015] to-[#0025ae] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-10 relative"
          aria-label="Open Social Links"
        >
          <FontAwesomeIcon icon={faComment} className="text-white text-[20px]" />

        </button>
      </div>
    </div>
  );
};

export default FloatingSocialMenu;
