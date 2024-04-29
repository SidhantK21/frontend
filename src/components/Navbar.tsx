import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faBars, faTimes, faCode} from '@fortawesome/free-solid-svg-icons'; // Import the search icon
import { useState } from 'react';
import { motion } from "framer-motion";

export const NavigationBar = () => {
    const [sideBar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sideBar);
    };

    return (
        <>
            <div className="md:hidden navbar backdrop-blur-3xl text-white rounded-lg">
                <div className="navbar-start">
                    <div tabIndex={0} className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
                    </div>
                </div>
                <div className="navbar-center">
                <a className="btn btn-ghost text-xl font-bold text-sky-50 ">Remote Desk Developer</a>
                </div>
                <div className="navbar-end">
                    {/* Using the Font Awesome search icon */}
                    <button className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    
                </div>
            </div>

            {/* sidebar which will come from the side */}
            <motion.div
                className="fixed top-0 left-0 h-screen w-full z-50"
                initial={{ x: "-100vw" }}
                animate={{ x: sideBar ? 0 : "-100vw" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="w-48 h-full bg-midnight-sapphire rounded-sm">
                    <div className="flex justify-end">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="mt-2 mr-2 text-white cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </div>
                    <ul className="menu p-2 text-white rounded-box w-18">
                        <li><a>Home</a></li>
                        <li><a>Projects</a></li>
                        <li><a>About</a></li>
                        <li><a>Tech Skills</a></li>
                        <li><a>Feedback</a></li>
                    </ul>
                </div>
            </motion.div>

            {/* navbar for the medium screens  and large screens*/}
        <div className="hidden md:block text-white">
            <div className="navbar backdrop-blur-3xl rounded-lg">
                <div className="navbar-start">
                    <FontAwesomeIcon icon={faCode} className='mr-5 ml-2' size='2x' />
                    <div className='flex flex-col amaranth-bold text-xl'>
                        <span>Remote</span>
                        <span>Desk Developer</span>
                    </div>
                    
                </div>
                <div className="hidden md:block navbar-center "> 
                    <div className='flex flex-row ml-64 gap-10 font-bold  '>
                        <button className='w-24 h-12 rounded-lg transition duration-500 hover:bg-slate-400 '>Home</button>
                        <button className='w-24  h-12 rounded-lg transition duration-500 hover:bg-slate-400'>Project</button>
                        <button className='w-24  h-12 rounded-lg transition duration-500 hover:bg-slate-400'>Contact</button>
                    </div>

                </div>
                
            </div>
        </div>

            
            
        </>
    );
};
