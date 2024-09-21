import {HERO_CONTENT} from '../constants'
import {motion} from 'framer-motion'
import Terminal from './Terminal/Terminal'
const container = (delay) =>({
    hidden: {opacity:0, x:-100},
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay}
    }
})
function Hero(){
    return(
        <>
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Pravin Tiwade</motion.h1>
                        <motion.span 
                        variants={container(0.75)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                         className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                         <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">Show Off your terminal skills to navigate the portfolio 
                            <span className="bg-gray-800 text-white font-mono px-1 py-0 rounded ">ls to list directories</span>, <br></br>
                             
                            <span className="bg-gray-800 text-white font-mono px-1 py-0 rounded ">cd to go to the section  </span>,
                            
                            <span className="bg-gray-800 text-white font-mono px-1 py-0 rounded ">clear to well... clear </span> 
                            
                        </motion.p>
                          
                    </div>
                </div>
                <div className='w-full lg:w-1/2 p-8'>
                    <motion.div 
                    initial={{x:100, opacity:0, }}
                    animate={{x:0, opacity:1, }}
                    transition={{duration:1, delay:1.2 }}
                    className='flex justify-center'>
                        
                        <Terminal></Terminal>
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero