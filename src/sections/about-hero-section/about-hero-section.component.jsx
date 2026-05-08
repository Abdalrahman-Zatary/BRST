import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';

const AboutHeroSection = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".about-image-sticky",
      start: "top top",
      end: "300% top",
      pin: true,
      pinSpacing: false,
    });

    gsap.to(".about-image-bg", {
      filter: "blur(9px)",
      ease: "none",
      scrollTrigger: {
        trigger: ".about-hero-section",
        start: "15% top",
        end: "80% top",
        scrub: true,
      },
    });

    const setupBlock = (paraSelector, blockSelector) => {
      const split = SplitText.create(paraSelector, {
        type: "lines",
        linesClass: "paragraph-line",
      });

      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: blockSelector,
          start: "20% 90%",
          end: "80% 90%",
          scrub: 1.5,
        },
      });
      revealTl.fromTo(
        split.lines,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: 0.15,
          ease: "none",
        },
      );

      const hideTl = gsap.timeline({
        scrollTrigger: {
          trigger: blockSelector,
          start: "20% 10%",
          end: "80% 10%",
          scrub: 1.5,
        },
      });
      hideTl.fromTo(
        split.lines,
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 100% 0%)",
          stagger: 0.15,
          ease: "none",
        },
      );
    };

    setupBlock(".second-block p", ".second-block");
    setupBlock(".third-block p", ".third-block");
  });

  return (
    <section className="about-hero-section">
      <div className="about-image-sticky">
        <img
          src="https://i.ibb.co/60y33k5h/about.webp"
          alt="about-hero"
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

        <div className="third-block about-content-block z-30">
          <p className="about-content-text">
            Now, we're a bit older but still all about Juice. the most out of
            life. BRST takes us down memory lane, fueling our bodies with high
            vitamins, energy,and no sugar. Let's keep the good times rolling!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;