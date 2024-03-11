import React from "react"
import Bar from "../navigation/Bar"
import PrimaryBanner from "../banners/PrimaryBanner"

function ProductsBrands() {

    return(

        <div className="max-w-7xl px-6 mx-auto">
            <h2 className="text-2xl text-brand-900 font-semibold">ALGUNOS PRODUCTOS Y MARCAS QUE OFRECEMOS SON</h2>
            <Bar></Bar>
            <div className="space-y-2 md:space-y-0 md:space-x-2 md:flex">
            <PrimaryBanner text='Repuestos vehiculares, transmisiones, turbos' background='bg-[url("/banners/car-banner.png")]'></PrimaryBanner>
            <PrimaryBanner text='Bombas hidráulicas y cilindros hidráulicos' background='bg-[url("/banners/hydraulic-banner.png")]'></PrimaryBanner>
            <PrimaryBanner text='Repuestos para rastras, subsoldadoras y herramental de corte' background='bg-[url("/banners/agro-banner.png")]'></PrimaryBanner>
            <PrimaryBanner text='Dientes y cuchillas para corte' background='bg-[url("/banners/saw-banner.png")]'></PrimaryBanner>
            <PrimaryBanner text='Filtros para todo tipo de fluidos' background='bg-[url("/banners/filter-banner.png")]'></PrimaryBanner>
            </div>
        </div>

    )

}

export default ProductsBrands