import React from "react"
import Header from "./components/Header"
import Landing from "./components/sections/Landing"
import MobileMenu from "./components/navigation/MobileMenu"
import Areas from "./components/sections/Areas"



function App() {

  return (
    <>
      <div className="px-8 font-sans
                      bg-white-texture
                      bg-scroll
                      h-screen
                      px-12
                      lg:px-32">
          <Header></Header>
          <Landing></Landing>
          <Areas></Areas>
      </div>
      <div className="font-sans">
      <MobileMenu></MobileMenu>
      </div>
    </>
  )
}

export default App
