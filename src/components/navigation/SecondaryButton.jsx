import React from "react"

function SecondaryButton( { text } ) {

    return(

        <div className="flex items-center justify-center 
                        text-xl text-white text-center 
                        bg-wpp-green hover:bg-wpp-green-dark 
                        p-4  cursor-pointer
                        transition-all ease-in-out 500ms">
            <img src="./icons/whatsapp-icon.svg" alt="Whatsapp Icon" className="h-8 mx-4" />
            {text}
        </div>

    )

}

export default SecondaryButton