import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container mb-3 padding-container md:bg-bg-img-3 bg-contain bg-no-repeat bg-center flexCenter flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className=" z-20 flex flex-1 flex-col   text-center flexCenter">
        <div className="relative w-[300px]">
          <Image
            src="/logo.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute w-[270px] md:w-[300px] left-[-20%] top-[-106px]"
          />
          <h2 className="text-[80px] md:text-[120px]">MINING</h2>
        </div>
        <div className="w-full bg-white px-7 py-8 h-full">
          <p className="regular-16 mt-6 text-gray-30 ">
            The Nu'er Township Magnesite Mine, located in Cele County, Hotan
            Prefecture, Xinjiang, lies at a bearing of 182° from Cele County's
            centra Itown. The geographic coordinates of the mine's center are
            longitude 80°50'09" and latitude 36°01'06". This is a high-quality
            open-pit mine with a unique geographical environment. Professional
            surveys and evaluations have confirmed that the area is rich in
            magnesite resources, offering significant economic potential.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="relative mb-10  flex flex-1 items-start md:mr-5">
          <div className="relative z-20 flex  flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 h-full">
            <div className="flex flex-col">
              <div className="flexBetween">
                <h2 className="bold-20">MINING METHODS</h2>
              </div>
              <p className="regular-16 text-gray-20">
                Our mining operations utilize open-pit mining, a method known
                for its high safety standards and efficiency. Open-pit mining
                also facilitates large-scale mechanized operations, making it an
                environmentally friendly approach with relatively minimal
                impact. This method supports sustainable development while
                reducing construction risks and other potential challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 items-start">
          <div className="relative z-20 flex  flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 h-full">
            <div className="flex flex-col">
              <div className="flexBetween">
                <h2 className="bold-20 ">MINING SCALE</h2>
              </div>
              <p className="regular-16 text-gray-20">
                According to the current development plan for the mining area,
                the production scale is as follows: an annual extraction of
                50,000 tons of dolomite and over 1 million tons of magnesite.
                This production capacity is designed to meet the diverse demands
                of the market for mineral products while ensuring the economic
                sustainability of the mining area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
