import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer(){
    return(
        <>  
            <footer className="h-[50vh] text-white bg-black w-full mb-0 mt-[5vh]">
                <div className="w-[70vw] h-[20vh] bg-white m-auto flex">
                    <div className="w-[60vw] h-[20vh] bg-white flex">
                        <div className="text-black">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="you@gmail.com"/>
                        </div>
                        <div className="text-black">
                            <input type="text" placeholder="Your message"/>
                        </div>
                    </div>
                    <div className="w-[10vw] h-[20vh] m-auto flex">
                        <button className="bg-green m-auto flex text-black text-[2vw]">
                            Submit
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}