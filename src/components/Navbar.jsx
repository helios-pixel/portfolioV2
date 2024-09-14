import logo from '../assets/pravinLogo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';


function Navbar() {
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="m-2 w-10"src={logo} alt="" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin></FaLinkedin>
            <FaGithub></FaGithub>
            </div>
        </nav>
    );
}

export default Navbar