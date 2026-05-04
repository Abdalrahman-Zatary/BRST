import {
  ShopHeroSection,
  FlavorShelfSection,
  TestimonialSection,
} from '../../sections/sections';

const Shop = () => {
  return (
    <>
      <ShopHeroSection />
      <FlavorShelfSection />
      <TestimonialSection withOffset={false} />
    </>
  );
};

export default Shop;
