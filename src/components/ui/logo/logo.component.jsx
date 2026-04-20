const Logo = () => {
  return(
    <svg className="md:w-24 w-20" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="brst-outline-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="160" height="60" fill="black">
          <rect fill="white" width="160" height="60"/>
          <text
            font-family="Pacifico, cursive"
            font-size="46"
            x="80"
            y="50"
            text-anchor="middle"
            dominant-baseline="auto">BRST</text>
        </mask>
      </defs>

      <text
        font-family="Pacifico, cursive"
        font-size="46"
        x="80"
        y="50"
        text-anchor="middle"
        dominant-baseline="auto"
        fill="#F7F0E6"
        stroke="#F7F0E6"
        stroke-width="7"
        paint-order="stroke"
        mask="url(#brst-outline-mask)">BRST</text>

      <text
        font-family="Pacifico, cursive"
        font-size="46"
        x="80"
        y="50"
        text-anchor="middle"
        dominant-baseline="auto"
        fill="#1C2B3A">BRST</text>

      <text
        font-family="Pacifico, cursive"
        font-size="46"
        x="80"
        y="50"
        text-anchor="middle"
        dominant-baseline="auto"
        fill="none"
        stroke="#F7F0E6"
        stroke-width="1.2"
        opacity="0.45">BRST</text>
    </svg>
  );
};

export default Logo;