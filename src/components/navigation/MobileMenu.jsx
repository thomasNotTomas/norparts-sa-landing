import React from "react"
import NavItem from "./NavItem"

function MobileMenu() {

    return(

        <div className="fixed bottom-0
                        w-screen
                        bg-brand-700
                        px-8 py-4
                        flex justify-center
                        sm:hidden
                        text-white">
            <div id="container" className="flex sm:hidden space-x-8">
                <NavItem text='Areas' icon='./icons/truck-white.svg'></NavItem>
                <NavItem text='Servicios' icon='./icons/services-white.svg'></NavItem>
                <NavItem text='Productos' icon='./icons/product-white.svg'></NavItem>
                <NavItem text='Contacto' icon='./icons/contact-white.svg'></NavItem>
            </div>
        </div>

    )

}

export default MobileMenu

