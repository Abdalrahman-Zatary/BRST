import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/all';

import {
  Navbar,
  HeroSection,
  MessageSection,
  FlavorSection,
  NutritionSection,
  BenefitSection,
} from '../../components/layout/layout';

const Home = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
          {/* <div className="h-dvh border border-red-500"></div> */}
        </div>
      </div>
    </main>
  );
};
export default Home;
