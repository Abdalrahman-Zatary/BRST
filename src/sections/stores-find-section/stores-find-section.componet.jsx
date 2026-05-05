import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

const StoresFindSection = () => {
    const navigate = useNavigate();

    useGSAP(() => {
      const titleSplit = SplitText.create(".stores-find-title", {
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
          trigger: ".stores-find-section",
          start: "35% center",
          end: "75% center",
          scrub: 1.5,
        }
      })

      titleTl.from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      });

      subtitleTl.to(".stores-find-text-scroll", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "power1.inOut",
      });

      contentTl
        .from(".stores-find-content p", {
          opacity: 0,
          y: 30,
          ease: "power1.inOut",
        })
        .from(".btn-stores-find", {
          opacity: 0,
          y: 40,
          ease: "power2.inOut",
        }, ">");

      replayTimelineOnEnter(titleTl, ".stores-find-section", {
        start: "20% center",
      });
      replayTimelineOnEnter(subtitleTl, ".stores-find-section", {
        start: "35% center",
      });
    });

  return (
    <section className="stores-find-section">
      <img
        src="https://i.ibb.co/cm31PH9/location-dip.webp"
        alt="dip"
        className="w-full object-cover"
      />
      <div className="stores-find-container">
        <img
          src="https://i.ibb.co/hRbpQGgq/stores-find.webp"
          alt="find"
          style={{
            filter: "brightness(0.65) ",
          }}
          className="md:relative absolute inset-0 w-full h-full object-cover"
        />
        <div className="stores-find-content">
          <div className="general-title flex flex-col items-center">
            <div className="overflow-hidden lg:py-0 py-3">
              <h1 className="stores-find-title text-warm-sunrise">
                Can’t find BRST
              </h1>
            </div>
            <div
              style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              className="stores-find-text-scroll -rotate-4 -mt-1 text-nowrap opacity-0"
            >
              <div className="w-[28vw] max-w-none">
                <img
                  src="https://i.ibb.co/ZpMT5Q3z/stores-sub-title.webp"
                  alt="Near you?"
                  className="w-full "
                />
              </div>
            </div>
          </div>
          <div className="md:max-w-75 max-w-xs">
            <p className="text-xs text-warm-sunrise font-paragraph">
              BRST is now available at thousands of grocery stores around the
              country, but there are thousands more that we’d love to be in.
            </p>
          </div>
          <div onClick={() => navigate("/contact")} className="btn-stores-find">
            <a>Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresFindSection;