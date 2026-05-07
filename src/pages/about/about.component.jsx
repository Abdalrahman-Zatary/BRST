import { AboutHeroSection, AboutEthosSection } from '../../sections/sections';

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutEthosSection />
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

export default About;