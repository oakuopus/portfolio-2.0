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
                {/* <Carousel>
                    <CarouselContent>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> */}
            </div>
        </div>
    )
}