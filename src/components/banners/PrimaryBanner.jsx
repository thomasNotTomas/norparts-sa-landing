import React from "react"

function PrimaryBanner( {text, background} ) {

    return(

        <div className={`h-52 w-full md:h-72 ${background} bg-cover bg-center p-4 cursor-pointer`}>
            <div className="bg-brand-700 w-fit px-8 py-4">
                <h3 className="text-white text-xl font-semibold"> {text} </h3>
            </div>
        </div>

    )

}

export default PrimaryBanner