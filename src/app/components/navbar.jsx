import React from "react";
import Image from "next/image";
import Head from "next/head";
import pfp from "../assets/stockAvatar.jpg"

function toPage(pos){

}

export default function Navbar(){
    return(
        <div>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="author" content="Personal portfolio made by the full stack developer: Oliver Kuopus"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <meta property="og:image" content=""/>
                <meta property="og:title" content=""/>
                <meta property="og:description" content=""/>

                <title>Oliver Kuopus</title>
            </Head>
            <div className="h-[10vh] bg-white mt-0 flex">
                <div className="w-[96vw] m-auto my-auto h-[9vh] flex">
                    <div className="w-[8vh] h-[8vh] ml-0 my-auto">
                        <Image
                            src={pfp}
                            alt="Profile Picture of Oliver Kuopus"
                            placeholder="blur"
                        />
                    </div>
                    <span className="p-0 m-auto pl-[1vw] ml-0">
                        <strong className="text-2xl">
                            Oliver Kuopus
                        </strong>
                    </span>
                    <nav className="w-[40vw] h-[8vh] m-auto mr-0 pr-[1vw] flex items-center">
                        <ul className="flex justify-between md:text-[2vh] lg:text-[1.8vw] text-black w-full items-center">
                            <li>
                                <button onClick={toPage()}>
                                    <span className="cursor-pointer">Home</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={toPage()}>
                                    <span className="cursor-pointer">About</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={toPage()}>
                                    <span className="cursor-pointer">Projects</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={toPage()}>
                                    <span className="cursor-pointer">Contact</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

