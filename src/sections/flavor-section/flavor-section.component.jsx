import FlavorSlider from '../../components/ui/flavor-slider/flavor-slider.component';
import FlavorTitle from '../../components/ui/flavor-title/flavor-title.component';
import FlavorBtn from '../../components/ui/flavor-btn/flavor-btn.component';

const FlavorSection = ({ title, subTitle, argement }) => {
  return (
    <section className="flavor-section pt-16">
      <div className="relative flex lg:flex-row flex-col w-full slider-elements-container">
        <div className="lg:w-[57%] lg:h-full lg:flex-none flex items-center justify-center mt-10">
          <FlavorTitle title={title} subTitle={subTitle} argement={argement} />
        </div>

        <div className="lg:h-full">
          <FlavorSlider />
        </div>
      </div>

      <FlavorBtn />
    </section>
  );
};

export default FlavorSection;