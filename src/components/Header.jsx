import React from "react"
import NavItem from "./navigation/NavItem"

function Header() {

    return(

        <div id="Header" className="flex justify-center
                                    md:justify-between
                                    md:items-center
                                    py-12
                                    xl:py-6">
          <img src="/norparts-sa-logo.svg" alt="Logo" />
          <div id="Navigation" className="hidden md:flex space-x-12">
            <NavItem text='Areas' icon='./icons/tool-icon.png'></NavItem>
            <NavItem text='Productos' icon='./icons/product-icon.png'></NavItem>
            <NavItem text='Servicios' icon='./icons/service-icon.png'></NavItem>
          </div>
        </div>

    )

}

export default Header