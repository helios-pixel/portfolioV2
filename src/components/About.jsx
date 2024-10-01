import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import React, { forwardRef } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";

function About(){
    return(
        <>
        <div id='about' className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About 
                <span className="text-neutral-500">
                 Me
                </span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                 whileInView={{opacity:1,x:0,}}
                 initial={{opacity:0, x:-100}}
                 transition={{duration:0.5}}
                 className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl"src={aboutImg} alt=""  />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                    <div className='flex flex-col justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl  py-6'>{ABOUT_TEXT}</p>
                        <br />
                        <a href="https://drive.google.com/file/d/1Qh4tlPR2gjx_Jpn6NKd6ivHUlNRribcW/view?usp=sharing" target='_blank'>
                        <button className="relative h-12 w-32 flex items-center justify-center gap-2 overflow-hidden rounded-md border border-indigo-600 bg-transparent text-indigo-600 shadow-2xl transition-all duration-200 ease-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-md before:bg-indigo-600 before:duration-300 before:transition-all before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-full hover:before:w-full hover:before:opacity-80">
                            <span className="relative z-10 flex items-center justify-center">
                                <IoDocumentTextOutline className="mr-1 text-lg" /> Resume
                            </span>
                        </button>

                        </a>
                    </div>
                </motion.div>
            </div>

        </div>
        </>
    )
}

export default About