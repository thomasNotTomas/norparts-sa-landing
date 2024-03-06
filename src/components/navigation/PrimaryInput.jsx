import React from "react"

function PrimaryInput( { placeholder } ) {

    return (

        <div>
            <input type="text" 
                    className="bg-white py-2 px-4 w-full
                               text-gray-700
                               outline outline-2 outline-gray-700
                               focus:outline-gray-900"
                    placeholder={placeholder}/>
        </div>

    )

}

export default PrimaryInput