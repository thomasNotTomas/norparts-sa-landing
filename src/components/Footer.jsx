import React from "react"
import FooterItem from "./navigation/FooterItem"

function Footer() {

    return(

        <div className="flex flex-col w-fit md:flex-row items-center py-12 md:space-x-24 space-y-16  pb-32 text-sm">
            <div className="flex flex-col  space-y-4">
                <img src="/norparts-sa-logo.svg" alt="" className="w-52" />
                <p className="text-brand-900 text-center w-52">Desde 1984 brindando calidad y profesionalismo</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Contacto</h3>
                    <ul className="space-y-1">
                        <FooterItem icon="/icons/telephone-icon.svg" text1="(011) 4737-6173"></FooterItem>
                        <FooterItem icon="/icons/telephone-icon.svg" text1="(011) 4710-4895"></FooterItem>
                        <FooterItem icon="/icons/phone-icon.svg" text1="11-6639-3417"></FooterItem>
                        <FooterItem icon="/icons/mail-icon.svg" text1="norparts@sinectis.com.ar"></FooterItem>
                        <FooterItem icon="/icons/mail-icon.svg" text1="comercial@norparts.com.ar"></FooterItem>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Más información</h3>
                    <ul className="space-y-2">
                        <FooterItem icon="/icons/clock-icon.svg" text1="Horario de atención:" text2="Lunes a Viernes, 9:00 AM a 5:00 PM"></FooterItem>
                        <FooterItem icon="/icons/money-icon.svg" text1="Cotizaciones:" text2="Dentro de las 24hs hábiles"></FooterItem>
                        <FooterItem icon="/icons/shipping-icon.svg" text1="Despachos:" text2="Buenos Aires e interior del país"></FooterItem>
                    </ul>
                </div>
            </div>
        </div>

    )

}

export default Footer