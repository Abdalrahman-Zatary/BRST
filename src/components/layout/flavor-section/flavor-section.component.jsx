import FlavorSlider from '../../ui/flavor-slider/flavor-slider.component';
import FlavorTitle from '../../ui/flavor-title/flavor-title.component';

const FlavorSection = () => {
  return(
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full xl:mt-0 md:mt-20 mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
}
export default FlavorSection;