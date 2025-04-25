import React from "react";

const Nav = () => {
    return(
        <div className="navBar  w-screen flex ">
            <div className="logo bg-[#f6f1e3] text-4xl p-5
            font-[Alkalami] flex">
                
                <h1>Mary</h1></div>
            <div className="links flex justify-end w-full ">
                <ul className="flex gap-10 p-5">
                    <li className="p-2">About Me</li>
                    <li className="p-2">Resume</li>
                    <li className="p-2">Work</li>
                    <li><button className="bg-[#faad1b]
                         rounded-full w-full
                         h-full p-3">Get in Touch!</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;