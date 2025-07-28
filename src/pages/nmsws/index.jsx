import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection'; 
import CourseSection from './CourseSection';
import GlanceSection from './GlanceSection';
import VisionBanner from './VisionBanner';
import Beyond from './Beyond';
import ChooseUs from './ChooseUs';
import FloatingSocialMenu from '../../components/common/FloatingSocialMenu';

const NMSWSPage = () => {
  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mt-[20pxpx] sm:mt-[25px] md:mt-[154px]">

        <section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
          <HeroSection />
        </section>
        <section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
          <AboutSection /> {/* 👈 Add this line */}
        </section>
        <section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
  <CourseSection />
  </section>
  <section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
  <GlanceSection />
</section>
<section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
  <VisionBanner />
</section>
<section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
  <Beyond />
</section>
        <section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
          <ChooseUs />
        </section>
      </main>
      <Footer />
      <FloatingSocialMenu />
    </div>
  );
};

export default NMSWSPage;
