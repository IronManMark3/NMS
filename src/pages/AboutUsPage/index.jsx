import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FloatingSocialMenu from '../../components/common/FloatingSocialMenu';

import AboutUsHero from './AboutUsHero';
import AboutContainer from './AboutContainer'; // Updated to use new dynamic layout

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="mt-[154px]">
        <section data-aos="fade-in" data-aos-duration="1200">
          <AboutUsHero />
        </section>
        <section>
          <AboutContainer />
        </section>
      </main>
      <FloatingSocialMenu />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
