import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';

const WrapperCardsOffer = ({ cards ,about, programs }) => {
  const cardRefs = useRef([]);
  const isTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  useGSAP(() => {
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards-wrapper",
          start: "-15% center",
          end: "20% center",
          scrub: 2,
        },
      });

      cardRefs.current.forEach((card, i) => {
        const c = cards[i];
        tl.fromTo(
          card,
          {
            rotate: c.initRot,
            yPercent: 80,
          },
          {
            rotate: c.finalRot,
            yPercent: 20,
            duration: 1,
            ease: "power2.out",
          },
          "<",
        );
      });
    }
  });

  return (
    <div className="cards-wrapper relative w-full lg:h-[clamp(300px,36vw,380px)] min-h-fit">
      {programs &&
        cards.map((card, index) => (
          <div
            key={index}
            ref={(element) => (cardRefs.current[index] = element)}
            className={`lg:absolute relative lg:w-[30vw] w-[85%] lg:h-[19vw] h-50 ${isTablet ? "top-0" : card.top} ${isTablet ? "left-1/2 -translate-x-1/2" : card.left} ${isTablet && card.tabletRot} bg-pale-cream lg:rounded-4xl rounded-2xl p-[2vw] flex flex-col justify-between border-[0.4vw] border-warm-sunrise origin-[center,bottom] will-change-transform ${card.zIndex}`}
          >
            <div className="text-center">
              <span className="progarms-card-num text-xl font-paragraph text-deep-navy/30 leading-[0.18em]">
                {card.num}
              </span>
              <h3 className="programs-card-title font-sans font-bold uppercase text-deep-navy leading-tight tracking-tight text-4xl whitespace-pre-line">
                {card.title}
              </h3>
              <h4 className="font-paragraph text-deep-navy/80 leading-none text-sm">
                {card.subTitle}
              </h4>
            </div>

            <div className="text-center mx-8">
              <p className="progarms-card-text font-paragraph text-deep-navy/55 leading-none lg:text-[13px] text-sm">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      {about &&
        cards.map((card, index) => (
          <div
            key={index}
            ref={(element) => (cardRefs.current[index] = element)}
            className={`lg:absolute relative lg:w-[30vw] w-[85%] lg:h-[21vw] h-50 ${isTablet ? "top-0" : card.top} ${isTablet ? "left-1/2 -translate-x-1/2" : card.left} ${isTablet && card.tabletRot} bg-pale-cream lg:rounded-4xl rounded-2xl lg:p-[2vw] sm:p-8 p-5 flex flex-col justify-between lg:items-start items-center border-[0.4vw] border-warm-sunrise origin-[center,bottom] will-change-transform ${card.zIndex}`}
          >
            <span className="progarms-card-num text-xl font-paragraph text-deep-navy/30 leading-[0.18em]">
              {card.num}
            </span>
            <h2 className="programs-card-title font-sans font-bold uppercase text-deep-navy leading-[105%] tracking-tight text-4xl whitespace-pre-line">
              {card.title}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default WrapperCardsOffer;