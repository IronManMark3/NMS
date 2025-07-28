import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FloatingSocialMenu from '../../components/common/FloatingSocialMenu';

// Boarding Page Sections
import BoardingHero from './BoardingHero';
import BoarderGrowthSection from './BoarderGrowthSection';
import BoardingFacilities from './BoardingFacilities';
import BoardingMealsCarousel from './BoardingMealsCarousel';
import AcademicSupport from './AcademicSupport';
import BoardingWellness from './BoardingWellness';
import BeyondAcademics from './BeyondAcademics';
import BoardingSafetySection from './BoardingSafetySection';
import BoardingAchievementsCarousel from './BoardingAchievementsCarousel';


const BoardingPage = () => {
    

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="mt-[154px]">
        <section data-aos="fade-in" data-aos-duration="1200">
          <BoardingHero />
        </section>
        <section data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
          <BoarderGrowthSection />
        </section>
        <section>
          <BoardingFacilities />
        </section>
        <section data-aos="fade-left" data-aos-delay="200" data-aos-offset="120">
          <BoardingMealsCarousel />
        </section>
        <section data-aos="fade-right" data-aos-delay="250" data-aos-offset="120">
          <AcademicSupport />
        </section>
        <section data-aos="zoom-in" data-aos-delay="300" data-aos-offset="100">
  <BoardingWellness />
</section>

        <section data-aos="fade-up" data-aos-delay="350" data-aos-offset="100">
          <BeyondAcademics />
        </section>
        <section data-aos="fade-up" data-aos-delay="400" data-aos-offset="100">
  <BoardingSafetySection />
</section>
<section data-aos="zoom-in-up" data-aos-delay="450" data-aos-offset="100">
  <BoardingAchievementsCarousel />
</section>

      </main>
      <FloatingSocialMenu />
      <Footer />
    </div>
  );
};

export default BoardingPage;
