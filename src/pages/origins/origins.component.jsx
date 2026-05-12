import {
  OriginsHeroSection,
  OriginsCarouselSection,
  FlavorSection,
  ShowcaseSection,
  TestimonialSection,
} from '../../sections/sections';

import { showcaseSectionData } from '../../utils/constants/showcaseSection.Data';

const Origins = () => {
  const { origins } = showcaseSectionData;

  return (
    <>
      <OriginsHeroSection />
      <OriginsCarouselSection />
      <FlavorSection
        title={"Explore our"}
        subTitle={"Bursts"}
        argement={false}
      />
      <ShowcaseSection {...origins} />
      <TestimonialSection withOffset={false} />
      <div className="bg-near-black">
        <img
          src="https://i.ibb.co/cm31PH9/location-dip.webp"
          alt="dip"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Origins;
