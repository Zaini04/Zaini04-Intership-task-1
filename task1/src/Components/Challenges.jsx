import React from "react";
import img1 from "../assets/Task-Images/tmprw8kngel.webp";
import img2 from "../assets/Task-Images/tmp3y_q5cgj.webp";
import img3 from "../assets/Task-Images/tmpvp09st6c.webp";
import img4 from "../assets/Task-Images/tmpz7o9z2fj.webp";
import img5 from "../assets/Task-Images/tmpqx379fix.webp";
import img6 from "../assets/Task-Images/tmp25uf1920.webp";
import img7 from "../assets/Task-Images/tmpyjwg5ux8.webp";

const data = [
  {
    title: "1. YT Channel Quickstart",
    img: img1,
    desc: "The first part of the process. Building out your channel and learning how to create a profitable YouTube Automation system. In this training we will be taking you through how to create and optimize a YouTube channel the right way, based on our successful channels.",
  },
  {
    title: "2. Top Profitable Niches",
    img: img2,
    desc: "In this part, I'll be revealing the most profitable niches, that I personally have channels in. I'll also be sharing some of the top performing niches my clients picked that made them millions in revenue!",
  },
  {
    title: "3. $600,000 Case Study",
    img: img3,
    desc: "A full breakdown of one of my YouTube channels that has been responsible for $600,000 in revenue. I'll be covering each minute in detail to expose the secrets behind the faceless videos, and why the videos went viral.",
  },
  {
    title: "4. Automating Video Creation",
    img: img4,
    desc: "Full step-by-step training on how to remove yourself from the content-creation process, and hire a full team to automate your video creation, all while spending just $50 - $70 per video.",
  },
  {
    title: "5. Channel Critique Session",
    img: img5,
    desc: "A session where we critique channels, identify issues that may be preventing growth, and our secret tricks to drive channel growth, and ultimately, revenue.",
  },
  {
    title: "6. Viral Mastery",
    img: img6,
    desc: "Why do some videos go viral, while others don't? I learned personally from MrBeast with over 300M subscribers and he taught me the secrets of how to create PREDICTABLE viral videos each time!",
  },
  {
    title: "7. CEO Mindset Session",
    img: img7,
    desc: "A forgotten part of building a successful YouTube business - the mindset of a business owner is vital. I share the mindset I had and how to overcome the doubts, hardships, and most importantly how to ENJOY the wins correctly so you don't burn out like I did in the past!",
  },
];

function Challenges() {
  return (
    <div className="bg-[#000000] py-8 mt-8 text-white">
      <div>
        <h1 className="text-white font-bold text-3xl  lg:text-4xl text-center  capitalize">
          Here's What You're Going to discover in the 5-Day Challenge
        </h1>
        <div className="flex flex-col justify-center items-center gap-y-8 py-4 mt-8">
          {<Card />}
        </div>
      </div>
    </div>
  );
}

export default Challenges;

function Card() {
  return (
    <>
      {data.map((item) => (
        <div className="flex flex-col gap-y-7 py-4 justify-between gap-x-4 items-center md:flex-row w-11/12">
          <div className="flex justify-center items-center w-11/12">
            <img src={item.img} alt="" />
          </div>
          {}
          <div className="flex flex-col   justify-center items-center w-11/12">
            <h1 className="font-bold  text-2xl md:text-3xl text-center w-full  text-[#188BF6] mb-4">
              {item.title}
            </h1>
            <p className="text-center font-bold  text-[1.1rem] md:text-xl">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
