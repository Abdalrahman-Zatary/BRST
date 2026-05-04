import {
  ShopHeroSection,
  FlavorShelfSection,
  TestimonialSection,
  LocationSection,
} from '../../sections/sections';

const Shop = () => {
  return (
    <>
      <ShopHeroSection />
      <FlavorShelfSection />
      <TestimonialSection withOffset={false} />
      <LocationSection />
    </>
  );
};

export default Shop;
