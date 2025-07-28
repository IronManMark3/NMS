import React from 'react';

const leaders = [
  {
    name: 'Saurabh Modi',
    title: 'Founder-Chairperson',
    description: (
      <>
        <p>
          Today’s young minds are tomorrow’s change-makers, and the world beckons for exemplary human values along with academic knowledge. At NMS, our fundamental goal is to develop thought-leaders, innovators who drive the positive change with heart and passion.
        </p>
        <p>
          “We recognize the significance of a school in the formative years of a child, apart from their family – it’s the next most important aspect to them. This is where a child spends most of their time and it’s important, that we, as educators provide an optimum opportunity for every child to have a fortified foundation to thrive in their lives. We founded the school with the clear objective to nurture confident and responsible leaders – driven to embrace diversity, change and lifelong learning. The school curriculum, faculty members and programs reflect our purpose, making our school well-recognized globally”.
        </p>
        <p>
          We provide professional career counselling and guidance to secondary students enabling them to make informed higher education and career choices. In 2021, three students were admitted into Stanford, Cornell and Georgia Tech (USA) universities with full scholarship.
        </p>
      </>
    ),
      image: '/images/leadership1.png', // leave blank to use default image for now
  },
  {
    name: 'Mrs. Aarti Modi',
    title: 'Director',
    description: (
      <>
        <p>
          Today’s young minds are tomorrow’s change-makers, and the world beckons for exemplary human values along with academic knowledge. At NMS, our fundamental goal is to develop thought-leaders, innovators who drive the positive change with heart and passion.
        </p>
        <p>
          “We recognize the significance of a school in the formative years of a child, apart from their family – it’s the next most important aspect to them. This is where a child spends most of their time and it’s important, that we, as educators provide an optimum opportunity for every child to have a fortified foundation to thrive in their lives. We founded the school with the clear objective to nurture confident and responsible leaders – driven to embrace diversity, change and lifelong learning. The school curriculum, faculty members and programs reflect our purpose, making our school well-recognized globally”.
        </p>
        <p>
          We provide professional career counselling and guidance to secondary students enabling them to make informed higher education and career choices. In 2021, three students were admitted into Stanford, Cornell and Georgia Tech (USA) universities with full scholarship.
        </p>
      </>
    ),
    image: '/images/leadership2.png',
  },
  
  {
    name: 'Indu Dubey',
    title: 'Principal',
    description: (
      <>
        <p>
          The integrated academic sojourn of our students is designed to bring out the best in each of our students. Their success is what makes our us, our nation and the world successful.
        </p>
        <p>
          It makes us immensely proud to mention that we have achieved 100% results in both the board examinations and our students have topped the board in the last 3 years. It’s delightful to have some of our students moving on to study at IIT, CPMT, RPMT & National Law College examinations. As a step ahead towards our commitment towards quality education, we recently launched the autonomous Target-IIT programme in our school.
        </p>
        <p>
          Our school continues to broaden its horizons with an acclaimed visual and performing arts center by hosting ten National Art Camps within a span of four years. The camps have witnessed nationally acclaimed artists with the likes of Jatin Das, Jyoti Bhatt, Shanti Dave, P N Choyal, classical danseuse Mallika Sarabhai, theatre artist Nadira Zahir Babbar & puppeteer Anurupa Roy coming in and sharing their talent with our children.
        </p>
      </>
    ),
    image: '/images/leadership3.png',
  },
  
  {
    name: 'Ms. Arpita Gupta',
    title: 'Principal',
    description: (
      <>
        <p>
          Today’s young minds are tomorrow’s change-makers, and the world beckons for exemplary human values along with academic knowledge. At NMS, our fundamental goal is to develop thought-leaders, innovators who drive the positive change with heart and passion.
        </p>
        <p>
          “We recognize the significance of a school in the formative years of a child, apart from their family – it’s the next most important aspect to them. This is where a child spends most of their time and it’s important, that we, as educators provide an optimum opportunity for every child to have a fortified foundation to thrive in their lives. We founded the school with the clear objective to nurture confident and responsible leaders – driven to embrace diversity, change and lifelong learning. The school curriculum, faculty members and programs reflect our purpose, making our school well-recognized globally”.
        </p>
        <p>
          We provide professional career counselling and guidance to secondary students enabling them to make informed higher education and career choices. In 2021, three students were admitted into Stanford, Cornell and Georgia Tech (USA) universities with full scholarship.
        </p>
      </>
    ),
    image: '/images/leadership4.png',
  },
  
];

const Leadership = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="space-y-10 text-[15px] leading-[28px]">
      <h2 className="inline-block text-[22px] sm:text-[31px] text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae] font-semibold">
        Our Leadership
      </h2>

      {leaders.map((leader, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-start gap-5">
          {/* Profile Image */}
          <img
            src={leader.image || '/images/default-profile.png'}
            alt={`${leader.name} profile`}
            className="w-[200px] h-[200px] rounded-md object-cover bg-gray-300"
          />

          {/* Details */}
          <div className="space-y-2">
            <p className="text-[16px] font-semibold">{leader.name} - {leader.title}</p>
            <div className="font-[poppins] space-y-4">{leader.description}</div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Leadership;
