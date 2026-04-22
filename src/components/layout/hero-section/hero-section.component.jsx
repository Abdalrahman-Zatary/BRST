import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const HeroSection = () => {
  useGSAP(() => {
    const titleSpilt = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      yPercent: -50,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1.2,
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

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "1% top",
          end: "bottom top",
          scrub: true,
        },
      });

      heroTl.to(".hero-container", {
        rotate: 7,
        scale: 0.9,
        yPercent: 30,
        ease: "power1.inOut",
      });
  });

  return (
    <section className="bg-deep-navy">
      <div className="hero-container">
        <img
          src="/src/assets/images/static-img.png"
          alt="hero-image"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-center md:scale-150 scale-100"
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Vitamins + Energy</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with BRST: Shatter boredom and <br />
            embrace your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <a>Chug a SPYLT</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;