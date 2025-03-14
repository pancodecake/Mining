"use client";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src="/document-add-svgrepo-com.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 ">We are here for you</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 mb-5">
          <p className="bold-40 lg:bold-64 ">RIGHTS AND PERMITS</p>
          <p className="regular-16 text-gray-30">
            The mining site holds all necessary mining rights & extraction
            permits under Urumqi Hanyoute Trading Co., Ltd. In compliance with
            all relevant laws and regulations, the company has completed the
            required exploration, evaluation, and other necessary preparatory
            work. A comprehensive development and utilization plan has been
            formulated to ensure the lawful and compliant use of the mining
            site's resources.
          </p>
        </div>
        <div>
          <div className="w-full">
          <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="max-w-[300px] overflow-visible"
      style={{overflow: "visible"}}
    >
      <SwiperSlide className="slide">
        <div className="rounded-md border-yellow-600">
          <h1 className="text-center bold-18">Inspector Report</h1>
          <Image
            src="/doc1.png"
            alt="boat"
            width={540}
            height={580}
            className="w-full object-center 2xl:rounded-5xl"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <h1 className="text-center bold-18">Business License</h1>
        <Image
          src="/doc3.png"
          alt="boat"
          width={540}
          height={580}
          className="w-full object-center 2xl:rounded-5xl"
        />
      </SwiperSlide>
      
      <SwiperSlide className="slide">
        <h1 className="text-center bold-18">Mining License</h1>
        <Image
          src="/doc2.png"
          alt="boat"
          width={540}
          height={580}
          className="w-full object-center 2xl:rounded-5xl"
        />
      </SwiperSlide>
    </Swiper>
          </div>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/mountain.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] md:right-[5%] lg:top-20">
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <h2 className="bold-20 text-gray-20">Geography</h2>
              </div>
              <p className="bold-16 mt-1">
                Located in Cele County, Hotan Prefecture, Xinjiang, the mining
                site boasts a unique geographical position with a favorable
                natural environment. The region is rich in proven mineral
                resources, particularly high-quality magnesite, which is a rare
                and valuable mineral in China. The area benefits from suitable
                climatic conditions and stable geological structures, providing
                excellent natural conditions for mining operations.
              </p>
            </div>

            {/* <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
