import React from "react"
import Header from "./components/Header"
import Landing from "./components/sections/Landing"
import MobileMenu from "./components/navigation/MobileMenu"



function App() {

  return (
    <>
      <div className="px-8 font-sans
                      bg-[url('/background-texture.png')]
                      bg-cover
                      h-screen
                      px-12
                      lg:px-32">
          <Header></Header>
          <Landing></Landing>
          
      </div>
      <div className="font-sans">
      <MobileMenu></MobileMenu>
      </div>
    </>
  )
}

export default App
