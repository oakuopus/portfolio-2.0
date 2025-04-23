import Image from "next/image"
import pfp from "../assets/stockAvatar.jpg"

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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur officia voluptatibus debitis.
                </span>
            </div>
            <div className="w-[85vw] h-[80vh] ml-auto flex">
                <div className="w-[40vw] h-[60vh] mx-auto">
                    <div className="text-center">
                        <span className="text-[2.5vw] border-b-2 border-b-white">
                            Education
                        </span>
                    </div>
                    <div className="flex h-[28vh]">
                        <Image
                            className="w-[10vw] h-[10vw] my-auto p-[1vw] mr-[1vw]"
                            src={pfp}
                            placeholder="blur"
                            alt="West-Mec Logo"
                        />
                        <div className="p-[1vw] my-auto">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ullam unde impedit asperiores eligendi excepturi atque, est debitis corrupti molestias illum odio libero minus, perferendis enim, vero totam eum error?excepturi atque, est debitis corrupti molestias illum odio libero minus, perferendis enim, vero totam eum error?
                        </div>
                    </div>
                    <div className="flex h-[28vh]">
                        <Image
                            className="w-[10vw] h-[10vw] my-auto p-[1vw] mr-[1vw]"
                            src={pfp}
                            placeholder="blur"
                            alt="West-Mec Logo"
                        />
                        <div className="p-[1vw] my-auto">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ullam unde impedit asperiores eligendi excepturi atque, est debitis corrupti molestias illum odio libero minus, perferendis enim, vero totam eum error?excepturi atque, est debitis corrupti molestias illum odio libero minus, perferendis enim, vero totam eum error?
                        </div>
                    </div>
                </div>
                <div className="w-[40vw] h-[60vh] mx-aut5">
                    <div className="text-center">
                        <span className="text-[2.5vw] border-b-2 border-b-white">
                                Skills
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-8 w-[30vw] mx-auto mt-[3vh]">
                        <div className="bg-white mb-[5vh] text-[1.6vw] rounded-[2vw] text-black p-1 text-center items-center">
                            Skill
                        </div>
                        <div className="bg-white rounded-[2vw] text-black p-1 text-center items-center mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white rounded-[2vw] text-black p-1 text-center items-center mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black rounded-[2vw] p-1 text-center items-center mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 rounded-[2vw] text-center items-center mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 text-center rounded-[2vw] items-center mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 text-center rounded-[2vw] items-center mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                        <div className="bg-white text-black p-1 text-center items-center rounded-[2vw] mb-[5vh] text-[1.6vw]">
                            Skill
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}