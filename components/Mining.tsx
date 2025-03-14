
import Image from "next/image";
import React from "react";

const Mining = () => {
  return (
    <section className="flexCenter flex-col">
     <h2 className="bold-40 lg:bold-64  text-center mb-6">Mining Site Images</h2>

      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/image.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

      </div>
    </section>
  );
};

export default Mining;
