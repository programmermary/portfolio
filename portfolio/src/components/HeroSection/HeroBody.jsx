import React from "react";
import free from "../../assets/free.png";
const HeroBody = () => {
    return(
        <div className="mainBody  flex gap-4 justify-evenly">
          <div className="text flex flex-col w-1/4  p-10 gap-4">
            <h1 className="font-[Alkalami]
            text-3xl font-semibold">Hello</h1>
            <h1 className="font-[Alkalami]
            text-3xl font-semibold">I'm Mary !</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, adipisci a. Recusandae quam culpa doloremque quisquam voluptatem rerum numquam assumenda excepturi deleniti nam, est delectus, nesciunt minima, et porro ex.
           .</p>
           <button className="bg-[#f1603c] rounded-full
           text-white h-full" >Linkedin.com/mary/ihsan</button>
          </div>
          <div className="image bg-[#344c36] w-1/4 flex justify-center items-center ">
          <div className="circle bg-white w-1/2 h-1/2 rounded-full"><img src={free} alt="hero" /></div>
            
          </div>
        </div>
    )
}
export default HeroBody;