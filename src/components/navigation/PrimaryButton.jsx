import React from "react"

function PrimaryButton( { text } ) {

    return (

        <div className="text-xl text-white text-center p-4  
                        bg-brand-700 hover:bg-brand-900 cursor-pointer
                        transition-all ease-in-out 500ms">
            {text}
        </div>

    )

}

export default PrimaryButton 