import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import CardPreview from '../card-preview/card-preview.component';
import { replayTimelineOnEnter } from '../../../utils/helpers/gsapReplay';

const BlockPreview = ({ title, items }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const titleSplit = SplitText.create(titleRef.current, {
      type: "chars",
    });

    const titleTl = gsap.timeline({
      paused: true,
    });

    titleTl.from(titleSplit.chars, {
      yPercent: 100,
      stagger: 0.03,
      autoAlpha: 0,
      ease: "power2.out",
    });

    replayTimelineOnEnter(titleTl, containerRef.current, {
      start: "20% bottom",
    });
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center md:py-[5vw] py-10"
    >
      <h2
        ref={titleRef}
        className="font-sans font-bold text-[clamp(2.5rem,4.5vw,3.5rem)] mb-4 uppercase text-deep-navy tracking-[-0.02em] text-center"
      >
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-2.5 max-w-250">
        {items.map((item) => (
          <CardPreview key={item.key} logo={item.logoUrl} />
        ))}
      </div>
    </div>
  );
};

export default BlockPreview;
