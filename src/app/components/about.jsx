import Image from "next/image"
import pfp from "../assets/stockAvatar.jpg"
import westMec from "../assets/WestMecLogo.png"
import GCC from "../assets/Gcc logo.svg"

export default function About(){
    return(
        <div className="w-[90vw] m-auto h-[100vh] bg-black text-white">
            <div className="flex-col w-[80vw] m-auto text-center mb-[8vh]">
                <p className="mb-[1vh]">
                    <span className="text-[3.5vw] border-b-2 border-b-white">
                        About Me
                    </span>
                </p>
                <span className="text-[1.6vw]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nostrum.
                </span>
            </div>
            <div className="w-[85vw] h-[80vh] flex">
                <div className="w-[40vw] h-[65vh] mx-auto">
                    <div className="text-center">
                        <span className="text-[2.5vw] border-b-2 border-b-white">
                            Education
                        </span>
                    </div>
                    <div className="flex mb-[2vh] h-[28vh]">
                        <Image
                            className="w-[10vw] h-[10vw] my-auto p-[1vw] mr-[1vw]"
                            src={westMec}
                            alt="West-Mec Logo"
                        />
                        <div className="p-[1.6vw] text-[1.3vw] my-auto">
                            West-Mec Coding program provides 900 hours of hands-on coding experience. Students learn everything there is to know on full-stack development. Projects range from creating website for real clients on a class-wide development team, to solo full-stack projects like this portfolio.
                        </div>
                    </div>
                    <div className="flex h-[28vh]">
                        <Image
                            className="w-[10vw] h-[10vw] my-auto p-[1vw] mr-[1vw]"
                            src={GCC}
                            alt="West-Mec Logo"
                        />
                        <div className="p-[1.6vw] text-[1.3vw] my-auto">
                            Currently attending Glendale Community College in pursuit of an associates degree in Computer and Information Technology. This shows my commitment to education, and the constant honing of my skills. Additionally, my high school diploma represents my ability to deliver and see anything through to the end.
                        </div>
                    </div>
                </div>
                <div className="w-[40vw] h-[65vh] mx-aut5">
                    <div className="text-center">
                        <span className="text-[2.5vw] border-b-2 border-b-white">
                                Skills
                        </span>
                    </div>
                    <div className="grid grid-cols-4 gap-6 w-[40vw] mx-auto mt-[3vh]">
                        <span className="text-center">
                            Core Language
                        </span>
                        <span className="text-center">
                            Frontend & styling
                        </span>
                        <span className="text-center">
                            Frameworks & Libraries
                        </span>
                        <span className="text-center">
                            Design/Dev tools
                        </span>
                        <div className="bg-white mb-[12vh] text-[1.6vw] rounded-[2vw] text-black p-1 text-center items-center">
                            Javascript
                        </div>
                        <div className="bg-white rounded-[2vw] text-black p-1 text-center items-center mb-[12vh] text-[1.6vw]">
                            CSS
                        </div>
                        <div className="bg-white rounded-[2vw] text-black p-1 text-center items-center mb-[12vh] text-[1.6vw]">
                            
                        </div>
                        <div className="bg-white text-black rounded-[2vw] p-1 text-center items-center mb-[12vh] text-[1.6vw]">
                            Figma
                        </div>

                        <div className="bg-white text-black p-1 rounded-[2vw] text-center items-center mb-[12vh] text-[1.6vw]">
                            Python
                        </div>
                        <div className="bg-white text-black p-1 text-center rounded-[2vw] items-center mb-[12vh] text-[1.6vw]">
                            HTML
                        </div>
                        <div className="bg-white text-black p-1 text-center rounded-[2vw] items-center mb-[12vh] text-[1.6vw]">
                            ReactJs
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[12vh] text-[1.6vw]">
                            MongoDB
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[12vh] text-[1.6vw]">
                            TypeScript
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[12vh] text-[1.6vw]">
                            Tailwind
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[12vh] text-[1.6vw]">
                            NextJS
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[12vh] text-[1.6vw]">
                            Agile
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}