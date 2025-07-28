import React, { useState, useEffect, useRef } from 'react';
import AboutSidebar from './components/AboutSidebar';
import Vision from './components/Vision';
import History from './components/History';
import Location from './components/Location';
import Infrastructure from './components/Infrastructure';
import Careers from './components/Careers';
import Community from './components/Community';
import Leadership from './components/Leadership';
import SchoolCalendar from './components/SchoolCalender';
import Newsletter from './components/Newsletter';
import SchoolProfile from './components/SchoolProfile';

const sections = [
  { id: 'history', label: 'Our History' },
  { id: 'vision', label: 'Our Vision and Mission' },
  { id: 'location', label: 'Location' },
  { id: 'infra', label: 'Infrastructure' },
  { id: 'profile', label: 'School Profile' },
  { id: 'careers', label: 'Careers' },
  { id: 'community', label: 'Community Service' },
  { id: 'leadership', label: 'Our Leadership' },
  { id: 'calendar', label: 'School Calendar' },
  { id: 'newsletter', label: 'Newsletter' },
];

const sectionComponents = {
  vision: <Vision />,
  history: <History />,
  location: <Location />,
  infra: <Infrastructure />,
  careers: <Careers />,
  community: <Community />,
  leadership: <Leadership />,
  calendar: <SchoolCalendar />,
  newsletter: <Newsletter />,
  profile: <SchoolProfile />,
};

const AboutContainer = () => {
  const [activeSection, setActiveSection] = useState('history');
  const [isSticky, setIsSticky] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const sentinelTopRef = useRef(null);
  const sentinelBottomRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = sentinelTopRef.current.getBoundingClientRect().top;
      const bottom = sentinelBottomRef.current.getBoundingClientRect().bottom;

      setIsSticky(top <= 154);
      setAtBottom(bottom <= window.innerHeight + 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full pt-[50px] pb-[80px] bg-white text-black">
      <div ref={sentinelTopRef} className="absolute top-0 h-[1px] w-full" />
      <div ref={sentinelBottomRef} className="absolute bottom-0 h-[1px] w-full" />

      <div className="px-4 sm:px-6 lg:px-[81px]">
        <div className="flex gap-8 items-start relative">

          <AboutSidebar
            active={activeSection}
            onSelect={setActiveSection}
            sticky={isSticky}
            bottomLock={atBottom}
          />

          {/* Right content area (no longer needs margin-left) */}
          <div className="flex-1 pr-4 scroll-smooth animate-fadeIn min-h-[700px]">
            <div className="lg:hidden grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`text-[12px] sm:text-[13px] py-2 px-2 rounded-md border border-gray-300 text-center transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-gradient-secondary text-white'
                      : 'hover:bg-gradient-secondary hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {sectionComponents[activeSection] || <div>Section not found.</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
