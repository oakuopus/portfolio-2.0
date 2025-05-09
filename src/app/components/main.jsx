"use client"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";


export default function Main(){
    return(
        <div className="flex">
            <aside className="h-[22vh] w-[3vw] absolute left-0 top-[7%] translate-y-1/2 bg-white rounded-tr-[1vw] rounded-br-[1vw]">
                <div className="flex flex-col justify-evenly items-center h-full">
                    <IconContext.Provider value={{color: "black", style:{width: "2vw", height: "5vh", margin: "auto"}}}>
                        <Link target="__blank" href={"https://www.linkedin.com/"}>
                            <FaLinkedinIn />
                        </Link>
                        <Link target="__blank" href={"https://github.com/oakuopus"}>
                            <FaGithub/>
                        </Link>
                        <Link target="__blank" href={"https://www.google.com/"}>
                            <FaWpforms/> 
                        </Link>
                    </IconContext.Provider>
                </div>
            </aside>
            <div className="w-full h-[40vh] m-auto mb- mt-[32vh] mb-[20vh] text-center">
                <span className="m-auto text-5xl text-white">
                    <strong>Hello, I'm Oliver Kuopus</strong>
                </span>
                <div className="mt-[2vh] w-[65vw] m-auto text-white text-2xl">
                    I am a full-stack developer looking to help you build your dream website. Review my qualifications below and contact me to setup a free appointment.
                </div>
            </div>
        </div>
    )
}