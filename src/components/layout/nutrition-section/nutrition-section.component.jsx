import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';

import { SplitText } from 'gsap/all';
import gsap from 'gsap/all';

import { nutrientLists } from '../../../utils/constants/brstDetailes.Data';

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const [listes] = useState(
    isMobile ? nutrientLists.slice(0, 3) : nutrientLists,
  );

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "30% center",
      },
    });

    contentTl
      .from(titleSplit.chars, {
        yPercent: 100, 
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      }, "-=0.3");

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "40% center",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      <img
        src="/src/assets/images/nutrition-dip.svg"
        alt="nutrition-dip"
        className="w-full object-cover"
      />
      <img
        src="/src/assets/images/nutrition-section.png"
        alt="Coconut-cloud"
        className="nutrition-img"
      />
      <div className="absolute w-full top-1/4 flex sm:flex-row flex-col justify-between md:px-8 px-5">
        <div className="general-title relative flex flex-col justify-center items-center gap-24">
          <div className="overflow-hidden place-self-start">
            <h1 className="nutrition-title">It really does</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            }}
            className="nutrition-text-scroll place-self-start"
          >
            <div className="bg-flame-gold xl:pb-5 md:pb-6 sm:pb-3 pb-4 lg:pt-1 sm:pt-2 pt-3 xl:px-5 px-3">
              <h2 className="text-warm-sunrise">Body Right</h2>
            </div>
          </div>
        </div>

        <div className="flex sm:justify-center items-center sm:mt-0 mt-3">
          <div className="md:max-w-75 max-w-xs">
            <p className="text-sm sm:text-right text-balance font-paragraph">
              Juice contains a powerful array of nutrients, including vitamins,
              minerals, and antioxidants, and this is 100% natural.
            </p>
          </div>
        </div>
      </div>
      <div className="nutrition-box">
        <div className="list-wrapper">
          {listes.map((nutrient, index) => (
            <div key={index} className="relative flex-1 col-center">
              <div>
                <p className="sm:text-sm text-xs font-paragraph">
                  {nutrient.label}
                </p>
                <p className="font-paragraph sm:text-xs text-[10px] mt-1">
                  up to
                </p>
                <p className="md:text-2xl text-xl tracking-tighter font-bold">
                  {nutrient.amount}
                </p>
              </div>

              {index !== listes.length - 1 && <div className="spacer-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;