import React from "react";
import Nav from "../Navbar/Nav";
import HeroBody from "./HeroBody";
const HeroSection = () => {
    return(
        <div className="bg-[#f6f1e3] h-screen w-screen flex flex-col"> 
            <div className="nav">
                <Nav/>
            </div>
            <div className="heroBody">
                <HeroBody/>
            </div>
        </div>
    )
}

export default HeroSection;