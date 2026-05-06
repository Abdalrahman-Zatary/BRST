import {
  ProgramsHeroSection,
  ProgramsMessageSection,
  ProgramsEthosSection,
  TestimonialSection,
} from '../../sections/sections';

const Programs = () => {
  return (
    <>
      <ProgramsHeroSection />
      <ProgramsMessageSection />
      <div>
        <ProgramsEthosSection />
        <TestimonialSection withOffset={true} />
      </div>
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

export default Programs;
