import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const VideoBenefitSection = ({ videoUrl, Rotate }) => {
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
          onUpdate: (self) => {
            const progress = self.progress;
            const intensity = Math.sin(progress * Math.PI);

            const y = Math.sin(progress * 60) * 10 * intensity;
            const x = gsap.utils.random(-3, 3) * intensity;
            gsap.set(".video-box", {
              x,
              y,
              rotation: !Rotate && x * 0.2,
            });
          },
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      })
      if (Rotate) {
        tl.to(".video-box", {
          rotate: 7,
          scale: 0.9,
          yPercent: 30,
          ease: "power1.inOut",
        });
      }
    }
  });

  return (
    <section className="vd-benefit-section md:h-[110vh] h-dvh overflow-hidden lg:-translate-y-[15%]! md:-translate-y-[33%]! translate-y-0! lg:mt-0 md:mt-48 mt-10">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src={videoUrl}
          playsInline
          muted
          loop
          autoPlay
          className="size-full absolute inset-0 object-cover"
        />

        <div className="absolute-center md:scale-100 scale-200">
          <img
            src="https://i.ibb.co/sJ9MTk3s/circle-text.webp"
            alt="video"
            className="spin-circle size-[15vw]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
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
