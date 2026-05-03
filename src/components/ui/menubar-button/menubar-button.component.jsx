import { useEffect, useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { MenubarContext } from '../../../context/menubar/menubar.contaxt';

const MenubarButton = () => {
  const { isOpenMenubar, setIsOpenMenubar } = useContext(MenubarContext);

  const buttonRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const tlRef = useRef(null);

  const toggelIsOpenMenubar = () => setIsOpenMenubar(!isOpenMenubar)
  useGSAP(() => {
    tlRef.current = gsap.timeline({
      paused: true,
    });

    tlRef.current
      .to(
        line1Ref.current,
        {
          y: 5.5,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        line2Ref.current,
        {
          y: -5.5,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0,
      )
      .to(line1Ref.current, {
        rotate: 45,
        duration: 0.44,
        ease: "power3.inOut",
      })
      .to(
        line2Ref.current,
        {
          rotate: -45,
          duration: 0.44,
          ease: "power3.inOut",
        },
        "<",
      )
      .to(line1Ref.current, {
        width: 22,
        duration: 0.44,
        ease: "power3.inOut",
      })
      .to(line2Ref.current, {
        width: 22,
        duration: 0.44,
        ease: "power3.inOut",
      }, "<")
      .to(buttonRef.current, {
        backgroundColor: "#ffffff",
        duration: 0.88,
        ease: "power1.out",
      }, "<");
  }, []);

  useEffect(() => {
    if (!tlRef.current) return;
    if (isOpenMenubar) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpenMenubar]);

  return (
    <button
      ref={buttonRef}
      onClick={toggelIsOpenMenubar}
      aria-label={isOpenMenubar ? "Close menubar" : "Open menubar"}
      className="relative z-1000 flex flex-col justify-center items-center w-10 h-10 gap-2 cursor-pointer rounded-full bg-transparent p-2"
    >
      <span
        ref={line1Ref}
        className="block w-10 h-0.5 bg-deep-navy rounded-xs"
      />
      <span
        ref={line2Ref}
        className="block w-10 h-0.5 bg-deep-navy rounded-xs"
      />
    </button>
  );
};

export default MenubarButton;