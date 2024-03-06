import React from "react"
import NavItem from "./navigation/NavItem"

function Header() {

    return(

        <div id="Header" className="flex justify-center
                                    sm:justify-between
                                    sm:items-center
                                    py-12
                                    xl:py-6
                                    max-w-7xl
                                    mx-auto">
          <img src="/norparts-sa-logo.svg" alt="Logo" />
          <div id="Navigation" className="hidden sm:flex space-x-6 md:space-x-12">
            <NavItem text='Servicios' icon='./icons/services-brand.svg'></NavItem>
            <NavItem text='Productos' icon='./icons/product-brand.svg'></NavItem>
            <NavItem text='Contacto' icon='./icons/contact-brand.svg'></NavItem>
          </div>
        </div>

    )

}

export default Header