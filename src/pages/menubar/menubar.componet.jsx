import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/all';

import { MenubarContext } from '../../context/menubar/menubar.contaxt';

const MENU_LINKS = [
  {
    label: "Shop",
    path: "/shop",
    imageUrl: "https://i.ibb.co/HMTP85M/bg-mango-blaze.webp",
  },
  {
    label: "Find in Stores",
    path: "/stores",
    imageUrl: "https://i.ibb.co/TMwZm03z/bg-berry-rush.webp",
  },
  {
    label: "About Us",
    path: "/about",
    imageUrl: "https://i.ibb.co/Q3PhnNL5/bg-wild-blueberry.webp",
  },
  {
    label: "BRST academy",
    path: "/academy",
    imageUrl: "https://i.ibb.co/Q3PhnNL5/bg-wild-blueberry.webp",
  },
  {
    label: "Programs",
    path: "/programs",
    imageUrl: "https://i.ibb.co/PvXwBH0c/bg-coconut-cloud.webp",
  },
  {
    label: "Contacts",
    path: "/contact",
    imageUrl: "https://i.ibb.co/PsGQ42tT/bg-lemon-zap.webp",
  },
];

const DEFAULT_BG = "https://i.ibb.co/pvthR8QC/bg-melon-drop.webp";

const Menubar = () => {
  const navigate = useNavigate();
  const { isOpenMenubar, setIsOpenMenubar } = useContext(MenubarContext);

  const menubarRef = useRef(null);
  const linkInnerRefs = useRef([]);
  const linkTextRefs = useRef([]);
  const imageRefs = useRef([]);
  const defaultImageRef = useRef(null);
  const openTlRef = useRef(null);

  useGSAP(() => {
    gsap.set(imageRefs.current, {
      opacity: 0,
      scale: 1.07,
    });
    gsap.set(defaultImageRef.current, {
      opacity: 1,
      scale: 1,
    });

    openTlRef.current = gsap.timeline({
      paused: true,
    })
      .to(menubarRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.95,
        ease: "power4.in",
      })
      .from(
        linkInnerRefs.current,
        {
          yPercent: 110,
          opacity: 0,
          stagger: 0.07,
          duration: 0.65,
          ease: "power3.out",
        },
        `-=${0.95 * 0.45}`,
      );
  });

  useEffect(() => {
    if (!openTlRef.current) return;

    const smoother = ScrollSmoother.get();

    if (isOpenMenubar) {
      smoother?.paused(true);
      openTlRef.current.play();
    } else {
      openTlRef.current.reverse().then(() => {
        smoother?.paused(false);
      });
    }
  }, [isOpenMenubar])

  const handleLinkEnter = (index) => {
    gsap.to(defaultImageRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
      overwrite: "auto",
    });

    imageRefs.current.forEach((img, i) => {
      gsap.to(img, {
        opacity: i === index ? 1 : 0,
        scale: i === index ? 1 : 1.07,
        duration: i === index ? 0.55 : 0.45,
        ease: i ===index ? "power2.out" : "power2.in",
      });
    });

    linkTextRefs.current.forEach((link, i) => {
      gsap.to(link, {
        color: i === index ? "#0D1F2D" : "#0d1f2d2a",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  };

  const handleLinkLeave = () => {
    gsap.to(defaultImageRef.current, {
      opacity: 1,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(imageRefs.current, {
      opacity: 0,
      scale: 1.07,
      duration: 0.45,
      ease: "power2.in",
      overwrite: "auto",
    });

    gsap.to(linkTextRefs.current, {
      color: "#0D1F2D",
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleLinkClick = (path) => {
    setIsOpenMenubar(false);
    navigate(path);
  };

  return (
    <main
      ref={menubarRef}
      className="fixed inset-0 flex overflow-hidden z-100 bg-warm-sunrise"
      style={{ clipPath: "inset(0 0 100% 0)" }}
    >
      {/* Left Navigation */}
      <div className="w-1/2 flex flex-col justify-center items-center text-center relative">
        <nav className="flex flex-col pt-17.5">  
          {MENU_LINKS.map((link, index) => (
            <div
              key={link.path}
              className="overflow-hidden"
            >
              <button
                ref={element => linkInnerRefs.current[index] = element}
                className="cursor-pointer w-max p-0"
                onMouseEnter={() => handleLinkEnter(index)}
                onMouseLeave={handleLinkLeave}
                onClick={() => handleLinkClick(link.path)}
              >
                <span
                  ref={element => linkTextRefs.current[index] = element}
                  className="font-sans font-bold uppercase text-[clamp(2.8rem,6vw,4.5rem)] leading-none tracking-tighter text-deep-navy block"
                >
                  {link.label}
                </span>
              </button>
            </div>
          ))}
        </nav>

        <ul className="flex items-center gap-7 mt-6 font-paragraph text-sm">
          <li className="cursor-pointer" ><a href="">YouTube</a></li>
          <li className="cursor-pointer" ><a href=""></a>Instagram</li>
          <li className="cursor-pointer" ><a href=""></a>TikTok</li>
        </ul>
      </div>
      {/* Right Background Image */}
      <div className="w-1/2 relative overflow-hidden">
        <img 
          ref={defaultImageRef}
          src={DEFAULT_BG}
          alt="BRST default"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {MENU_LINKS.map((link, index) => (
          <img 
            key={link.path}
            ref={element => imageRefs.current[index] = element}
            src={link.imageUrl}
            alt={link.label}
            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-[1.07]"
          />
        ))}
      </div>
    </main>
  );
};

export default Menubar;