import {
  OriginsHeroSection,
  OriginsCarouselSection,
  FlavorSection,
  ShowcaseSection,
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
    </>
  );
};

export default Origins;
