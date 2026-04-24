import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { flavorLists } from '../../../utils/constants/flavorData';

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  useGSAP(() => {
    const scrollWidth = sliderRef.current.scrollWidth;
    const scrollAmount = scrollWidth - window.innerWidth;

    if(!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: `+=${scrollAmount}px`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
  
      tl.to(".slider-elements-container", {
        x: `-${scrollAmount + 2000}px`,
        ease: "none",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: isTablet ? "top 20%" : "25% top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: isTablet ? 0 : -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: isTablet ? 0 : -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: isTablet ? 0 : -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });


  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 flex-none lg:w-[50vw] md:w-[85vw] w-[85vw] lg:h-[70vh] md:h-[80vh] sm:h-[80vw] h-[70vw] ${flavor.rotation}`}
          >
            <img
              src={`/src/assets/images/background-prodect/bg-${flavor.imageUrl}.svg`}
              alt=""
              className="absolute bottom-0 w-full"
            />

            <img
              src={`/src/assets/images/prodect/${flavor.imageUrl}.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/src/assets/images/fruit/${flavor.imageUrl}.png`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlavorSlider;