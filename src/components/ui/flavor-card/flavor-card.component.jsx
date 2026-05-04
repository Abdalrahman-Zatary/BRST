import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';

import { useMediaQuery } from 'react-responsive';

const FlavorCard = ({ flavor, index }) => {
  const navigate = useNavigate();
  const canRef = useRef(null);
  const fruteRef = useRef(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const handleEnter = () => {
    gsap.to(canRef.current, {
      rotate: 12,
      duration: 1,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(fruteRef.current, {
      yPercent: -12,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleLeave = () => {
    gsap.to(canRef.current, {
      rotate: 0,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
    gsap.to(fruteRef.current, {
      yPercent: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power23out",
      overwrite: "auto",
    });
  };

  return (
    <article
      className="flavor-card"
      style={{ backgroundImage: `url(${flavor.imageBackgroundShop})` }}
      onMouseEnter={!isTablet ? handleEnter : ""}
      onMouseLeave={!isTablet ? handleLeave : ""}
      onClick={() => navigate(`/product/${flavor.flavor}`)}
      data-index={index}
    >
      <div className="flavor-card-header">
        <h2 className="flavor-card-name">{flavor.name}</h2>
      </div>

      <div className="flavor-card-img-product">
        <img
          ref={canRef}
          src={flavor.imageProductShopUrl}
          alt={`BRST ${flavor.name}`}
          className="flavor-card-product"
        />
      </div>
      <div className="flavor-card-img-frute">
        <img
          ref={fruteRef}
          src={flavor.imageFruteUrl}
          alt={`Frute ${flavor.name}`}
          className="flavor-card-frute"
        />
      </div>
    </article>
  );
};

export default FlavorCard;