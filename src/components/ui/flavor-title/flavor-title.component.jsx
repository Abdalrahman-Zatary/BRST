import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

import { replayTimelineOnEnter } from '../../../utils/helpers/gsapReplay';

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const scondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    const titleTl_1 = gsap.timeline({
      paused: true,
    });    
    const titleTl_2 = gsap.timeline({
      paused: true,
    });    
    const titleTl_3 = gsap.timeline({
      paused: true,
    });
    
    titleTl_1.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
    });
    titleTl_2.to(".flavor-text-scroll", {
      duration: 0.8,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    });
    titleTl_3.from(scondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
    });

    replayTimelineOnEnter(titleTl_1, ".flavor-section", {
      start: "top 45%",
    });      
    replayTimelineOnEnter(titleTl_2, ".flavor-section", {
      start: "top 30%",
    });      
    replayTimelineOnEnter(titleTl_3, ".flavor-section", {
      start: "top 15%",
    });
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-28 xl:gap-20 sm:gap-26 gap-10">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We here 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-golden-mango xl:pb-5 sm:pb-6 pb-4 lg:pt-1 sm:pt-3 pt-2 xl:px-5 px-3">
          <h2 className="text-warm-sunrise">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
}

export default FlavorTitle;