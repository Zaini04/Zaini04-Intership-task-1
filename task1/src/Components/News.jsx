import React from "react";
import newsImage from "../assets/Task-Images/tmpzn8mirn9.webp";
import cutomer3 from "../assets/Task-Images/tmpev30qta5.webp";
import cutomer2 from "../assets/Task-Images/tmpet_3a09x.webp";
import cutomer1 from "../assets/Task-Images/tmp81i5jne1.webp";
import cutomer4 from "../assets/Task-Images/tmp7_r_qa0e.webp";
import img1 from "../assets/Task-Images/tmp8rkuge80.webp";
import img2 from "../assets/Task-Images/tmp7hhfm602.webp";
import computer from "../assets/Task-Images/tmprmkxe6de.webp";

import video1 from "../assets/Video/vr1.mp4";
import video2 from "../assets/Video/vr2.mp4";

function News() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center py-5">
      <div className="w-12/12 px-2  md:w-11/12 text-center font-bold ">
        <h1 className="text-[#000000] capitalize text-3xl md:text-4xl lg:text-5xl lg:leading-16 ">
          Our event is so good, Forbes & Mens Journal reached out to interview
          Caleb Boxx!
        </h1>
        <img src={newsImage} alt="" className="mt-4 w-full " />
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-[#000000] font-bold w-11/12 text-center capitalize text-3xl md:text-4xl lg:text-5xl lg:leading-16 ">
          What Our Past Attendees Are Saying About Event:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8  w-10/12 mt-14">
          <img className="pr-6 mb-3" src={cutomer1} alt="" />
          <img className="md:pl-6 mt-12 mb-3" src={cutomer2} alt="" />
          <img className="mt-14 pr-6 mb-3" src={cutomer4} alt="" />
          <img className="mt-6 md:pl-6 mb-3" src={cutomer3} alt="" />
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-[#000000] font-bold w-12/12 text-center capitalize text-3xl md:text-4xl lg:text-5xl lg:leading-16 ">
          Some of The Results Our Past Attendees Gained:
        </h1>
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="w-[96%] md:w-11/12 grid grid-cols-1 md:grid-cols-2  ">
            <div className="flex flex-col justify-center items-center shadow-[0_2px_5px_0_#707070]">
              <video className="w-11/12 m-4" controls src={video1}></video>
              <h1 className="text-[#000000] font-bold w-12/12 text-center capitalize text-3xl -mt-1 ">
                Eric
              </h1>
              <p className="text-2xl mb-4">$70,000 with Faceless YouTube!</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-[0_2px_5px_0_#707070]">
              <video className="w-11/12 m-4" controls src={video2}></video>
              <h1 className="text-[#000000] font-bold w-12/12 text-center capitalize text-3xl -mt-1 ">
                Eddie
              </h1>
              <p className="text-2xl mb-4">$13,000 in 3 months</p>
            </div>
          </div>
          {/* Image */}
          <div className="w-[96%] md:w-11/12 grid grid-cols-1 md:grid-cols-2  mt-8 ">
            <div className="flex flex-col justify-center items-center shadow-[0_2px_5px_0_#707070]">
              <img src={img2} className="w-11/12 m-4" alt="" />
              <h1 className="text-[#000000] font-bold w-12/12 text-center capitalize text-3xl -mt-1 ">
                Chris
              </h1>
              <p className="text-2xl mb-4 text-center">
                $90,000 in ONE Month with Faceless YouTube!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-[0_2px_5px_0_#707070]">
              <img src={img1} className="w-11/12 m-4" alt="" />
              <h1 className="text-[#000000] font-bold w-12/12 text-center capitalize text-3xl -mt-1 ">
                Foeko
              </h1>
              <p className="text-2xl mb-4">$44,000 in ONE Month!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center flex-col items-center">
        <img src={computer} alt="" />
         <div className="flex flex-col justify-center items-center py-3 w-10/12  md:w-8/12 lg:w-6/12  text-white mb-4 mt-4 bg-[#188BF6] cursor-pointer"> 
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Register My Seat Now</h1>
            <p className='mt-2 font-bold'>Limited Seats Available</p>
          </div>
      </div>
    </div>
  );
}

export default News;
