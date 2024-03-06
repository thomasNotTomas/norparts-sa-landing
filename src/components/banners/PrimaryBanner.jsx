import React from "react"

function PrimaryBanner( {text, image} ) {

    return(

        <div className={`h-72 bg-[url(${image})] bg-cover`}>
            <div className="bg-brand-700">
                <h3 className="text-white"> {text} </h3>
            </div>
        </div>

    )

}

export default PrimaryBanner