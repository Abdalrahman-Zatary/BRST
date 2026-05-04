import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import FlavorCard from '../../components/ui/flavor-card/flavor-card.component';
import { flavorLists } from '../../utils/constants/flavores.Data';

const COL_ROTATE_Y = [-28, 0, 28]

const FlavorShelfSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray(".flavor-card");

      gsap.set(gridRef.current, {
        perspective: 1100,
      });

      cards.forEach((card, i) => {
        const col = i % 3;
        gsap.set(card, {
          rotateX: 62,
          rotateY: COL_ROTATE_Y[col],
          opacity: 0,
          scale: 0.88,
          transformOrigin: "50% 100%",
        });
      });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger :sectionRef.current,
          start: "top 65%",
          end: "center 30%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        tl.to(card, {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, i * 0.13);
      });

      return () => {
        cards.forEach((card) =>
          gsap.set(card, {
            clearProps:
              "rotateX,rotateY,opacity,scale,transform,transformOrigin",
          }),
        );
        gsap.set(gridRef.current, { clearProps: "perspective" });
      };
    });

    mm.add("(max-width: 1023px", () => {
      gsap.set(".flavor-card", {
        clearProps: "arotateX,rotateY,opacity,scale,transform,transformOriginl",
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="flavor-shelf-section">
      <div ref={gridRef} className="flavor-shelf-grid">
        {flavorLists.map((flavor, index) => (
          <FlavorCard
            key={flavor.name}
            flavor={flavor}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FlavorShelfSection;