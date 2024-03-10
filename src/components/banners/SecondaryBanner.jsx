import React from "react"

function SecondaryBanner( { title, text, icon } ) {

    return(

        <div className="flex items-center space-x-6 py-8 text-brand-900">
            <img src={icon} alt="Icon" className="h-16 w-16" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold"> {title} </h3>
                <p className="max-w-80"> {text} </p>
            </div>
        </div>

    )  

}

export default SecondaryBanner