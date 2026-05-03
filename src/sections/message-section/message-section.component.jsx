import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';

const MessageSection = () => {
  useGSAP(() => {
    const firstMessageSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMessageSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMessageSplit.words, {
      color: "#FFF4E0", //color-warm-sunrise
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secondMessageSplit.words, {
      color: "#FFF4E0",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      paused: true,
    });
    revealTl.to(".message-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut"
    });
    replayTimelineOnEnter(revealTl, ".message-text-scroll", {
      start: "bottom 68%",
    });

    const paragraphTl = gsap.timeline({
      paused: true,
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
    replayTimelineOnEnter(paragraphTl, ".message-content p", {
      start: "top 60%",
    });
  });

  return (
    <section className="message-content">
      <div className="relative container mx-auto flex-center py-22">
        <div className="w-full h-full">
          <div className="message-wrapper">
            <h1 className="first-message">Shake up your mornings day and</h1>

            <div
              style={{ 
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" 
              }}
              className="message-text-scroll"
            >
              <div className="bg-mango-burst pt-1.5 md:pb-5 pb-3 px-3">
                <h2 className="text-dark-ember">POWER UP</h2>
              </div>
            </div>

            <h1 className="second-message">
              your day with every burst of Pure Vitamin Energy
            </h1>
          </div>

          <div className="flex-center text-sm md:mt-20 mt-10">
            <div className="max-w-md px-16 flex-center overflow-hidden">
              <p>
                Fuel the adventure. Feed the momentum. BRST is where real fruit
                meets real energy — no shortcuts, just pure burst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MessageSection;