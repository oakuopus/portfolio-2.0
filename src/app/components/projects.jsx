import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import pfp from "../assets/stockAvatar.jpg"

export default function Projects(){
    return(
        <div className="w-[90vw] m-auto h-[100vh] bg-black text-white">
            <div className="flex-col w-[80vw] m-auto text-center mb-[4vh]">
                <p className="mb-[1vh]">
                    <span className="text-[3.5vw] border-b-2 border-b-white">
                        Projects
                    </span>
                </p>
            </div>
            <div>
                <Carousel className="w-[80vw] mx-auto">
                    <div>
                        <CarouselContent className="m-auto h-[70vh]">
                            <CarouselItem className="m-auto h-[70vh] flex pl-0">
                                <div className="m-auto w-[85vw] flex flex-col">
                                    <div className="w-[90%] m-auto">
                                        <Image
                                            className="w-[100%] aspect-[16/9] m-auto overflow-hidden"
                                            url={pfp}
                                        />
                                    </div>
                                    <div className="w-[90%] text-center m-auto pt-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti sapiente libero placeat temporibus voluptatibus harum similique molestiae cumque quis vitae enim ut sequi natus incidunt, unde fugit, aspernatur obcaecati asperiores. Nisi amet sequi, voluptates qui veniam aliquid eveniet, quisquam, ipsam illo reiciendis quam molestias beatae fugit minus temporibus. Adipisci.
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="m-auto h-[70vh] flex pl-0">
                                <div className="m-auto w-[85vw] flex flex-col">
                                    <div className="w-[90%] m-auto">
                                        <Image
                                            className="w-[100%] aspect-[16/9] m-auto overflow-hidden"
                                            url={pfp}
                                        />
                                    </div>
                                    <div className="w-[90%] text-center m-auto pt-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti sapiente libero placeat temporibus voluptatibus harum similique molestiae cumque quis vitae enim ut sequi natus incidunt, unde fugit, aspernatur obcaecati asperiores. Nisi amet sequi, voluptates qui veniam aliquid eveniet, quisquam, ipsam illo reiciendis quam molestias beatae fugit minus temporibus. Adipisci.
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="m-auto h-[70vh] flex pl-0">
                                <div className="m-auto w-[85vw] flex flex-col">
                                    <div className="w-[90%] m-auto">
                                        <Image
                                            className="w-[100%] aspect-[16/9] m-auto overflow-hidden"
                                            url={pfp}
                                        />
                                    </div>
                                    <div className="w-[90%] text-center m-auto pt-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti sapiente libero placeat temporibus voluptatibus harum similique molestiae cumque quis vitae enim ut sequi natus incidunt, unde fugit, aspernatur obcaecati asperiores. Nisi amet sequi, voluptates qui veniam aliquid eveniet, quisquam, ipsam illo reiciendis quam molestias beatae fugit minus temporibus. Adipisci.
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}