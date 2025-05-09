import Image from "next/image";
import pfp from "../assets/stockAvatar.jpg"

export default function Experience(){
    return(
        <>
            <div className="flex-col w-[80vw] m-auto text-center mb-[4vh]">
                <p className="mb-[1vh]">
                    <span className="text-[3.5vw] text-white border-b-2 border-b-white">
                        Experience
                    </span>
                </p>
            </div>
            <div className="w-[90vw] h-[80vh] mt-[5vh] m-auto">
                <div className="w-[80vw] m-auto">
                    <div className="h-[25vh] m-auto w-[70vw] flex justify-between">
                        <div className="w-[30vw] bg-white text-black flex h-[25vh]">
                            <div className="w-[30vw] bg-white text-black flex h-[25vh]">
                                <div className="w-[24vw] m-auto">
                                    <h2>Lorem, ipsum.</h2>
                                    <h4>1995-1243</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut quae vero nobis maiores fuga ipsa dolorum veritatis optio quo.</p>
                                </div>
                                <div className="w-[6vw]">
                                    <Image
                                        className="w-16 h-16 m-auto mt-0"
                                        src={pfp}
                                        alt="pfp"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[30vw] bg-white text-black flex h-[25vh]"> 
                            <div className="w-[30vw] bg-white text-black flex h-[25vh]">
                                <div className="w-[24vw] m-auto">
                                    <h2>Lorem, ipsum.</h2>
                                    <h4>1995-1243</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut quae vero nobis maiores fuga ipsa dolorum veritatis optio quo.</p>
                                </div>
                                <div className="w-[6vw]">
                                    <Image
                                        className="w-16 h-16 m-auto mt-0"
                                        src={pfp}
                                        alt="pfp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[25vh] mt-[10vh] m-auto w-[70vw] flex justify-between">
                        <div className="w-[30vw] bg-white text-black flex h-[25vh]">
                            <div className="w-[30vw] bg-white text-black flex h-[25vh]">
                                <div className="w-[24vw] m-auto">
                                    <h2>Lorem, ipsum.</h2>
                                    <h4>1995-1243</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut quae vero nobis maiores fuga ipsa dolorum veritatis optio quo.</p>
                                </div>
                                <div className="w-[6vw]">
                                    <Image
                                        className="w-16 h-16 m-auto mt-0"
                                        src={pfp}
                                        alt="pfp"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[30vw] bg-white text-black flex h-[25vh]"> 
                            <div className="w-[30vw] bg-white text-black flex h-[25vh]">
                                <div className="w-[24vw] m-auto">
                                    <h2>Lorem, ipsum.</h2>
                                    <h4>1995-1243</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut quae vero nobis maiores fuga ipsa dolorum veritatis optio quo.</p>
                                </div>
                                <div className="w-[6vw]">
                                    <Image
                                        className="w-16 h-16 m-auto mt-0"
                                        src={pfp}
                                        alt="pfp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}