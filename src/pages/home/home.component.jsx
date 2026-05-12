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
  const flavorTitle = "We here 6";
  const flavorSubTitle = "freaking";

  return (
    <>
      <HeroSection />
      <MessageSection />
      <FlavorSection title={flavorTitle} subTitle={flavorSubTitle} argement={true} />
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
