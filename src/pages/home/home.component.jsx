import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/all';

import {
  Navbar,
  HeroSection,
  MessageSection,
  FlavorSection,
  NutritionSection,
  BenefitSection,
  TestimonialSection,
  LocationSection,
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
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <LocationSection />
        </div>
      </div>
    </main>
  );
};
export default Home;
