import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { useScroll } from '../context/scrollcontext';
import { useScrollMob } from '../context/scrollforMobile';

export const NavigationBar = () => {
    const [sideBar, setSidebar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const { homesectionMob, projectsectionMob, techSkills, contactsectionMob, aboutMob } = useScrollMob();
    const { homesection, projectsection, contactsection } = useScroll();

    useEffect(() => {
        const stickNavbar = () => {
            const windowHeight = window.scrollY;
            setIsSticky(windowHeight > 200);
        };

        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebar(!sideBar);
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="md:hidden navbar backdrop-blur-3xl text-white rounded-lg flex justify-between items-center">
                <div className="navbar-start">
                    <div tabIndex={0} className="btn btn-ghost btn-circle" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <a className="btn btn-ghost text-xl font-bold text-sky-50 ml-2"></a>
                </div>
                <div className="navbar-end flex items-center">
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl font-bold text-sky-50"></a>
                    </div>
                    <div className="navbar-end">
                        {/* Using the Font Awesome search icon */}
                        <button className="btn btn-ghost btn-circle">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
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
                        <li><a onClick={() => { homesectionMob.current?.scrollIntoView({ behavior: 'smooth' }) }}>Home</a></li>
                        <li><a onClick={() => { projectsectionMob.current?.scrollIntoView({ behavior: 'smooth' }) }}>Projects</a></li>
                        <li><a onClick={() => { aboutMob.current?.scrollIntoView({ behavior: 'smooth' }) }}>About</a></li>
                        <li><a onClick={() => { techSkills.current?.scrollIntoView({ behavior: 'smooth' }) }}>Tech Skills</a></li>
                        <li><a onClick={() => { contactsectionMob.current?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a></li>
                    </ul>
                </div>
            </motion.div>

            {/* Desktop Navbar */}
            <div className={`hidden md:flex md:justify-between md:items-center text-white ${isSticky ? 'fixed top-0 left-0 w-full z-50 backdrop-blur-3xl' : 'hidden'}`}>
                <div className="navbar backdrop-blur-3xl rounded-lg flex items-center">
                    <div className="navbar-start flex items-center">
                        <FontAwesomeIcon icon={faCode} className='mr-5 ml-2' size='2x' />
                        <div className='flex flex-col amaranth-bold text-xl'>
                            <span>Remote</span>
                            <span>Desk Developer</span>
                        </div>
                    </div>
                    <div className="navbar-center flex items-center">
                        <div className='flex ml-48 gap-10 font-bold'>
                            <button onClick={() => homesection.current?.scrollIntoView({ behavior: 'smooth' })} className='w-24 h-12 rounded-lg transition duration-500 hover:bg-slate-400 '>Home</button>
                            <button onClick={() => projectsection.current?.scrollIntoView({ behavior: 'smooth' })} className='w-24  h-12 rounded-lg transition duration-500 hover:bg-slate-400'>Project</button>
                            <button onClick={() => contactsection.current?.scrollIntoView({ behavior: 'smooth' })} className='w-24  h-12 rounded-lg transition duration-500 hover:bg-slate-400'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;
