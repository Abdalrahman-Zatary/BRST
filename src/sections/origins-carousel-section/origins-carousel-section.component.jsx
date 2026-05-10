import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

import Lenis from 'lenis';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';


const OriginsCarouselSection = () => {
  const lenisRef = useRef(null);
  const isMobile = useMediaQuery({ 
    query: "(max-width: 640px)" 
  });

  useGSAP(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    gsap.set(".second-box", 
      isMobile 
      ? { yPercent: 100 } 
      : { xPercent: 100 }
    );
    gsap.set(".third-box", { 
      xPercent: 100, 
      yPercent: 100 
    });
    gsap.set(".forth-box", { 
      xPercent: 100, 
      yPercent: 100 
    });

    const initTextSplit = () => {
      const textElements = document.querySelectorAll(
        `.third-box .box-content-wrapper h1, 
        .third-box .box-content-wrapper p, 
        .third-box .box-content-wrapper-2 h1, 
        .third-box .box-content-wrapper-2 p`,
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
      yPercent: 0 
    });
    gsap.set(".third-box .box-content-wrapper-2 .line span", { 
      yPercent: -125 
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
            duration: 0.75 
          });
          gsap.to(".second-box",
            isMobile
              ? { yPercent: 0, duration: 0.75 }
              : { xPercent: 0, duration: 0.75 },
          );
          gsap.to(".third-box",
            isMobile
              ? { xPercent: 0, duration: 0.75 }
              : { yPercent: 0, duration: 0.75 },
          );
          gsap.to(".box-img-1 img", { 
            scale: 1.25, 
            duration: 0.75 
          });
          gsap.to(".box-img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.75,
          });
          gsap.to(".box-img-2 img", { 
            scale: 1, 
            duration: 0.75 
          });
        }

        if (progress >= 0.5 && currentPhase === 1) {
          currentPhase = 2;
  
          gsap.to(".second-box", { 
            opacity: 0, 
            scale: 0.75, 
            duration: 0.75 
          });
          gsap.to(".third-box",
            isMobile
              ? { yPercent: 0, xPercent: 0, duration: 0.75 }
              : { xPercent: 0, duration: 0.75 },
          );
          gsap.to(".forth-box",
            isMobile
              ? { xPercent: 0, duration: 0.75 }
              : { yPercent: 0, duration: 0.75 },
          );
          gsap.to(".third-box .box-content-wrapper .line span", {
            yPercent: -125,
            duration: 0.75,
          });
          gsap.to(".third-box .box-content-wrapper-2 .line span", {
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
            duration: 0.75 
          });
          gsap.to(".second-box",
            isMobile
              ? { yPercent: 100, duration: 0.75 }
              : { xPercent: 100, duration: 0.75 },
          );
          gsap.to(".third-box",
            isMobile
              ? { xPercent: 100, duration: 0.75 }
              : { yPercent: 100, duration: 0.75 },
          );
          gsap.to(".box-img-1 img", { 
            scale: 1, 
            duration: 0.75 
          });
          gsap.to(".box-img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.75,
          });
          gsap.to(".box-img-2 img", { 
            scale: 1.25, 
            duration: 0.75 
          });
        }

        if (progress < 0.5 && currentPhase === 2) {
          currentPhase = 1;

          gsap.to(".second-box", { 
            opacity: 1, 
            scale: 1, 
            duration: 0.75 
          });
          gsap.to(".third-box",
            isMobile
              ? { yPercent: 100, duration: 0.75 }
              : { xPercent: 100, duration: 0.75 },
          );
          gsap.to(".forth-box",
            isMobile
              ? { xPercent: 100, duration: 0.75 }
              : { yPercent: 100, duration: 0.75 },
          );
          gsap.to(".third-box .box-content-wrapper .line span", {
            yPercent: 0,
            duration: 0.75,
            delay: 0.5,
          });
          gsap.to(".third-box .box-content-wrapper-2 .line span", {
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
    <section className="origins-carousel-section relative w-screen h-dvh bg-near-black text-warm-sunrise overflow-hidden">
      <div className="origins-carousel-container w-full h-full">
        <div className="box first-box absolute sm:w-1/2 w-full sm:h-full h-1/2 will-change-transform">
          <div className="box-content relative w-full h-full p-2">
            <div className="box-content-wrapper relative w-full h-full bg-deep-navy rounded-[3rem] overflow-hidden p-10 flex flex-box justify-between">
              <h1 className="w-3/5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="w-3/5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                in culpa repellendus, excepturi, molestiae natus.
              </p>
            </div>
          </div>
        </div>

        <div className="box second-box absolute sm:w-1/2 w-full sm:h-full h-1/2 will-change-transform">
          <div className="box-img box-img-1 w-full h-full p-2 absolute top-0 left-0">
            <div className="box-img-wrapper relative w-full h-full bg-deep-navy rounded-[3rem] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/1.webp"
                alt=""
              />
            </div>
          </div>
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            className="box-img box-img-2 w-full h-full p-2 absolute top-0 left-0"
          >
            <div className="box-img-wrapper relative w-full h-full bg-deep-navy rounded-[3rem] overflow-hidden">
              <img
                className="w-full h-full object-cover scale-125"
                src="/2.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="box third-box absolute sm:w-1/2 w-full sm:h-full h-1/2 will-change-transform p-2">
          <div className="box-content-wrapper relative w-full h-full bg-deep-navy rounded-[3rem] overflow-hidden p-10 flex flex-box justify-between">
            <h1 className="w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
              culpa repellendus.
            </p>
          </div>
          <div className="box-content-wrapper-2 absolute inset-2 rounded-[3rem] overflow-hidden p-10 flex flex-box justify-between">
            <h1 className="w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
              culpa repellendus.
            </p>
          </div>
        </div>

        <div className="box forth-box absolute sm:w-1/2 w-full sm:h-full h-1/2 will-change-transform">
          <div className="box-img relative w-full h-full p-2">
            <div className="box-img-wrapper relative w-full h-full bg-deep-navy rounded-[3rem] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/3.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginsCarouselSection;
