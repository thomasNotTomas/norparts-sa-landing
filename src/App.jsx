import React from "react"
import Header from "./components/Header"
import Landing from "./components/sections/Landing"



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
    </>
  )
}

export default App
