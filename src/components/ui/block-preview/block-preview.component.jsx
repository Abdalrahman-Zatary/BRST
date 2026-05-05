import CardPreview from "../card-preview/card-preview.component";

const BlockPreview = ({ title, items }) => {
  console.log(items);

  return (
    <div className="flex flex-col items-center md:py-[5vw] py-10">
      <h2 className="font-sans font-bold text-[clamp(2.5rem,4.5vw,3.5rem)] mb-4 uppercase text-deep-navy tracking-[-0.02em] text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-2.5 max-w-250">
        {items.map((item) => (
          <CardPreview key={item.key} logo={item.logoUrl} />
        ))}
      </div>
    </div>
  );
};

export default BlockPreview;
