import { ACADEMICS } from "../constants";;
import { motion } from "framer-motion";
function Academics(){
    return(
        <>
        <div id="academics" className="border-b border-neutral-900 pb-4">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Academics</motion.h1>
            <div className="">{ACADEMICS.map((academics,index)=>(
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                key={index} className="mb-8 flex flex-wrap lg:justify-center align-bottom">
                    <div className="w-full lg:w-1/4">
                        <img    src={academics.logo} 
                                alt={academics.college}
                                width={150}
                                height={150}
                                className="mb-6 rounded"
                                />
                    </div>
                    <div className="w-full max-w-xl lg:2-3/4">
                        <h6 className="mb-2 font-semibold">{academics.college}</h6>
                        <p className="mb-0 text-neutral-400">{academics.course}</p>
                        <p className="mb-4 text-neutral-400">{academics.year}</p>
                        <p className="mb-4 font-semibold"> Score: {academics.grade}</p>
                        
                    </div>
                    
                </motion.div>
            ))}
            </div>
        </div>
        </>
    );
}

export default Academics