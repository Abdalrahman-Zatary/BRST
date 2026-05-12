import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

const ShowcaseSection = ({
  bgImageUrl,
  title,
  subtitleImageUrl,
  description,
  buttonText,
  buttonLayout,
  imgdepth,
}) => {
  const navigate = useNavigate();

  useGSAP(() => {
    const titleSplit = SplitText.create(".showcase-title", {
      type: "chars",
    });

    const titleTl = gsap.timeline({
      paused: true,
    });
    const subtitleTl = gsap.timeline({
      paused: true,
    });
    const contentTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".showcase-section",
        start: "35% center",
        end: "75% center",
        scrub: 1.5,
      },
    });

    titleTl.from(titleSplit.chars, {
      yPercent: 100,
      stagger: 0.02,
      ease: "power2.out",
    });

    subtitleTl.to(".showcase-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      ease: "power1.inOut",
    });

    contentTl
      .from(".showcase-content p", {
        opacity: 0,
        y: 30,
        ease: "power1.inOut",
      })
      .from(
        ".btn-showcase",
        {
          opacity: 0,
          y: 40,
          ease: "power2.inOut",
        },
        ">",
      );

    replayTimelineOnEnter(titleTl, ".showcase-section", {
      start: "20% center",
    });
    replayTimelineOnEnter(subtitleTl, ".showcase-section", {
      start: "35% center",
    });
  });

  return (
    <section className="showcase-section">
      {imgdepth && (
        <img
          src="https://i.ibb.co/cm31PH9/location-dip.webp"
          alt="dip"
          className="w-full object-cover"
        />
      )}
      <div className="showcase-container">
        <img
          src={bgImageUrl}
          alt={title}
          style={{
            filter: "brightness(0.65) ",
          }}
          className="md:relative absolute inset-0 w-full h-full object-cover"
        />
        <div className="showcase-content">
          <div className="general-title flex flex-col items-center">
            <div className="overflow-hidden lg:py-0 py-3">
              <h1 className="showcase-title text-warm-sunrise">{title}</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              className="showcase-text-scroll -rotate-4 -mt-1 text-nowrap opacity-0"
            >
              <div className="w-[28vw] max-w-none">
                <img src={subtitleImageUrl} alt={title} className="w-full " />
              </div>
            </div>
          </div>
          <div className="md:max-w-75 max-w-xs">
            <p className="text-xs text-warm-sunrise font-paragraph">
              {description}
            </p>
          </div>
          <div
            onClick={() => navigate("/contact")}
            className={`btn-showcase ${buttonLayout}`}
          >
            <a>{buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;