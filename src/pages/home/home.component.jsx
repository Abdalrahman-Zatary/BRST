import {
  HeroSection,
  MessageSection,
  FlavorSection,
  NutritionSection,
  BenefitSection,
  TestimonialSection,
  LocationSection,
} from '../../sections/sections';

const Home = () => {

  return (
    <>
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <NutritionSection />
      <div>
        <BenefitSection />
        <TestimonialSection />
      </div>
      <LocationSection />
    </>
  );
};
export default Home;
