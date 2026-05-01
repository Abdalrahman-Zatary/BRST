import { Outlet, useLocation } from 'react-router-dom';

import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/all';

import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

const MainLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/menubar";

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      smoothTouch: 0,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });
  });

  return (
    <div id="smooth-wrapper" className="flex flex-col min-h-screen">
      <div id="smooth-content" className="flex flex-col flex-1">
        <Navbar />
        
        <main className="flex-1">
          <Outlet />
        </main>
        
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
