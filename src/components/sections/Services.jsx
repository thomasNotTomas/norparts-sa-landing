import React from "react"
import Bar from "../navigation/Bar"
import PrimaryBanner from "../banners/PrimaryBanner"

function Services() {

    return(

        <div className="max-w-7xl mx-auto pb-96">
            <h2 className="text-2xl text-brand-900 font-semibold">ALGUNOS SERVICIOS QUE OFRECEMOS SON</h2>
            <Bar></Bar>
            <div className="space-y-2 md:space-y-0 md:space-x-2 md:flex">
            <PrimaryBanner text='Reparación de bombas hidráulicas' background='bg-[url("/banners/pump-banner.png")]'></PrimaryBanner>
            <PrimaryBanner text='Reparación y fabricación de cilindros hidráulicos' background='bg-[url("/banners/hydraulic-banner.png")]'></PrimaryBanner>
            <PrimaryBanner text='Turbos' background='bg-[url("/banners/turbo-banner.png")]'></PrimaryBanner>
            <PrimaryBanner text='Transmisiones' background='bg-[url("/banners/gear-banner.png")]'></PrimaryBanner>
            </div>
        </div>

    )

}

export default Services