import React from "react"
import Header from "./components/Header"
import Landing from "./components/sections/Landing"
import MobileMenu from "./components/navigation/MobileMenu"
import Areas from "./components/sections/Areas"
import Services from "./components/sections/Services"



function App() {

  return (
    <>
      <div className="px-8 font-sans
                      bg-white-texture
                      bg-scroll
                      h-screen
                      px-12
                      md:px-20
                      lg:px-32">
          <Header></Header>
          <Landing></Landing>
          <Areas></Areas>
          <Services></Services>
      </div>
      <div className="font-sans">
      <MobileMenu></MobileMenu>
      </div>
    </>
  )
}

export default App
