import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AdmissionHero from './AdmissionHero';
import DetailsSection from './DetailsSection';
import BannerSection from './BannerSection';
import FloatingSocialMenu from '../../components/common/FloatingSocialMenu';

const Admission = () => {
  return (
    <>
      <Header />
      <main className="pt-[138px] w-full bg-white text-black">
        <AdmissionHero />
        <DetailsSection />
        <BannerSection />
      </main>
        <FloatingSocialMenu />
      <Footer />
    </>
  );
};

export default Admission;
