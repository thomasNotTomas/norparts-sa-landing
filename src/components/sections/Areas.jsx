import React from "react"
import Bar from "../navigation/Bar"
import PrimaryBanner from "../banners/PrimaryBanner"

function Areas() {

    return(

        <div className="max-w-7xl mx-auto pb-96">
            <h2 className="text-2xl text-brand-900 font-semibold">AREAS EN LAS QUE TRABAJAMOS</h2>
            <Bar></Bar>
            <div className="space-y-2 text-white pb-12 text-lg">
                <div className="bg-brand-700 py-4 px-8">Brindamos productos y servicios movidos por la filosofia de ser una empresa para empresas.</div>
                <div className="space-y-2 md:space-y-0 md:space-x-2 md:flex">
                <PrimaryBanner text='Agro' background='bg-[url("/banners/agro-banner.png")]'></PrimaryBanner>
                <PrimaryBanner text='Transporte' background='bg-[url("/banners/transport-banner.png")]'></PrimaryBanner>
                </div>
                <div className="space-y-2 md:space-y-0 md:space-x-2 md:flex">
                <PrimaryBanner text='Construcción' background='bg-[url("/banners/construction-banner.png")]'></PrimaryBanner>
                <PrimaryBanner text='Terminales portuarias' background='bg-[url("/banners/port-banner.png")]'></PrimaryBanner>
                <PrimaryBanner text='Industria' background='bg-[url("/banners/industry-banner.png")]'></PrimaryBanner>
                </div>
                <div className="bg-brand-700 py-4 px-8">Nos encargamos de proveer repuestos y reparaciones de partes para  vehiculos motores maquinas y componentes de instalacion de industrias.</div>
            </div>
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

export default Areas