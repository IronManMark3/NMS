// src/pages/Counseling/CounselingSection6.jsx
import React from 'react';

const CounselingSection6 = () => {
  const sections = [
    {
      title: "Grade 9-10",
      image: "/images/image1.jpg",
      points: ["Career Exploration", "Academic Planning"],
    },
    {
      title: "Grade 11",
      image: "/images/image2.jpg",
      points: ["University Shortlisting", "Entrance Exam Planning"],
    },
    {
      title: "Grade 12",
      image: "/images/image3.jpg",
      points: ["Final Applications", "Essays", "Interview Prep"],
    },
  ];

return (
    <div className="w-full py-16 px-4 sm:px-8 bg-[#d9d9d9]/60 backdrop-blur-md">
        <div className="max-w-[1300px] mx-auto text-center flex flex-col justify-center items-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
                When It{" "}
                <span className="bg-gradient-to-r from-[#c30015] to-[#0025ae] text-transparent bg-clip-text">
                    Starts
                </span>
            </h2>

            {/* Subtitle */}
            <p className="font-[poppins] text-[16px] sm:text-[18px] max-w-[800px] mx-auto mb-12">
                Step-By-Step Guidance From Grade 9 To 12 To Help Students Make Informed Choices And Prepare For Their Future.
            </p>

            {/* Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                {sections.map((sec, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* Image */}
                        <div className="w-[400px] h-[250px] rounded-[20px] overflow-hidden shadow-md mb-6 transform transition-transform duration-300 hover:scale-105">
                            <img
                                src={sec.image}
                                alt={sec.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Grade Title */}
                        <h3 className="text-[20px] font-semibold mb-4">{sec.title}</h3>

                        {/* Pointer Boxes */}
                        {/* Desktop: default stacked vertically */}
                        <div className="hidden sm:flex flex-col gap-9">
                            {sec.points.map((text, idx) => (
                                <div
                                    key={idx}
                                    className="px-6 py-6 rounded-full bg-white text-[15px] font-medium shadow-sm flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
                                >
                                    <span className="font-[poppins] bg-gradient-to-r from-[#c30015] to-[#0025ae] text-transparent bg-clip-text">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Mobile: 2 in one line */}
                        <div className="flex sm:hidden flex-row justify-center gap-4 mt-2">
                            {sec.points.map((text, idx) => (
                                <div
                                    key={idx}
                                    className="w-[48%] px-4 py-4 rounded-full bg-white text-[13px] text-center font-medium shadow-sm flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
                                >
                                    <span className="font-[poppins] bg-gradient-to-r from-[#c30015] to-[#0025ae] text-transparent bg-clip-text">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default CounselingSection6;
