import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import ChevronIcon from '../../common/chevron-icon/chevron-icon.component';

const FaqItem = ({ item, isOpen, onToggle, index }) => {
  const isSmallMbile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const bodyRef = useRef(null);
  const iconRef = useRef(null);

  const fillRef = useRef(null);
  const hoverSplitRef = useRef(null);

  const isOpenRef = useRef(isOpen);
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    gsap.set(bodyRef.current, { height: 0 });
    gsap.set(iconRef.current, { rotate: 180 });

    const fill = fillRef.current;
    if (fill) {
      fill.textContent = item.question;
      hoverSplitRef.current = SplitText.create(fill, { type: "chars" });
      gsap.set(hoverSplitRef.current.chars, { yPercent: 80, opacity: 0 });
    }

    return () => {
      if (hoverSplitRef.current) {
        hoverSplitRef.current.revert();
        hoverSplitRef.current = null;
      }
    };
  }, []);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const body = bodyRef.current;
    const icon = iconRef.current;
    const chars = hoverSplitRef.current?.chars;

    gsap.killTweensOf([body, icon]);

    if (isOpen) {
      gsap.set(body, { height: "auto" });
      gsap.from(body, {
        height: 0,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
      });

      gsap.to(icon, {
        rotate: 0,
        duration: 0.55,
        ease: "back.out(2.5)",
      });

      if (chars) {
        gsap.to(chars, {
          yPercent: 0,
          opacity: 1,
          stagger: { each: 0.022, from: "start" },
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      }

      const p = body.querySelector("p");
      if (p) {
        const split = SplitText.create(p, { type: "words" });
        gsap.from(split.words, {
          yPercent: 120,
          opacity: 0,
          stagger: { each: 0.022, from: "start" },
          duration: 0.65,
          ease: "power2.out",
          delay: 0.1,
        });
      }
    } else {
      gsap.to(body, {
        height: 0,
        overflow: "hidden",
        opacity: 1,
        duration: 0.42,
        ease: "power2.inOut",
      });

      gsap.to(icon, {
        rotate: 180,
        duration: 0.45,
        ease: "back.out(2)",
      });

      if (chars) {
        gsap.to(chars, {
          yPercent: -40,
          opacity: 0,
          stagger: { each: 0.015, from: "end" },
          duration: 0.28,
          ease: "power2.in",
          overwrite: true,
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`faq-item ${isOpen ? " faq-item--open" : ""}`}
      data-active={String(isOpen)}
      data-index={index}
    >
      <button
        className="faq-question"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">
          <span className="q-text-base">{item.question}</span>
          {!isSmallMbile && (
            <span ref={fillRef} className="q-text-fill" aria-hidden="true" />
          )}
        </span>
        <span className="faq-icon" ref={iconRef}>
          <ChevronIcon />
        </span>
      </button>

      <div ref={bodyRef} className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;