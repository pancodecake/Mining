import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]" style={{ backgroundImage: "url('@/bg2.jpg')" }}>
<div className="get-app flex  sm:flex-row">
        <div className="z-20 flex w-full flex-1 flex-col items-start gap-1">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Resource Reserves</h2>
          <p className="regular-16 text-gray-10">Preliminary exploration results indicate that the magnesite mine located in Nu'er Township, Cele County, Xinjiang, is a large-scale mining site with significant extraction potential. As one of the key mineral resources in the country, the mining site boasts high-quality ore with excellent refining and market value.</p>

        </div>


        <div className="flex flex-1 items-center justify-end ">
          <Image className='rounded-md' src="/stone2.jpg" alt="phones" width={550} height={870} />
        </div>
        <div className="z-20 flex w-full flex-1 flex-col items-start gap-1">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Economic Value</h2>
          <p className="regular-16 text-gray-10">Processed magnesite ore yields magnesium oxide, which is widely used across various industries, including pharmaceuticals, rubber, glass, and plastics. It is also valued for enhancing brightness and hardness in sanitary ware products and is highly sought after in the refractory materials market. With advancements made in technology and industry, the demand for high-grade magnesium oxide continues to grow.
Businesses increasingly seek high-quality magnesium oxide to reduce costs while achieving superior product quality and cost-effectiveness.</p>

        </div>
      </div>
    </section>
  )
}

export default GetApp