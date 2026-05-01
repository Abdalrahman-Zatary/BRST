import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  useGSAP(() => {
    const titleSpilt = SplitText.create(".footer h1", {
      type: "chars",
    });

    const titleTl = gsap.timeline({
      paused: true,
    });

    titleTl.from(titleSpilt.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.out",
    });

    replayTimelineOnEnter(titleTl, ".footer", {
      start: "top 55%",
    });
  });

  return (
    <footer className="footer">
      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-warm-sunrise py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="https://i.ibb.co/4wqH6NCC/footer-section-mobile.webp"
            alt="splach"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain mix-blend-lighten"
          />
        ) : (
          <video
            src="https://res.cloudinary.com/dxd3m1fz3/video/upload/v1777475124/BRST-footer-section.mp4"
            autoPlay
            playsInline
            muted
            className="absolute bottom-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-4 relative z-10 md:mt-10 mt-5">
          <div className="social-btn">
            <img
              className="size-6"
              src="https://i.ibb.co/pvXgPLhJ/yt.webp"
              alt="youtub"
            />
          </div>
          <div className="social-btn">
            <img
              className="size-6"
              src="https://i.ibb.co/NnWHPw3x/insta.webp"
              alt="instagram"
            />
          </div>
          <div className="social-btn">
            <img
              className="size-6"
              src="https://i.ibb.co/KpRT4sy5/tiktok.webp"
              alt="tiktok"
            />
          </div>
        </div>

        <div className="relative sm:mt-34 mt-20 mb-28 md:px-7 px-5 w-full flex lg:gap-10 gap-20 lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center text-warm-sunrise font-paragraph lg:text-sm sm:text-base text-sm font-medium">
          <div className="flex justify-between lg:w-fit w-full md:gap-10 gap-5 leading-[160%]">
            <div>
              <p>BRST Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Juice Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="lg:max-w-98 w-full">
            <p className="lg:text-[13px] sm:text-[15px] text-[13px]">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-start border-b border-[#D9D9D9} py-2 md:mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full font-sans placeholder:text-[#999999]"
              />
              <img
                className="cursor-pointer"
                src="https://i.ibb.co/XkxRhLjq/arrow.webp"
                alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className="relative copyright-box">
          <p>Copyright © 2026 BRST - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;