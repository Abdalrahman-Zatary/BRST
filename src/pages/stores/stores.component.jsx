import {
  StoresHeroSection,
  StoresListPreviewSection,
  ShowcaseSection
} from '../../sections/sections';
import { showcaseSectionData } from '../../utils/constants/showcaseSection.Data';

const Stores = () => {
  const { Promo } = showcaseSectionData;

  return (
    <>
      <StoresHeroSection />
      <StoresListPreviewSection />
      <ShowcaseSection {...Promo} />
    </>
  );
};

export default Stores;
