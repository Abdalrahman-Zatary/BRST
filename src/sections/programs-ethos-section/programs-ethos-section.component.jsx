import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

import VideoBenefitSection from '../../components/ui/video-benefit-section/video-benefit-section.component';
import WrapperCardsOffer from '../../components/ui/wrapper-cards-offer/wrapper-cards-offer.component';

const CARDS = [
  {
    num: "01",
    title: "Free Product",
    subTitle: "Delivered monthly",
    text: "Free BRST. Program members get product delivered to their front door every month. You keep posting we keep delivering.",
    initRot: -29,
    finalRot: 3,
    tabletRot: "rotate-1",
    zIndex: "z-10",
    top: "top-0",
    left: "left-[7%]",
  },
  {
    num: "02",
    title: "Merch",
    subTitle: "Rep the brand",
    text: "Hoodies, beanies, shirts, Speedos ok maybe not speedos but you get the idea.",
    initRot: -28,
    finalRot: -4,
    tabletRot: "-rotate-2 -mt-1",
    zIndex: "z-20",
    top: "top-[-3%]",
    left: "left-1/3",
  },
  {
    num: "03",
    title: "Free Product",
    subTitle: "Part of R&D",
    text: "As a Program member you’ll be on the R&D team. We’ll send you new flavors with a quick survey because we want the feedbacks!",
    initRot: 25,
    finalRot: 7,
    tabletRot: "rotate-3 -mt-1",
    zIndex: "z-30",
    top: "top-[2%]",
    left: "left-[60%]",
  },
];

const ProgramsEthosSection = () => {
  const navigate = useNavigate();
  const videoUrl = "https://res.cloudinary.com/dxd3m1fz3/video/upload/v1778103497/programs_ujrk9k.mp4";

  useGSAP(() => {
    const titleSpilt = SplitText.create(".programs-ethos-title h2", {
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

    replayTimelineOnEnter(titleTl, ".programs-ethos-section", {
      start: "10% 55%",
    });
  });

  return (
    <section className="programs-ethos-section">
      <img
        src="https://i.ibb.co/gMpFQN3t/dip.webp"
        alt="dip"
        className="w-full object-cover"
      />
      <div className="programs-ethos-content">
        <div className="general-title programs-ethos-title">
          <h2 className="text-deep-navy text-center">Join our Program</h2>
        </div>
        <WrapperCardsOffer about={false} programs={true} cards={CARDS} />
        <div onClick={() => navigate("/contact")} className="programs-ethos-button">
          <a>Let’s go!</a>
        </div>
      </div>
      <div className="relative">
        <VideoBenefitSection Rotate={true} videoUrl={videoUrl} />
      </div>
    </section>
  );
};

export default ProgramsEthosSection;