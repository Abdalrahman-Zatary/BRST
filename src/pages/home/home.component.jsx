import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/all';

import {
  Navbar,
  HeroSection,
  MessageSection,
  FlavorSection,
} from '../../components/layout/layout';
import NutritionSection from '../../components/layout/nutrition-section/nutrition-section.component';

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
          {/* <div className="h-dvh border border-red-500"></div> */}
        </div>
      </div>
    </main>
  );
};
export default Home;
