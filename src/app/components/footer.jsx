import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer(){
    return(
        <>  
            <footer className="h-[50vh] text-white bg-black w-full mb-0 mt-[5vh]">
                <div className="w-[70vw] h-[18vh] bg-white m-auto flex ">
                    <div className="w-[60vw] h-[18vh] bg-white flex flex-nowrap">
                        <div className="text-black h-full w-[20vw] p-2 box-border flex flex-col">
                            <input className="w-full mb-2 m-auto text-center border-black border-2" type="text" placeholder="Name" />
                            <input className="w-full m-auto text-center border-black border-2" type="text" placeholder="you@gmail.com" />
                        </div>
                        <div className="text-black h-full w-[30vw] m-auto p-2 box-border flex">
                            <input className="w-full m-auto  text-center border-black border-2" type="text" placeholder="Your message" />
                        </div>
                    </div>
                    <div className="w-[10vw] h-[18vh] m-auto flex">
                        <button className="bg-green m-auto flex text-black text-[2vw]">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="border-top border-white border-2">

                </div>
            </footer>
        </>
    )
}