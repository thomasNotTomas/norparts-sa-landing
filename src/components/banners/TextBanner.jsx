import React from "react"

function TextBanner( {text} ) {

    return(
        <div className="bg-brand-700 py-4 px-8 text-white">
            {text}
        </div>
    )

}

export default TextBanner