import { OriginsHeroSection, OriginsCarouselSection, FlavorSection } from '../../sections/sections';

const Origins = () => {
  return (
    <>
      <OriginsHeroSection />
      <OriginsCarouselSection />
      <FlavorSection title={"Explore our"} subTitle={"Bursts"} argement={false} />
    </>
  );
};

export default Origins;