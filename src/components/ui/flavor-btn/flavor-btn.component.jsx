import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const FlavorBtn = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 1023px)",
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
    <div className="cta-wrapper">
      <a className="cta-btn">Git it now</a>
    </div>
  );
};

export default FlavorBtn;