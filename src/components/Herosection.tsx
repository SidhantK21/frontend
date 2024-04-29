import { motion } from "framer-motion";
import { Tabs } from "./tabs";
import PawCure from "../contentProject/pawcure";
import Wndr from "../contentProject/wandr";
import Newsweb from "../contentProject/newsWeb";

export const Hero = () => {
  
  const tabs = [
    {
      title: "PawCure",
      value: "ngo web",
      content: (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg py-32 ">
        <p className="">PawCure</p>
      <PawCure/>
    </div>

      ),
    },
    {
      title: "Wandr",
      value: "Tour and travel website",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <p>Wandr</p>
          <Wndr/>
        </div>
      ),
    },
    {
      title: "Newsweb",
      value: "new app",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <p>New website</p>
          <Newsweb/>
        </div>
      ),
    },
    // below can be used for the future use 
    // {
    //   title: "Content",
    //   value: "content",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg">
    //       <p>Content tab</p>
    //       {/* <DummyContent /> */}
    //     </div>
    //   ),
    // },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
    //       <p>Random tab</p>
    //       {/* <DummyContent /> */}
    //     </div>
    //   ),
    // },
  ];
  
  

  return (
    // this is the project section for the small screens 
<>
<div className="w-full h-full md:hidden flex items-center justify-center"> {/* Hide on screens larger than md (768px) */}
  <div className="flex flex-col items-center py-16">
    <div className="font-bold text-lg text-white mb-8">My Work</div>

    <div className="flex flex-wrap justify-center mb-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="w-64 border-2 h-48 rounded-lg mx-4 mb-6 bg-gray-800 relative"
      >
        {/* Dummy project content */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          Project 1
        </div>
      </motion.div>
      {/* Description of the project */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="w-64 text-gray-300 mx-4"
      >
        <h1 className="font-bold text-lg">Heading</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        dolore minima est architecto officiis consectetur. Nam praesentium
      </motion.div>
    </div>




    <div className="flex flex-wrap justify-center mb-10">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="w-64 border-2 h-48 rounded-lg mx-4 mb-6 bg-gray-800"
      >
        {/* Dummy project content */}
        Project 2
      </motion.div>
      {/* Description of the project 2 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="w-64 text-gray-300 mx-4"
      >
        <h1 className="font-bold text-lg">Heading 2</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        dolore minima est architecto officiis consectetur. Nam praesentium
      </motion.div>
    </div>

    <div className="flex flex-wrap justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="w-64 border-2 h-48 rounded-lg mx-4 mb-6 bg-gray-800"
      >
        Content to this div goes here
        <div className="text-white"></div>
      </motion.div>
      {/* Description of project 3  */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="w-64 text-gray-300 mx-4"
      >
        <h1 className="font-bold text-lg">Heading 3</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        dolore minima est architecto officiis consectetur. Nam praesentium
      </motion.div>
    </div>
  </div>
</div>





    {/* this project section will be for the md and lg screens only  */}
      
    <div className="hidden md:block h-[20rem] md:h-[40rem] [perspective:1000px] relative flex-col mx-auto w-full max-w-3xl items-start justify-start my-40 ">
    <Tabs tabs={tabs} />
    </div>


  </>
  );
};
