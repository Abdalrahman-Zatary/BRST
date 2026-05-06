import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const ProgramsHeroSection = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const titleSpilt = SplitText.create(".programs-hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".programs-hero-content", {
      opacity: 1,
      yPercent: -50,
      ease: "power1.inOut",
    })
      .to(
        ".programs-hero-text-scroll",
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
  });


  return (
    <section className="bg-deep-navy">
      <div className="programs-hero-container">
        <video
          src="https://res.cloudinary.com/dxd3m1fz3/video/upload/v1778103497/programs_ujrk9k.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="programs-hero-content">
          <div className="overflow-hidden">
            <h1 className="programs-hero-title">Join the</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            }}
            className="programs-hero-text-scroll opacity-0"
          >
            <div className="hero-subtitle lg:py-0 md:py-3 sm:py-0 py-2">
              <h1>Programs</h1>
            </div>
          </div>
        </div>
        <div className="programs-hero-wrapper">
          <div className="flex flex-col items-center gap-2">
            <div onClick={() => navigate("/contact")} className="programs-hero-button">
              <a>Let's Go!</a>
            </div>
            <p className="text-xs font-paragraph text-warm-sunrise">
              It’s easy, peasy milk squeezy
            </p>
          </div>
          <div className="programs-hero-sercol-text">
            <img
              src="https://i.ibb.co/sJ9MTk3s/circle-text.webp"
              alt="video"
              className="spin-circle lg:size-[6vw] sm:size-[12vw] size-[23vw]"
            />
            <div className="programs-play-btn">
              <img
                src="https://i.ibb.co/Yqh6BNL/play.webp"
                alt="play"
                className="size-3.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHeroSection;