import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const VideoBenefitSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "vd-benefit-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
          markers: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%);",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-benefit-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="/src/assets/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
        />

        <div className="absolute-center md:scale-100 scale-200">
          <img
            src="/src/assets/icons/circle-text.svg"
            alt="video"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src="/src/assets/icons/play.svg"
              alt="play"
              className="size-[3vw] ml-[0.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBenefitSection;