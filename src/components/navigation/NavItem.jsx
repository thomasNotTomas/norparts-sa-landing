import React from "react"

function NavItem( { text, icon } ) {

    return(

        <div className="flex flex-col space-y-2
                        lg:flex-row lg:space-x-4 lg:space-y-0
                        items-center 
                        text-md sm:text-xl font-base sm:font-semibold text-white sm:text-brand-700 md:hover:text-brand-900 transition-all ease-in-out 500ms
                        cursor-pointer">
            <img src={icon} className="h-5 w-5 md:h-8 md:w-8" alt="" />
            <h3 className="text-sm md:text-lg"> {text} </h3>
        </div>

    )

}

export default NavItem