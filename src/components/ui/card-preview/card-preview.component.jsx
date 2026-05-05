const CardPreview = ({ key, logo }) => {
  return (
    <div className="flex justify-center items-center gap-3 bg-[#f2d5c0] hover:scale-[1.05] w-[22.5vw] h-[7.5vw] rounded-[100vw] duration-500 transition-all">
      <img src={logo} alt={`previwe-${key}`} className="w-[13vw] max-w-none" />
    </div>
  );
};

export default CardPreview;
