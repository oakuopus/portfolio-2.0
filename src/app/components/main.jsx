"use client"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";


export default function Main(){
    return(
        <div className="flex">
            <aside className="h-[20vh] w-[4vw] absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-tr-[1vw] rounded-br-[1vw]">
                <div className="flex-col mt-[1vh]">
                    <IconContext.Provider value={{color: "black", style:{width: "3vw", height: "6vh", margin: "auto"}}}>
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
            <div className="w-full h-[40vh] m-auto mb- mt-[30vh] mb-[20vh] text-center">
                <span className="m-auto text-5xl text-white">
                    <strong>Hello, I'm Oliver Kuopus</strong>
                </span>
                <div className="mt-[2vh] w-[65vw] m-auto text-white text-2xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis consequatur unde aut ut quasi, dicta quisquam quam iusto quo odit.
                </div>
            </div>
        </div>
    )
}