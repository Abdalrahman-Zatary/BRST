import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const LOCATION = {
  lat: 52.3702,
  lng: 4.8952,
  zoom: 15,
  label: "BRST Amsterdam HQ",
  address : "Amsterdam, Netherlands",
}

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
            clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          }}
          className="stores-hero-text-scroll opacity-0"
        >
          <div className="stores-hero-subtitle lg:py-0 md:py-3 sm:py-0 py-0 sm:pt-0 pt-3">
            <h1>near you</h1>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center md::pt-[30vw] sm:pt-[45vw] pt-[60vw] h-screen">
        <iframe
          className="w-[80%] h-screen border-4 rounded-xl border-sunrise-light"
          src="https://maps.google.com/maps?q=52.3702,4.8952&z=15&output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default StoresHeroSection;