import React from "react"

function NavItem( { text, icon } ) {

    return(

        <div className="flex flex-col space-y-2
                        lg:flex-row lg:space-x-4 lg:space-y-0
                        items-center 
                        text-md sm:text-xl font-base sm:font-semibold text-white sm:text-brand-700 md:hover:text-brand-900 transition-all ease-in-out 500ms
                        cursor-pointer">
            <img src={icon} className="h-6 w-6" alt="" />
            <h3> {text} </h3>
        </div>

    )

}

export default NavItem