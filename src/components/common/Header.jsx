import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAcademics = () => setIsAcademicsOpen(!isAcademicsOpen);
  const toggleCollege = () => setIsCollegeOpen(!isCollegeOpen);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 w-full h-[68px] bg-gradient-to-r from-[#c30015] to-[#0025ae] flex items-center px-3 z-[50]">
        <a
          href="tel:+911412785484"
          className="bg-white rounded px-4 py-3 flex items-center mr-auto hover:shadow-md transition"
        >
          <img src="/images/img_icon_frame.png" alt="Phone" className="w-[23px] h-[23px] mr-3" />
          <span className="text-[16px] text-black">0141-2785484</span>
        </a>

        <div className="group rounded px-4 py-3 bg-white hover:bg-gradient-to-r from-[#c30015] to-[#0025ae] transition-all duration-300">
          <span className="text-[13px] font-roboto bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
            Online Fee Pay
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-[68px] left-0 w-full h-[70px] sm:h-[86px] bg-white flex items-center justify-between px-4 sm:px-11 shadow-sm z-[50]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/img_image_1.png" alt="Logo" className="w-[40px] h-[50px] mr-2 sm:mr-4" />
          <h1 className="text-[20px] sm:text-[24px] text-black">Neerja Modi School</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 ml-auto font-[poppins] relative z-50">
          <Link to="/" className="text-[16px] text-black hover:text-[#c30015]">Home</Link>
          <Link to="/aboutus" className="text-[16px] text-black hover:text-[#c30015]">About Us</Link>
          <Link to="/admission" className="text-[16px] text-black hover:text-[#c30015]">Admission</Link>

          {/* Dropdown: Academics */}
          <div
            className="relative group"
            onMouseEnter={() => setIsAcademicsOpen(true)}
            onMouseLeave={() => {
              setIsAcademicsOpen(false);
              setIsCollegeOpen(false);
            }}
          >
            <span className="text-[16px] text-black hover:text-[#c30015] cursor-pointer flex items-center gap-1">
              Academics
            </span>
            {isAcademicsOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 space-y-2 w-[220px]">
                <div
                  className="relative group"
                  onMouseEnter={() => setIsCollegeOpen(true)}
                  onMouseLeave={() => setIsCollegeOpen(false)}
                >
                  <span className="text-[15px] text-black hover:text-[#c30015] cursor-pointer flex items-center gap-1">
                    College Admissions
                  </span>
                  {isCollegeOpen && (
                    <div className="absolute left-full top-0 bg-white shadow-md py-2 px-4 w-[200px]">
                      <Link to="/counseling" className="block text-[15px] text-black hover:text-[#c30015]">
                        Counseling
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link to="/activities" className="text-[16px] text-black hover:text-[#c30015]">Activities</Link>
          <Link to="/notices" className="text-[16px] text-black hover:text-[#c30015]">Notices</Link>
          <Link to="/alumni" className="text-[16px] text-black hover:text-[#c30015]">Alumni</Link>
          <Link to="/blogs" className="text-[16px] text-black hover:text-[#c30015]">Blogs</Link>
          <Link to="/contact" className="text-[16px] text-black hover:text-[#c30015]">Contact us</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={toggleMenu}>
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block w-full h-0.5 bg-black"></span>
            <span className="block w-full h-0.5 bg-black"></span>
            <span className="block w-full h-0.5 bg-black"></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[138px] left-0 w-full bg-white shadow-lg lg:hidden z-50 font-[poppins]">
            <nav className="flex flex-col p-4 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/admission" onClick={() => setIsMenuOpen(false)}>Admission</Link>

              {/* Toggle: Academics */}
              <button
                onClick={toggleAcademics}
                className="text-left w-full text-[16px] text-black hover:text-[#c30015] flex items-center justify-between"
              >
                Academics <span className="text-xs">{isAcademicsOpen ? '▲' : '▼'}</span>
              </button>
              {isAcademicsOpen && (
                <div className="ml-4">
                  {/* Toggle: College Admissions */}
                  <button
                    onClick={toggleCollege}
                    className="text-left w-full text-[15px] text-black hover:text-[#c30015] flex items-center justify-between"
                  >
                    College Admissions <span className="text-xs">{isCollegeOpen ? '▲' : '▶'}</span>
                  </button>
                  {isCollegeOpen && (
                    <div className="ml-4">
                      <Link to="/counseling" onClick={() => setIsMenuOpen(false)} className="block text-[15px] text-black hover:text-[#c30015]">
                        Counseling
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <Link to="/activities" onClick={() => setIsMenuOpen(false)}>Activities</Link>
              <Link to="/notices" onClick={() => setIsMenuOpen(false)}>Notices</Link>
              <Link to="/alumni" onClick={() => setIsMenuOpen(false)}>Alumni</Link>
              <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
