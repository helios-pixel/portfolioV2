import { useState } from 'react';
import Hamburger from 'hamburger-react'; // Import the hamburger-react component
import logo from '../assets/pravinLogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setOpen] = useState(false); // State for toggling the menu

    return (
        <nav className="relative z-50 mb-10 flex items-center justify-between py-6 px-4 lg:px-8 bg-transparent">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
                <img className="m-2 w-8 lg:w-10" src={logo} alt="Logo" />
            </div>

            {/* Hamburger Icon (visible on small screens) */}
            <div className="block lg:hidden z-50">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {/* Links (visible on large screens, collapsible on small screens) */}
            <div
                className={`fixed inset-0 lg:static lg:flex lg:items-center lg:w-auto lg:bg-transparent transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } bg-black bg-opacity-90 lg:translate-x-0 lg:h-auto lg:w-auto`}
            >
                <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-6 text-right lg:text-center">
                    <a href="#about" className="block mt-24 mr-12 lg:mt-0 lg:inline-block text-white hover:text-blue-300">
                        About
                    </a>
                    <a href="#academics" className="block mt-6 mr-12 lg:mt-0 lg:inline-block text-white hover:text-blue-300">
                        Academics
                    </a>
                    <a href="#experience" className="block mt-6 mr-12 lg:mt-0 lg:inline-block text-white hover:text-blue-400">
                        Experience
                    </a>
                    <a href="#skills" className="block mt-6 mr-12 lg:mt-0 lg:inline-block text-white hover:text-blue-300">
                        Skills
                    </a>
                    <a href="#projects" className="block mt-6 mr-12 lg:mt-0 lg:inline-block text-white hover:text-blue-400">
                        Projects
                    </a>
                    <a href="#contact" className="block mt-6 mr-12 lg:mt-0 lg:inline-block text-white hover:text-blue-400">
                        Contact
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6 lg:mt-0 ">
                    <FaLinkedin className="text-white hover:text-blue-500 cursor-pointer size-8 lg:ml-6 " />
                    <FaGithub className="text-white hover:text-gray-700 cursor-pointer size-8 lg:ml-6" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
