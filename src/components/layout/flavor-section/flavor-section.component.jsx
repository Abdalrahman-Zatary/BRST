import FlavorSlider from '../../ui/flavor-slider/flavor-slider.component';
import FlavorTitle from '../../ui/flavor-title/flavor-title.component';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const FlavorSection = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 1023px)"
  });

  useGSAP(() => {
    if (isTablet) return;

    gsap.fromTo(
      ".cta-wrapper",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play reverse play reverse",
        },
      },
    );
    
    ScrollTrigger.create({
      trigger: "flavor-section",
      start: "top top",
      end: "bottom bottom",

      onEnter: () => {
        gsap.set(".cta-wrapper", {
          position: "fixed",
          bottom: "0",
          zIndex: "999",
        });
      },

      onLeave: () => {
        gsap.set(".cta-wrapper", {
          position: "relative",
          bottom: "0",
          left: "0",
        });
      },
      onEnterBack: () => {
        gsap.set(".cta-wrapper", {
          position: "fixed",
          bottom: "0",
        });
      },
      onLeaveBack: () => {
        gsap.set(".cta-wrapper", {
          position: "relative",
          bottom: "0",
          left: "0",
        });
      },
    });
  }, [isTablet]);

  return (
    <section className="flavor-section pt-16">
      {/* lg:h-dvh */}
      <div className="relative flex lg:flex-row flex-col w-full slider-elements-container">
        {/* lg:w-[57%] lg:h-full lg:flex-none flex items-center justify-center lg:py-0 py-16 */}
        <div className="lg:w-[57%] lg:h-full lg:flex-none flex items-center justify-center mt-10">
          <FlavorTitle />
        </div>
        {/* overflow-hidden */}
        <div className="lg:h-full">
          <FlavorSlider />
        </div>
      </div>
      {/* absolute left-0 w-full bg-transparent */}
      <div className="cta-wrapper absolute h-32 w-full flex justify-center items-center lg:bg-transparent bg-warm-sunrise">
        <a className="cta-btn text-deep-navy bg-mango-burst uppercase font-bold text-sm rounded-full md:p-3.5 p-3 md:px-12 px-10 cursor-pointer">
          Chug a SPYLT
        </a>
      </div>
    </section>
  );
}
export default FlavorSection;