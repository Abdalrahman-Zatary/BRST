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
          trigger: ".vd-benefit-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
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
          src="https://res.cloudinary.com/dxd3m1fz3/video/upload/v1777475117/benefit-section_os67dt.mp4"
          playsInline
          muted
          loop
          autoPlay
        />

        <div className="absolute-center md:scale-100 scale-200">
          <img
            src="https://i.ibb.co/sJ9MTk3s/circle-text.webp"
            alt="video"
            className="spin-circle size-[15vw]"
          />
          <div className="play-btn">
            <img
              src="https://i.ibb.co/Yqh6BNL/play.webp"
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
