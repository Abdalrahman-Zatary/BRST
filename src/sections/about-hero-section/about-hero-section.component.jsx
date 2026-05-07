import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { SplitText } from 'gsap/all';

const AboutHeroSection = () => {
  useGSAP(() => {
    // const secondBlockSplit = SplitText.create(".second-block p", {
    //   type: "lines",
    //   linesClass: "paragraph-line",
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-image-sticky",
        start: "top top",
        end: "300% top",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(".about-image-bg", {
      filter: "blur(5px)",
      ease: "power2.inOut",
    });

    // gsap.from(secondBlockSplit.lines, {
    //   yPercent: 110,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".second-block p",
    //     start: "top center",
    //     end: "bottom center",
    //     markers: true,
    //     scrub: 1.5,
    //   },
    // });
  });

  return (
    <section className="about-hero-section">
      <div className="about-image-sticky">
        <img
          src="https://i.ibb.co/pBBmFbhW/menubar-4.webp"
          className="about-image-bg"
        />
      </div>
      <div className="about-content-wrapper">
        <div className="about-content-block z-50">
          <h1 className="first-block general-title text-warm-sunrise mt-[30%]">
            ABOUT BRST
          </h1>
        </div>

        <div className="second-block about-content-block z-40">
          <p className="about-content-text">
            Back in the day, you'd catch us at the skatepark, football field, or
            bombing down slopes—we just couldn't sit still. And one thing was
            guaranteed: we were chugging Mango Juice.
          </p>
        </div>

        <div className="therd-block about-content-block z-30">
          <p className="about-content-text">
            "Now, we're a bit older but still all about Juice. the most out of
            life. BRST takes us down memory lane, fueling our bodies with high
            vitamins, energy,and no sugar. Let's keep the good times rolling!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;