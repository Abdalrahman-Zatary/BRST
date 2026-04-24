import ClipPathTitle from '../../ui/clipPath-title/clipPat-title.component';

const BenefitSection = () => {
  return (
    <div className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing BRST
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#FFF4E0"}
              bg={"#C47020"}
              className={"first-title"}
              borderColor={"#141414"}
            />
            <ClipPathTitle
              title={"Vitamins + Energy"}
              color={"#141414"}
              bg={"#FFF4E0"}
              className={"second-title"}
              borderColor={"#141414"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#FFF4E0"}
              bg={"#8B3800"}
              className={"third-title"}
              borderColor={"#141414"}
            />
            <ClipPathTitle
              title={"No artificial flavors"}
              color={"#1e1e1e"}
              bg={"#F0E840"}
              className={"fourth-title"}
              borderColor={"#141414"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BenefitSection;