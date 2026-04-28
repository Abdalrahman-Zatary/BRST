import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const LocationSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".location-title", {
      type: "chars",
    });
    const paragraphSpilt = SplitText.create(".location-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".location-section",
        start: "30% center",
      },
    });

    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSpilt.words, {
        duration: 1,
        stagger: 0.01,
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".location-section",
        start: "40% center",
      },
    });
    titleTl.to(".location-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="location-section">
      <img
        src="/src/assets/images/location-dip.svg"
        alt="dip"
        className="w-full object-cover"
      />
      <div className="location-container">
        <img
          src="/src/assets/images/location-section.svg"
          alt="location"
          className="md:relative absolute inset-0 w-full h-full object-cover"
        />
        <div className="location-content">
          <div className="general-title flex flex-col items-start">
            <div className="overflow-hidden lg:py-0 py-3">
              <h1 className="location-title text-warm-sunrise">Right around</h1>
            </div>
            <div
              style={
                {
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                }
              }
              className="location-text-scroll rotate-3 -mt-1 text-nowrap opacity-0"
            >
              <div className="bg-mango-burst lg:pt-0 pt-2 lg:pb-2 pb-4 px-3">
                <h2 className="text-warm-sunrise">the corner</h2>
              </div>
            </div>
          </div>
          <div className="md:max-w-75 max-w-xs">
            <p className="text-sm text-warm-sunrise text-balance font-paragraph">
              Buy our drinks at your local store or <br />
              get them delivered (to your door).
            </p>
          </div>
          <div className="btn-location">
            <a className="">Find in stores</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;