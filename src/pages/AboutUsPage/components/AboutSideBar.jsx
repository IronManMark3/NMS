import React from 'react';

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

const AboutSidebar = ({ active, onSelect, sticky, bottomLock }) => {
    const positionClass =
    sticky && !bottomLock
      ? 'fixed top-[174px] left-[81px] mx-[10px]'
      : bottomLock
      ? 'absolute bottom-0 left-0' // back to left-0
      : 'relative';
  

  return (
    <>
      {/* Sidebar container that sets up absolute positioning context */}
      <div className="hidden lg:block w-[250px] shrink-0 relative ml-[0px]">
        <div className="relative min-h-[calc(100vh-150px)]">
          <aside
            className={`flex flex-col gap-3 w-[250px] transition-all duration-300 ${positionClass}`}
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onSelect(id)}
                className={`text-left px-4 py-3 rounded-md border border-gray-300 text-[15px] transition-all duration-300 ${
                  active === id
                    ? 'bg-gradient-secondary text-white'
                    : 'hover:bg-gradient-secondary hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </aside>
        </div>
      </div>
    </>
  );
};

export default AboutSidebar;
