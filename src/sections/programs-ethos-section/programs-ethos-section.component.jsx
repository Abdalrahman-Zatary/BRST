import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

import VideoBenefitSection from '../../components/ui/video-benefit-section/video-benefit-section.component';
import WrapperCardsOffer from '../../components/ui/wrapper-cards-offer/wrapper-cards-offer.component';

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
        <WrapperCardsOffer />
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