
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FloatingSocialMenu from '../../components/common/FloatingSocialMenu';
import CounselingSection1 from './CounselingSection1';
import CounselingSection2 from './CounselingSection2';
import CounselingSection3 from './CounselingSection3';
import CounselingSection4 from './CounselingSection4';
import CounselingSection5 from './CounselingSection5';
import CounselingSection6 from './CounselingSection6';  
import CounselingSection7 from './CounselingSection7';
import CounselingSection8 from './CounselingSection8';

const CounselingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main className="mt-[154px]">
        <section data-aos="fade-in" data-aos-duration="1000" data-aos-offset="100">
          <CounselingSection1 />
        </section>
        <section data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
          <CounselingSection2 />
        </section>
        <section data-aos="fade-up" data-aos-delay="150" data-aos-offset="100">
          <CounselingSection3 />
        </section>
        <section data-aos="fade-up" data-aos-delay="200" data-aos-offset="100">
          <CounselingSection4 />
        </section>
        <section data-aos="fade-up" data-aos-delay="250" data-aos-offset="100">
          <CounselingSection5 />
        </section>
        <section data-aos="fade-up" data-aos-delay="300" data-aos-offset="100">
          <CounselingSection6 />
        </section>
        <section data-aos="fade-up" data-aos-delay="350" data-aos-offset="100">
          <CounselingSection7 />
        </section>
        <section data-aos="fade-up" data-aos-delay="400" data-aos-offset="100">
          <CounselingSection8 />
        </section>
      </main>

      <FloatingSocialMenu />
      <Footer />
    </div>
  );
};

export default CounselingPage;

