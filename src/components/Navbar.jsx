 import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { MdNightlight } from "react-icons/md";
import { LightModeRounded } from '@mui/icons-material';

const Navbar = () => {
    // State for mobile menu
    const [nav, setNav] = useState(false);
    // State for light mode
    const [lightMode, setLightMode] = useState(false);

    // Define your navigation links
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'project' },
        { id: 4, link: 'contact' },
    ];

    const toggleLightMode = () => {
        setLightMode(!lightMode);
    };

    return (
        <div className={`flex justify-between items-center w-full h-20 px-4 text-${lightMode ? 'black' : 'white'} bg-${lightMode ? 'white' : 'black'} z-50 fixed`}>
            <div>
                <h1 className="text-2xl">Portfolio</h1>
            </div>

            {/* Desktop navigation */}
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className={`px-6 cursor-pointer text-lg font-medium capitalize hover:text-sky-300 text-${lightMode ? 'black' : 'white'}`}>
                        {/* Use ScrollLink for smooth scrolling */}
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Light mode toggle */}
            <div className="flex items-center">
                <div className="pr-4 cursor-pointer" onClick={toggleLightMode}>
                    {lightMode ? <MdNightlight size={30} /> : <LightModeRounded size={30} />}
                </div>
                <div className="pr-4 z-10 text-gray-500 cursor-pointer" onClick={() => setNav(!nav)}>
                      {nav ? <FaTimes size={30} /> :<FaBars size={30}/>}
                </div>
            </div>

            {/* Mobile navigation */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {/* Light mode toggle */}
                    <li className="pr-4 cursor-pointer" onClick={toggleLightMode}>
                        {lightMode ? <FaBars size={30} /> : <MdNightlight size={30} />}
                    </li>
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 py-4 text-2xl cursor-pointer font-medium capitalize text-gray-500 hover:scale-110 duration-200">
                            {/* Use ScrollLink for smooth scrolling */}
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Navbar;
