const LocationSection = () => {
  return (
    <section className="location-section">
      <img
        src="/src/assets/images/location-dip.svg"
        alt="dip"
        className="w-full object-cover -translate-y-1"
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
              <h1 className="text-warm-sunrise">Right around</h1>
            </div>
            <div
              style={
                {
                  // clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                }
              }
              className="rotate-3 -mt-1 text-nowrap opacity-100"
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