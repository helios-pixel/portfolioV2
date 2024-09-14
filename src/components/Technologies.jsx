import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiJavascriptLine, RiBootstrapLine, RiTailwindCssLine} from "react-icons/ri"
import {   DiDjango,DiPostgresql,DiMysql    } from "react-icons/di"
import { SiMicrosoftazure,SiOpenai  } from "react-icons/si";
import { FaAws, FaLinux, FaJava, FaGitAlt  } from "react-icons/fa";


function Technologies(){
    return(
        <>
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Tech Stack</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiHtml5Line className="text-7xl text-blue-500"></RiHtml5Line>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiCss3Line className="text-7xl text-green-400"></RiCss3Line>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiJavascriptLine className="text-7xl text-yellow-400"></RiJavascriptLine>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiBootstrapLine className="text-7xl text-purple-400"></RiBootstrapLine>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiTailwindCssLine className="text-7xl text-blue-400"></RiTailwindCssLine>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <DiDjango className="text-7xl text-green-600"></DiDjango>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <DiPostgresql className="text-7xl text-blue-800"></DiPostgresql>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <DiMysql className="text-7xl text-blue-800"></DiMysql>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <SiMicrosoftazure className="text-7xl text-blue-800"></SiMicrosoftazure>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <SiOpenai className="text-7xl "></SiOpenai>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaAws className="text-7xl "></FaAws>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaLinux className="text-7xl "></FaLinux>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaJava className="text-7xl "></FaJava>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaGitAlt className="text-7xl text-orange-400"></FaGitAlt>
                </div>
            </div>

        </div>
       
        </>
    )
}
export default Technologies