import { ButtonsCard } from "./ButtonsCard";
import "../fonts/fonts.css";
import {  useTypewriter,Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import { useScroll } from "../context/scrollcontext";
import { useScrollMob } from "../context/scrollforMobile";

// import dpPic from "../images/dpPic.jpg"

export const Intro = () => {
  const {aboutMob}=useScrollMob();
  const {homesection}=useScroll();
  const [text]=useTypewriter({
      words:['Developer','Freelancer','Designer','AI&ML Learner','Programmer'],
      loop:true,
      typeSpeed:80,
      deleteSpeed:50
  })

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // add the link to the resume file in the folder and write it here so that i resume can be downloaded 
    // in this the download able file should be in the public/ file 
    link.href = '/resume.pdf';
    // Set the download attribute to suggest a filename
    link.download = 'resume.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <>
    <div ref={aboutMob} className="block md:hidden h-56 mt-10 ml-2 mr-2 ">
        <div className="h-8 text-white font-bold text-2xl mt-1 ml-1 ">
            <span className="amaranth-bold">Sidhant Singh Rathore</span>
        </div>
        <div className="text-white ml-1 mt-1">
            I am a full stack web developer, designer, programmer, freelancer.
        </div>
        <div className="mt-10">
            <ButtonsCard  />
        </div>
    </div>
    {/* intro for the bigger screens  */}

  <div className="hidden md:flex"> {/* Hide on screens smaller than md (768px) */}
  <div className="w-fit h-96 overflow-hidden mt-10">
    <div className="m-10">
      <span className="text-fuchsia-500 font-bold text-lg">Hi I'm</span>
      <div className="amaranth-bold text-4xl text-white">
        Sidhant Singh Rathore
      </div>
      <div>
        <span className="myFont text-2xl text-orange-200">{text}</span>
        <span className="text-red-200 text-2xl ">
          <Cursor/>
        </span>
      </div>

      {/* Add something about me in the below div */}

      <div ref={homesection} className="w-80 mt-3">
        <section className="text-white">
          I am a full stack web developer, proficient programmer, and a freelancer who can make modern real-world applications with the desired specifications and functionalities
        </section>
      </div>
      
      <button 
      onClick={handleDownload}
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5">
        Click for Resume
      </button>
    </div>
  </div>

  <div className="relative w-48 h-48 mt-24 ml-96 overflow-hidden">
  <motion.div
    className="absolute inset-0 flex items-center justify-center"
    initial={{ opacity: 0 }} // Initially hidden and positioned to the left of the viewport
    animate={{ opacity: 1 }} // Animate to full opacity and original position
    transition={{ delay: 1, duration: 3 }} // Add delay and duration for a smooth animation
  >
    {/* style this image according to the screens  */}
    
    {/* <img src={dpPic} className="w-full h-full rounded-full " alt="Profile" /> */}
  </motion.div>
</div>

</div>


    </>
  );
};
