import React from "react"
import Header from "./components/Header"
import Landing from "./components/sections/Landing"
import MobileMenu from "./components/navigation/MobileMenu"
import Areas from "./components/sections/Areas"
import Services from "./components/sections/Services"
import Footer from "./components/Footer"
import ProductsBrands from "./components/sections/ProductsBrands"


function App() {

  return (
    <>
      <div>
      <div className="font-sans
                      bg-white-texture
                      bg-scroll
                      h-screen
                      space-y-10">
          <Header></Header>
          <Landing></Landing>
          <Areas></Areas>
          <Services></Services>
          <ProductsBrands></ProductsBrands>
          <div className="w-full flex flex-col items-center justify-center">
          <div className="py-4 flex w-full">
            <div className="h-px bg-brand-700 w-full"></div>
          </div>
          <Footer></Footer>
          </div>
      </div>
      <div className="font-sans">
      <MobileMenu></MobileMenu>
      </div>
      </div>
    </>
  )
}

export default App
