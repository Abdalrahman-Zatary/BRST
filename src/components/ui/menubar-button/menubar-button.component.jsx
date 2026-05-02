import { useEffect, useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { MenubarContext } from '../../../context/menubar/menubar.contaxt';

const MenubarButton = () => {
  const { isOpenMenubar, setIsOpenMenubar } = useContext(MenubarContext);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const tlRef = useRef(null);

  const toggelIsOpenMenubar = () => setIsOpenMenubar(!isOpenMenubar)
  useGSAP(() => {
    tlRef.current = gsap.timeline({
      paused: true,
    });

    tlRef.current.to(
      line1Ref.current,
      {
        y: 5.5,
        duration: 0.18,
        ease: "power2.inOut",
      },
      0,
    )
      .to(
        line2Ref.current,
        {
          y: -5.5,
          duration: 0.18,
          ease: "power2.inOut",
        },
        0,
      )
      .to(line1Ref.current, {
        rotate: 45,
        duration: 0.22,
        ease: "power3.inOut",
      })
      .to(
        line2Ref.current,
        {
          rotate: -45,
          duration: 0.22,
          ease: "power3.inOut",
        },
        "<",
      );
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
      onClick={toggelIsOpenMenubar}
      aria-label={isOpenMenubar ? "Close menubar" : "Open menubar"}
      className="relative z-1000 flex flex-col justify-center items-end gap-2 cursor-pointer p-2"
    >
      <span ref={line1Ref} className="block w-11 h-0.5 bg-deep-navy rounded-xs" />
      <span ref={line2Ref} className="block w-11 h-0.5 bg-deep-navy rounded-xs" />
    </button>
  );
};

export default MenubarButton;