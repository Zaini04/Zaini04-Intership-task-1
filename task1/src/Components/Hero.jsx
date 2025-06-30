import React from "react";
import heroImage from "../assets/Task-Images/tmpge19rfki.webp";
import rateImage from "../assets/Task-Images/tmpxigr60u9.webp";

function Hero() {
  return (
    <div className='bg-[#000000]'>
      <div className="flex flex-col md:flex-row">
        <div className="mt-0 md:mt-16 py-4 flex justify-center items-center ">
          <img
            src={heroImage}
            alt=""
            className="object-cover ml-2 h-11/12 w-full md:w-[86%]"
          />
        </div>
        <div className="text-center mx-auto  mt-12 mr-7 w-full md:w-10/12 text-white flex flex-col  items-center gap-y-5">
          <h1 className=" font-bold text-4xl">
            Launch your first{" "}
            <strong className="text-[#1475CF]">
              {" "}
              Faceless YouTube Channel with AI
            </strong>{" "}
            , and get your online business ready to start{" "}
            <strong className="text-[#1475CF]">making money in 5 days.</strong>
          </h1>
          <p className="font-semiboldbold text-2xl text-center">
            Whether you have prior tech experience or not, young or old, it
            doesn't matter our students have seen results to quit their 9 to 5!
          </p>
          <p className="font-semiboldbold text-2xl text-center ">
            <strong className="text-[#FFC300] font-bold text-2xl">Date:</strong>{" "}
            Mon-Fri 23-27th June 2025{" "}
          </p>
          <p className="font-semiboldbold text-2xl text-center ">
            <strong className="text-[#FFC300]">Time:</strong> 8 PM EST
          </p>
          <div className="flex flex-col justify-center items-center py-3 px-5 bg-[#188BF6] cursor-pointer">
            <h1 className="font-bold text-2xl">Register My Seat Now</h1>
            <p>Limited Seats Available</p>
          </div>
          <h1 className="text-2xl mt-3">
            Presented by{" "}
            <strong className="text-[#FFC300] font-bold">Caleb Boxx</strong>
          </h1>
          <img src={rateImage} alt="" className="ml-3" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
