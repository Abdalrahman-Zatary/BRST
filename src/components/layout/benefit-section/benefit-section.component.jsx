import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

import VideoBenefitSection from '../../ui/video-benefit-section/video-benefit-section.component';
import ClipPathTitle from '../../ui/clipPath-title/clipPat-title.component';

const BenefitSection = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-paragraph", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    const secondTextSplit = SplitText.create(".second-paragraph", {
      type: "words",
    });
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    const firstTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-paragraph",
        start: "top bottom",
        end: "bottom 85%",
        scrub: true,
      },
    });
    firstTextTl.from(firstTextSplit.words, {
      duration: 1,
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      stagger: 0.05,
    });

    const secondTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-paragraph",
        start: "top bottom",
        end: "bottom 85%",
        scrub: true,
      },
    });
    secondTextTl.from(secondTextSplit.words, {
      duration: 1,
      yPercent: 300,
      rotate: 12,
      ease: "power1.inOut",
      stagger: 0.1,
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })      
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })      
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className="first-paragraph">
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing BRST
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#FFF4E0"}
              bg={"#C47020"}
              className={"first-title"}
              borderColor={"#141414"}
            />
            <ClipPathTitle
              title={"Vitamins + Energy"}
              color={"#141414"}
              bg={"#FFF4E0"}
              className={"second-title"}
              borderColor={"#141414"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#FFF4E0"}
              bg={"#8B3800"}
              className={"third-title"}
              borderColor={"#141414"}
            />
            <ClipPathTitle
              title={"No artificial flavors"}
              color={"#1e1e1e"}
              bg={"#F0E840"}
              className={"fourth-title"}
              borderColor={"#141414"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p className="second-paragraph">And much more...</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <VideoBenefitSection />
      </div>
    </section>
  );
}
export default BenefitSection;