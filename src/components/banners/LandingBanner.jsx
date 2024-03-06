import React from "react"
import PrimaryButton from "../navigation/PrimaryButton"
import SecondaryButton from "../navigation/SecondaryButton"
import PrimaryInput from "../navigation/PrimaryInput"

function LandingBanner() {

    return (
        <div className="space-y-8 max-w-3xl">
            <div id="Headings" className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-700 max-w-xl">Repuestos y reparaciones para tu empresa</h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-brand-700">Desde 1984 brindando calidad y profesionalismo.</h2>
            </div>
            <div className="space-y-4 w-full md:w-fit">
                <div className="flex flex-col
                                w-full
                                space-y-4
                                md:flex-row
                                md:space-y-0
                                md:space-x-4">
                    <PrimaryInput placeholder='Tu Nombre'></PrimaryInput>
                    <PrimaryInput placeholder='Tu Mail'></PrimaryInput>
                </div>
                <PrimaryButton text='CONTACTANOS!' ></PrimaryButton>
                <SecondaryButton text='ENVIANOS UN WHATSAPP'></SecondaryButton>
            </div>
            
            
        </div>
    )

}

export default LandingBanner