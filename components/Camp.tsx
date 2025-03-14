import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat `}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-90 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      {/* <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div> */}
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Magnesite Mine"
          subtitle="Xinjiang, China"
          peopleJoined=""
        />
        {/* <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        /> */}
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-90 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>MINING RIGHTS &</strong> OPERATIONS
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          The mining rights to the site are held by Urumqi Hanyoute Trading Co., Ltd. The total mining area spans 0.3371 square kilometers. The approved mining method is open-pit extraction, with production capacity scaled on demand. The mining rights are registered under license number 6532002010087130074464. The permitted mining elevation ranges from 4,380 meters to 4,960 meters, with a vertical range of 580 meters.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
      <div className=" mt-10 px-6 lg:-mt-12 lg:mr-6">
        <div className="bg-yellow-100 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black ">
            <strong>ENVIRONMENTAL ASSESMENT PROCEDURES &</strong> ENVIRONMENTAL POLICIES
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-black">
          During the development process, the mining site strictly adheres to national environmental protection policies and has completed all required environmental assessment procedures. This ensures that the development and utilization of mineral resources are in harmony with environmental protection efforts. Additionally, the company implements planned environmental protection measures during mining activities to minimize the impact on the natural environment and ensure the sustainability of mining operations.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp