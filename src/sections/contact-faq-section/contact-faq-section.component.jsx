import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

import { replayTimelineOnEnter } from '../../utils/helpers/gsapReplay';
import { FAQ_DATA } from '../../utils/constants/faq.Data';
import FaqItem from '../../components/ui/faq-item/faq-item.component';

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useGSAP(() => {
    const titleSplit = SplitText.create(".faq-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(".faq-text-scroll", {
      duration: 1.2,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      ease: "circ.out",
    }).from(
      titleSplit.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.out",
      },
      "-=0.5",
    );

    replayTimelineOnEnter(tl, ".faq-section", {
      start: "top 60%",
    });
  });

  return (
    <section className="faq-section">
      <div className="faq-content">
        <div className="overflow-hidden">
          <h1 className="faq-title">We've got answers</h1>
        </div>
        <div
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="faq-text-scroll opacity-0"
        >
          <div className="faq-subtitle lg:py-0 md:py-3 sm:py-0 py-2">
            <h1>Questions</h1>
          </div>
        </div>
      </div>

      <div className="faq-container">
        <div className="faq-list">
          {FAQ_DATA.map((item, i) => (
            <FaqItem
              key={item.id}
              item={item}
              index={i}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions?</p>
          <a href="mailto:contact@BRST.com" className="faq-cta">
            Shoot us an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
