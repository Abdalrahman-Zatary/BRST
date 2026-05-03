import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WORDS = [
  { text: "BURST", gold: false },
  { text: "INTO", gold: true },
  { text: "PURE", gold: false },
  { text: "FLAVOR", gold: true },
  { text: "GRAB", gold: false },
  { text: "A BRST", gold: true },
];

const ShopHeroSection = () => {
  const trackRef = useRef(null);

  useGSAP(() => {
    gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });
  });

  const double = [...WORDS, ...WORDS];

  return (
    <section className="shop-hero-section">
      <div className="w-full">
        <div ref={trackRef} className="shop-marquee-track">
          {double.map((word, index) => (
            <span
              key={index}
              className={`shop-marquee-word ${word.gold ? "shop-word-gold" : "shop-word-dark"}`}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>

      <p className="shop-hero-subtitle">
        Browse all our bold and fresh flavors, ready to fuel your next
        adventure. Discover your favorite burst today!
      </p>
    </section>
  );
};

export default ShopHeroSection;
