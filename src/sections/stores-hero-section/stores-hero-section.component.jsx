import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const StoresHeroSection = () => {
  useGSAP(() => {
    const titleSpilt = SplitText.create(".stores-hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".stores-hero-text-scroll", {
      duration: 1.2,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      ease: "circ.out",
    }).from(
      titleSpilt.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.out",
      },
      "-=1",
    );
  });
  return (
    <section className="stores-hero-section">
      <div className="stores-hero-content">
        <div className="overflow-hidden">
          <h1 className="stores-hero-title">search for BRST</h1>
        </div>
        <div
          style={{ 
            clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" 
          }}
          className="stores-hero-text-scroll opacity-0"
        >
          <div className="stores-hero-subtitle lg:py-0 md:py-3 sm:py-0 py-2">
            <h1>near you</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresHeroSection;