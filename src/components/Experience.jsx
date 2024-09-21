import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience(){
    return(
        <>
        <div id="experience"className="border-b border-neutral-900 pb4">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Experience</motion.h1>
            <div className="">
                {EXPERIENCES.map((experience, index)=>(
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - <span className="ext-sm text-purple-100">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Experience