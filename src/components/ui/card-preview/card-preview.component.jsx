const CardPreview = ({ key, logo }) => {
  return (
    <div className="flex justify-center items-center gap-3 bg-[#f2d5c0] hover:scale-[1.05] md:w-[22.5vw] w-75 md:h-[7.5vw] h-20 rounded-[100vw] duration-500 transition-all">
      <img src={logo} alt={`previwe-${key}`} className="md:w-[13vw] w-40 max-w-none" />
    </div>
  );
};

export default CardPreview;
