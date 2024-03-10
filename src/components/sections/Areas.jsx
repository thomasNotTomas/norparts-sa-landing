import React from "react"
import Bar from "../navigation/Bar"
import SecondaryBanner from "../banners/SecondaryBanner"
import TextBanner from "../banners/TextBanner"

function Areas() {

    return(

        <div className="max-w-7xl mx-auto">
            
            <h2 className="text-2xl text-brand-900 font-semibold">AREAS EN LAS QUE TRABAJAMOS</h2>
            <Bar></Bar>
            <div className="space-y-2 pb-12 text-lg">
                <TextBanner text="Brindamos productos y servicios movidos por la filosofia de ser una empresa para empresas."></TextBanner>
                <div className="flex flex-wrap justify-center py-8">
                <SecondaryBanner icon="/icons/agro-solid.png" 
                                 title="Agro" 
                                 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." ></SecondaryBanner>
                <SecondaryBanner icon="/icons/truck-solid.png" 
                                 title="Transporte" 
                                 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." ></SecondaryBanner>
                <SecondaryBanner icon="/icons/port-solid.png" 
                                 title="Terminales Portuarias" 
                                 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." ></SecondaryBanner>
                <SecondaryBanner icon="/icons/construction-solid.png" 
                                 title="Construcción" 
                                 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." ></SecondaryBanner>
                <SecondaryBanner icon="/icons/industry-solid.png" 
                                 title="Industria" 
                                 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." ></SecondaryBanner>
                </div>
                <TextBanner text="Nos encargamos de proveer repuestos y reparaciones de partes para  vehiculos motores maquinas y componentes de instalacion de industrias."></TextBanner>
            </div>
        </div>

    )

}

export default Areas