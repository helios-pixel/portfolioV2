import logo from '../assets/pravinLogo.png';
import { FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';

function Navbar() {
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center ">
                <img className="m-2 w-10" src={logo} alt="Logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="#about" className="hover:text-blue-300 text-sm">
                    About
                </a>
                <a href="#academics" className="hover:text-blue-300 text-sm">
                    Academics
                </a>
                <a href="#experience" className="hover:text-blue-400  text-sm">
                    Experience
                </a>
                <a href="#skills" className="hover:text-blue-300 text-sm">
                    Skills
                </a>
                
                <a href="#projects" className="hover:text-blue-400  text-sm">
                    Projects
                </a>
                <a href="#contact" className="hover:text-blue-400  text-sm">
                    Contact
                </a>
                <FaLinkedin />
                <FaGithub />
            </div>
        </nav>
    );
}

export default Navbar;
