import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';

const OriginsHeroSection = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".origins-image-sticky",
      start: "top top",
      end: "200% top",
      pin: true,
      pinSpacing: false,
    });

    gsap.to(".origins-image-bg", {
      filter: "blur(9px)",
      ease: "none",
      scrollTrigger: {
        trigger: ".origins-hero-section",
        start: "5% top",
        end: "90% top",
        scrub: true,
      },
    });

    const titleSpilt = SplitText.create(".origins-hero-title", {
      type: "chars",
    });

    const titlesTl = gsap.timeline({
      delay: 1,
    });

    titlesTl
      .to(
        ".origins-hero-text-scroll",
        {
          duration: 1.2,
          opacity: 1,
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          ease: "circ.out",
        },
        "-=0.3",
      )
      .from(
        titleSpilt.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power1.out",
        },
        "-=0.5",
      );

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
  });


  return (
    <section className="origins-hero-section">
      <div className="origins-image-sticky">
        <img
          src="https://i.ibb.co/KxFPt08L/menubar-3.webp"
          alt="origins-hero"
          className="origins-image-bg"
        />
      </div>
      <div className="origins-content-wrapper">
        <div className="origins-content-block z-50">
          <div className="origins-hero-content">
            <div className="overflow-hidden">
              <h1 className="origins-hero-title">About BRST</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="origins-hero-text-scroll opacity-0"
            >
              <div className="hero-subtitle lg:py-0 md:py-3 sm:py-0 py-2">
                <h1>Origins</h1>
              </div>
            </div>
          </div>
          <div className="origins-hero-sercel-text">
            <img
              src="https://i.ibb.co/sJ9MTk3s/circle-text.webp"
              alt="video"
              className="spin-circle lg:size-[6vw] sm:size-[12vw] size-[23vw]"
            />
            <div className="origins-play-btn">
              <img
                src="https://i.ibb.co/Yqh6BNL/play.webp"
                alt="play"
                className="size-3.5"
              />
            </div>
          </div>
        </div>

        <div className="second-block origins-content-block z-40">
          <p className="origins-content-text">
            BRST Originals live it bold, keeping it fresh and bursting with
            energy. Whether it's early grinders, wellness warriors, adventure
            seekers or pure-life rebels, we're all about fueling our best
            selves!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OriginsHeroSection;