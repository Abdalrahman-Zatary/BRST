import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { cards } from '../../utils/constants/testinonialCards.Data';

const TestimonialSection = () => {
  const vdRef = useRef([]);

  const isTablit = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  })

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: isMobile ? "-10vh" : "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: 1,
        anticipatePin: 1,
        fastScrollEnd: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
      yPercent: -65,
      ease: "power1.inOut",
    })
      .to(
        ".testimonials-section .second-title",
        {
          xPercent: 25,
          yPercent: -65,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
          yPercent: -65,
          ease: "power1.inOut",
        },
        "<",
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: isTablit ? "20% top" : "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.4,
      ease: "power1.inOut",
    });
  })

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center sm:pt-[5vw] pt-[20vw]">
        <h1 className="text-near-black first-title">What's</h1>
        <h1 className="text-mango-burst second-title">Everyone</h1>
        <h1 className="text-near-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              preload="metadata"
              className="size-full object-cover"
            />
            <div className="absolute flex items-center bottom-0 w-full p-3">
              <img
                src={card.img}
                alt={card.name}
                className="border-2 border-warm-sunrise w-7 h-7 rounded-full"
              />
              <p className="text-warm-sunrise text-sm font-semibold tracking-tighter pl-1">
                {card.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TestimonialSection;