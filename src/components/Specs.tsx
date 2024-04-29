"use client";
// import React from "react";
import { AnimatedTooltip } from "../components/ui/tooltip";
import Xd from "../images/Xd.jpg";
import aiml from "../images/aiml.jpg";
import code from "../images/code.jpg";
import freelancer from "../images/freelancer.jpg";
import programmer from "../images/programmer.jpg";
const people = [
  {
    id: 1,
    name: "Full stack Web developer",
    image:
        code
  },
  {
    id: 2,
    name: "Freelancer",
    image:
        freelancer
  },
  {
    id: 3,
    name: "AI &Machine Learning",
    image:
        aiml
  },
  {
    id: 4,
    name: "Designer",
    image:
        Xd
  },
  {
    id: 5,
    name: "Programmer",
    image:
        programmer
  },
  
];

export function Spec() {
  return (
    <>
    
    {/* specs section for the smaller screens  */}
    <span className="block md:hidden text-center text-white mt-24 font-bold text-lg">My Specializations</span>
    <div className="md:hidden flex flex-row items-center justify-center mb-10 w-full mt-16">
      <AnimatedTooltip items={people} />
    </div>


    {/* specs for the biggerr screens  */}

      {/* this div is correcting the position  */}
    <div className="hidden md:block w-full h-48">

    </div>

    <div className="text-white hidden md:block">
  <div className="chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        {/* add ur own image here  */}
        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div className="chat-header">
      Client 
      <time className="text-xs opacity-50"> 12:45</time>
    </div>
    <div className="chat-bubble">Can you tell me what you do i mean your specializations ??</div>
    <div className="chat-footer opacity-50">
      Delivered
    </div>
  </div>
  <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        {/* add your own image  */}
        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div className="chat-header">
      Me
      <time className="text-xs opacity-50"> 12:46</time>
    </div>
    <div className="chat-bubble w-64">Sure!!  I am a developer who code and designs web application on its own and a agile learner which will be benifical for your project mostly i use mern stack as the base techs but can meet your requirements easily.</div>
    <div className="chat-footer opacity-50">
      Seen at 12:46
    </div>
  </div>
</div>

    </>
  );
}
