import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CampusSection from './CampusSection';
import BoardingSection from './BoardingSection';
import PartnersSection from './PartnersSection';
import AcademicsSection from './AcademicsSection';
import SportsSection from './SportsSection';
import LeadershipSection from './LeadershipSection';
import CommunitySection from './CommunitySection';
import NewsSection from './NewsSection';
import FloatingSocialMenu from '../../components/common/FloatingSocialMenu';
import useInView from '../../components/ui/useInView';

const HomePage = () => {
  
  const [communityRef, communityVisible] = useInView(0.4);
  const [newsRef, newsVisible] = useInView(0.4);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      <Header />
      <main className="mt-[154px]">
        <section data-aos="fade-in" data-aos-duration="1200" data-aos-offset="100">
          <HeroSection />
        </section>
        <section data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
          <AboutSection />
        </section>
        <section data-aos="zoom-in" data-aos-delay="200" data-aos-offset="100">
          <CampusSection />
        </section>
        <section data-aos="fade-right" data-aos-delay="200" data-aos-offset="100">
          <BoardingSection />
        </section>
        <section data-aos="fade-left" data-aos-delay="100" data-aos-offset="100">
          <PartnersSection />
        </section>
        <section data-aos="zoom-in-up" data-aos-delay="100" data-aos-offset="150">
          <AcademicsSection />
        </section>
        <section data-aos="fade-up" data-aos-delay="100" data-aos-offset="150">
          <SportsSection />
        </section>
        <section data-aos="fade-up" data-aos-delay="150" data-aos-offset="250">
          <LeadershipSection />
        </section>

        {/* ✅ Correctly structured section — always rendered, fade content */}
        <section ref={communityRef} className="transition-opacity duration-700" style={{ opacity: communityVisible ? 1 : 0 }}>
          <CommunitySection />
        </section>

        <section ref={newsRef} className="transition-opacity duration-700" style={{ opacity: newsVisible ? 1 : 0 }}>
          <NewsSection />
        </section>
      </main>

      <FloatingSocialMenu />
      <Footer />
    </div>
  );
};

export default HomePage;
