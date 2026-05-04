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
        <TestimonialSection withOffset={true} />
      </div>
      <LocationSection />
    </>
  );
};
export default Home;
