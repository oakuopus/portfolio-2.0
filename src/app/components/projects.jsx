import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function Projects(){
    return(
        <div className="w-[90vw] m-auto h-[100vh] bg-black text-white">
            <div className="flex-col w-[80vw] m-auto text-center mb-[8vh]">
                <p className="mb-[1vh]">
                    <span className="text-[3.5vw] border-b-2 border-b-white">
                        Projects
                    </span>
                </p>
            </div>
            <div>
                <Carousel className="w-[90vw] m-auto h-[80vh]">
                    <CarouselContent className="w-[80vw] h-[80vh] m-auto">
                        <CarouselItem className="w-[70vw]">
                            <div>
                                <Image
                                    
                                />
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti sapiente libero placeat temporibus voluptatibus harum similique molestiae cumque quis vitae enim ut sequi natus incidunt, unde fugit, aspernatur obcaecati asperiores. Nisi amet sequi, voluptates qui veniam aliquid eveniet, quisquam, ipsam illo reiciendis quam molestias beatae fugit minus temporibus. Adipisci.
                            </div>
                        </CarouselItem>
                        <CarouselItem>

                        </CarouselItem>
                        <CarouselItem>

                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}