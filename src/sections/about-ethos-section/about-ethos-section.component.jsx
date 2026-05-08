import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

import WrapperCardsOffer from '../../components/ui/wrapper-cards-offer/wrapper-cards-offer.component';

const CARDS = [
  {
    num: "01",
    title: "Recapture\nyour youth",
    initRot: -22,
    finalRot: -8,
    tabletRot: "rotate-1",
    zIndex: "z-10",
    top: "top-0",
    left: "left-[7%]",
  },
  {
    num: "02",
    title: "Break some rules",
    initRot: -13,
    finalRot: 9,
    tabletRot: "-rotate-2 -mt-1",
    zIndex: "z-20",
    top: "top-[-15%]",
    left: "left-1/3",
  },
  {
    num: "03",
    title: "Rediscover what\nyou’re capable of",
    initRot: -13,
    finalRot: 2,
    tabletRot: "rotate-3 -mt-1",
    zIndex: "z-30",
    top: "top-[0%]",
    left: "left-[60%]",
  },
];

const AboutEthosSection = () => {
  useGSAP(() => {
    const titleSpilt = SplitText.create(".about-ethos-title h2", {
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

    replayTimelineOnEnter(titleTl, ".about-ethos-section", {
      start: "10% 55%",
    });
  });

  return (
    <section className="about-ethos-section">
      <div className="about-ethos-content">
        <div className="general-title about-ethos-title">
          <h2 className="text-deep-navy text-center">BRAND BURST</h2>
        </div>
        <div className="about-manifesto">
          <p>
            Our brand celebrates staying young. If there is anything
            adventurous, unconventional, or excitingly unexpected we’re down.
            And while e-mails, taxes, and mortgages must be sent, let us not
            forget the most important thing to send… “it.” Our brand is a
            testament to the power of laughter, the thrill of adrenaline, and
            the camaraderie gained through shared mayhem and mischief.
          </p>
          <p>
            BRST is the kid who pushed the limits who got their life together,
            settled down without settling, and never forgot the essence of what
            made them THEM. #BurstIntoLife
          </p>
        </div>
        <WrapperCardsOffer about={true} programs={false} cards={CARDS} />
      </div>
    </section>
  );
};

export default AboutEthosSection;