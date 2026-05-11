import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

import Lenis from 'lenis';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

const OriginsCarouselSection = () => {
  const lenisRef = useRef(null);
  const isMobile = useMediaQuery({ 
    query: "(max-width: 640px)" 
  });

  useGSAP(() => {
    const titleCarouselSpilt = SplitText.create(".origins-carousel-title", {
      type: "chars",
    });

    const titleCarouselTl = gsap.timeline({
      paused: true,
    });

    titleCarouselTl
      .to(".origins-carousel-text-scroll", {
        duration: 1.2,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      })
      .from(
        titleCarouselSpilt.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power1.out",
        },
        "-=0.5",
      );
    replayTimelineOnEnter(titleCarouselTl, ".origins-carousel-section", {
      start: "top top",
      end: "125% top",
    });

    const lenis = new Lenis();
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    gsap.set(".second-box", isMobile ? { yPercent: 100 } : { xPercent: 100 });
    gsap.set(".third-box", {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(".forth-box", {
      xPercent: 100,
      yPercent: 100,
    });

    const initTextSplit = () => {
      const textElements = document.querySelectorAll(
        `.third-box .box-content-wrapper h1, 
        .third-box .box-content-wrapper h3, 
        .third-box .box-content-wrapper p,
        .third-box .second-box-content-wrapper h1,
        .third-box .second-box-content-wrapper h3, 
        .third-box .second-box-content-wrapper p`,
      );

      textElements.forEach((element) => {
        const split = new SplitText(element, {
          type: "lines",
          linesClass: "line",
        });
        split.lines.forEach((line) => {
          line.innerHTML = `<span>${line.textContent}</span>`;
        });
      });
    };

    initTextSplit();

    gsap.set(".third-box .box-content-wrapper .line span", {
      yPercent: 0,
    });
    gsap.set(".third-box .second-box-content-wrapper .line span", {
      yPercent: -125,
    });

    let currentPhase = 0;

    ScrollTrigger.create({
      trigger: ".origins-carousel-section",
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress >= 0.25 && currentPhase === 0) {
          currentPhase = 1;

          gsap.to(".first-box", {
            opacity: 0,
            scale: 0.75,
            duration: 0.75,
          });
          gsap.to(
            ".second-box",
            isMobile
              ? { yPercent: 0, duration: 0.75 }
              : { xPercent: 0, duration: 0.75 },
          );
          gsap.to(
            ".third-box",
            isMobile
              ? { xPercent: 0, duration: 0.75 }
              : { yPercent: 0, duration: 0.75 },
          );
          gsap.to(".box-img-1 img", {
            scale: 1.25,
            duration: 0.75,
          });
          gsap.to(".box-img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.75,
          });
          gsap.to(".box-img-2 img", {
            scale: 1,
            duration: 0.75,
          });
        }

        if (progress >= 0.5 && currentPhase === 1) {
          currentPhase = 2;

          gsap.to(".second-box", {
            opacity: 0,
            scale: 0.75,
            duration: 0.75,
          });
          gsap.to(
            ".third-box",
            isMobile
              ? { yPercent: 0, xPercent: 0, duration: 0.75 }
              : { xPercent: 0, duration: 0.75 },
          );
          gsap.to(
            ".forth-box",
            isMobile
              ? { xPercent: 0, duration: 0.75 }
              : { yPercent: 0, duration: 0.75 },
          );
          gsap.to(".third-box .box-content-wrapper .line span", {
            yPercent: -125,
            duration: 0.75,
          });
          gsap.to(".third-box .second-box-content-wrapper .line span", {
            yPercent: 0,
            duration: 0.75,
            delay: 0.5,
          });
        }

        if (progress < 0.25 && currentPhase >= 1) {
          currentPhase = 0;

          gsap.to(".first-box", {
            opacity: 1,
            scale: 1,
            duration: 0.75,
          });
          gsap.to(
            ".second-box",
            isMobile
              ? { yPercent: 100, duration: 0.75 }
              : { xPercent: 100, duration: 0.75 },
          );
          gsap.to(
            ".third-box",
            isMobile
              ? { xPercent: 100, duration: 0.75 }
              : { yPercent: 100, duration: 0.75 },
          );
          gsap.to(".box-img-1 img", {
            scale: 1,
            duration: 0.75,
          });
          gsap.to(".box-img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.75,
          });
          gsap.to(".box-img-2 img", {
            scale: 1.25,
            duration: 0.75,
          });
        }

        if (progress < 0.5 && currentPhase === 2) {
          currentPhase = 1;

          gsap.to(".second-box", {
            opacity: 1,
            scale: 1,
            duration: 0.75,
          });
          gsap.to(
            ".third-box",
            isMobile
              ? { yPercent: 100, duration: 0.75 }
              : { xPercent: 100, duration: 0.75 },
          );
          gsap.to(
            ".forth-box",
            isMobile
              ? { xPercent: 100, duration: 0.75 }
              : { yPercent: 100, duration: 0.75 },
          );
          gsap.to(".third-box .box-content-wrapper .line span", {
            yPercent: 0,
            duration: 0.75,
            delay: 0.5,
          });
          gsap.to(".third-box .second-box-content-wrapper .line span", {
            yPercent: -125,
            duration: 0.75,
          });
        }
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });

  return (
    <section className="origins-carousel-section">
      <div className="w-full h-full">
        <div className="box first-box">
          <div className="box-content">
            <div className="box-content-wrapper">
              <div className="origins-carousel-first-content">
                <div className="overflow-hidden">
                  <h1 className="origins-carousel-title">Founder</h1>
                </div>
                <div
                  style={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                  }}
                  className="origins-carousel-text-scroll opacity-0"
                >
                  <div className="carousel-subtitle lg:py-0 md:py-3 sm:py-0 py-2">
                    <h1 className="text-deep-navy!">CEO Engineer</h1>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <h3 className="w-4/5">Omar Rashed</h3>
                <p className="md:w-4/5 w-full">
                  Omar built BRST from a single conviction: people deserve
                  better fuel. With a background in business strategy and a
                  relentless drive for impact, he turned a kitchen experiment
                  into a brand with a pulse. He doesn't chase trends — he sets
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="box second-box">
          <div className="box-img box-img-1">
            <div className="box-img-wrapper">
              <img
                className="w-full h-full object-cover object-top"
                src="https://i.ibb.co/DDGnvvfQ/person-1.webp"
                alt="omar-rashed"
              />
            </div>
          </div>
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            className="box-img box-img-2"
          >
            <div className="box-img-wrapper">
              <img
                className="w-full h-full object-cover object-top"
                src="https://i.ibb.co/svjL56zW/person-2.webp"
                alt="sana-malik"
              />
            </div>
          </div>
        </div>

        <div className="box third-box">
          <div className="box-content-wrapper">
            <div>
              <h1 className="2xl:text-[8.5rem] md:text-[6.5rem] sm:text-[5.3rem] text-[2.75rem] font-bold uppercase leading-[9vw] tracking-[-0.35vw]">
                Founder
              </h1>
              <div className="w-fit font-bold bg-golden-mango lg:-mt-5 -mt-3">
                <h1 className="text-deep-navy! z-20">CPO Manager</h1>
              </div>
            </div>
            <div className="w-full">
              <h3 className="w-4/5">Sana Malik</h3>
              <p className="md:w-4/5 w-full">
                Sana is the science behind every sip. A food technology graduate
                obsessed with the perfect balance of nutrients and flavor, she's
                the reason BRST hits different every time. She believes great
                products aren't created — they're discovered. "The formula is
                never finished."
              </p>
            </div>
          </div>
          <div className="second-box-content-wrapper">
            <div>
              <h1 className="2xl:text-[8.5rem] md:text-[6.5rem] sm:text-[5.3rem] text-[2.75rem] font-bold uppercase leading-[9vw] tracking-[-0.35vw]">
                Founder
              </h1>
              <div className="w-fit font-bold bg-golden-mango lg:-mt-5 -mt-3">
                <h1 className="text-deep-navy!">CMO Manager</h1>
              </div>
            </div>
            <div className="w-full">
              <h3 className="w-4/5">Carter</h3>
              <p className="md:w-4/5 w-full">
                Dex doesn't sell products — he sells energy. A brand strategist
                and creative director who gave BRST its attitude, its look, and
                its voice. If you felt the brand before you tried the drink,
                that's Dex. "Brands aren't built in boardrooms. They're built"
              </p>
            </div>
          </div>
        </div>

        <div className="box forth-box">
          <div className="relative w-full h-full">
            <div className="box-img-wrapper">
              <img
                className="w-full h-full object-top object-cover"
                src="https://i.ibb.co/2143nVF8/person-3.webp"
                alt="carter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginsCarouselSection;
