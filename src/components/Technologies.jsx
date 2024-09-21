import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiJavascriptLine, RiBootstrapLine, RiTailwindCssLine} from "react-icons/ri"
import {   DiDjango,DiPostgresql,DiMysql    } from "react-icons/di"
import { SiMicrosoftazure,SiOpenai  } from "react-icons/si";
import { FaAws, FaLinux, FaJava, FaGitAlt  } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial: {y:-5},
    animate: {
        y: [5,-5],
        transition : {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
            // make repeatType reverse ease linera
        }
    }
    
})
function Technologies(){
    return(
        <>
        <div id="skills" className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Tech Stack</motion.h1>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiHtml5Line className="text-7xl text-blue-500"></RiHtml5Line>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiCss3Line className="text-7xl text-green-400"></RiCss3Line>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiJavascriptLine className="text-7xl text-yellow-400"></RiJavascriptLine>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiBootstrapLine className="text-7xl text-purple-400"></RiBootstrapLine>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiTailwindCssLine className="text-7xl text-blue-400"></RiTailwindCssLine>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <DiDjango className="text-7xl text-green-600"></DiDjango>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <DiPostgresql className="text-7xl text-blue-800"></DiPostgresql>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <DiMysql className="text-7xl text-blue-800"></DiMysql>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <SiMicrosoftazure className="text-7xl text-blue-800"></SiMicrosoftazure>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <SiOpenai className="text-7xl "></SiOpenai>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaAws className="text-7xl "></FaAws>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaLinux className="text-7xl "></FaLinux>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaJava className="text-7xl "></FaJava>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaGitAlt className="text-7xl text-orange-400"></FaGitAlt>
                </motion.div>
            </motion.div>

        </div>
       
        </>
    )
}
export default Technologies