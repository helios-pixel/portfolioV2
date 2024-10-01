import { CONTACT } from "../constants";

function Contact(){
    return(
        <>
            <div id="contact" className="border-b border-neutral-900 pb-20">
                <h1 className="my-10 text-center text-4xl">Contact</h1>
                <div className="text-center tracking-tighter">
                    <p className="my-4">{CONTACT.email}</p>
                    <p className="my-4"><a href="https://www.linkedin.com/in/pravintiwade" target="_blank" className="border-b">LinkedIn</a> </p>
                    <p className="my-4"><a href="https://github.com/helios-pixel" target="_blank" className="border-b">GitHub</a></p>
                    <p className="my-4">Discord: @oreowithwings</p>

                </div>
            </div>
        </>
    );
}

export default Contact