import React from "react"
import LandingBanner from "../banners/LandingBanner"

function Landing() {

    return(

        <div className="flex items-center justify-center pb-20 w-full">
          <LandingBanner></LandingBanner>
          <img src="./truck-banner.png" alt="Tractor" 
               className="hidden 
                          md:block md:w-96
                          xl:w-[32rem] h-fit 
                          relative right-0 top-0" />
          </div>

    )

}

export default Landing