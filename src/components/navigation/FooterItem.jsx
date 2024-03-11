import React from "react"

function FooterItem( {icon, text1, text2} ) {

    return(

        <div>
            <div className="flex space-x-2">
            <img src={icon} alt="Icon" className="h-4 w-4" />
            <h6 className="font-semibold"> {text1} </h6>
            </div>
            <h6> {text2} </h6>
        </div>

    )

}

export default FooterItem