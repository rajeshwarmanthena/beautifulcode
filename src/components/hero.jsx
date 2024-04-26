import React from "react";
import bg from "./../assests/hero1.jpg";
import bg2 from "./../assests/hero2.jpg";
import logo1 from "./../assests/logo1.svg";
import logo2 from "./../assests/logo2.svg";
import logo3 from "./../assests/logo3.svg";
import logo4 from "./../assests/logo4.svg"
import logo from "../assests";

const Hero = () => {
  return (
    <>
      <header className="bg-white h-screen">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-9xl font-semibold text-black-800 lg:text-7xl">BeautifulCode</h1>
                <p className="mt-3 text-black-600 dark:text-black-400 text-3xl">We are dedicated Remote Engineers Who Work Like Your Internal Team</p>
                <button className="w-full px-4 py-2 mt-6 font-bold tracking-wider text-white transition-colors duration-300 transform bg-red-500 rounded lg:w-auto hover:bg-red-700 focus:outline-none focus:bg-red-500">
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img src={bg} alt="logo" className="w-full h-full lg:max-w-3xl" />
            </div>
          </div>
        </div>
        <hr></hr>
      </header>
      <div className="container px-6 py-16 mx-auto">
  <h2 className="text-5xl font-bold text-center text-black-800 mb-8">
    <img src={logo} alt="BeautifulCode Logo" className="h-14 inline mr-3" />
    BeautifulCode built solutions for 
  </h2>
  <div className="flex justify-center items-center">
    <img src={logo1} alt="logo" className="w-40 h-40 mx-5" />
    <img src={logo2} alt="logo" className="w-40 h-40 mx-5" />
    <img src={logo3} alt="logo" className="w-40 h-40 mx-5" />
    <img src={logo4} alt="logo" className="w-40 h-40 mx-5" />
  </div>
</div>


      
      <h1 className="mt-5 text-6xl text-center font-semibold text-black-800 lg:text-6xl">Engineering talent for the long haul</h1>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 lg:pr-8"> {/* Adjusted width and added right padding */}
            <img src={bg2} alt="logo" className="w-3/4 lg:max-w-3xl" /> {/* Adjusted width */}
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8"> {/* Adjusted width and added left padding */}
            <div className="lg:max-w-lg">
              <p className="mt-3 text-black-600 dark:text-black-400 text-2xl">Unlike software development firms that simply focus on solving your engineering problems as quickly as possible, BeautifulCode understands the intricacies of running a remote team</p>
              <p className="mt-3 text-black-600 dark:text-black-400 text-2xl">This is not outsourcing or augmentation; its a partnership.</p>
              <p className="mt-3 underline hover:text-black-600 text-red-600 dark:text-red-400 text-2xl"><a href="https://www.beautifulcode.co/remote-engineering-framework">See how different we are</a></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-64"></div> {/* Set a fixed height */}


      <h1 className="mt-5 text-6xl text-center font-semibold text-black-800 lg:text-6xl">Ready to build an engineering team <br/>focused on sustainability and success?</h1>
      

      
    </>
  );
};

export default Hero;
