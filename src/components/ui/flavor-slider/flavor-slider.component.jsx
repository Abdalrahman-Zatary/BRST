import { flavorLists } from '../../../utils/constants/flavorData';

const FlavorSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/src/assets/images/background-prodect/bg-${flavor.imageUrl}.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/src/assets/images/prodect/${flavor.imageUrl}.png`}
              alt=""
              className="drinks"
            />

            <img
              src={`/src/assets/images/fruit/${flavor.imageUrl}.png`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlavorSlider;