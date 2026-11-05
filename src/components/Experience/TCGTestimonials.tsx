"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function TCGTestimonials() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-4/3 md:aspect-[2/1] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/company/tcg/spot-award.jpg"
                alt="TCG Spot Award Recognition"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-4/3 md:aspect-[2/1] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/company/tcg/annual-excellence-award.jpeg"
                alt="TCG Annual Excellence Award"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Navigation buttons - hidden on very small screens, visible on larger mobile and up */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Mobile-friendly indicators */}
      <div className="flex justify-center space-x-2 sm:hidden">
        <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        <div className="h-2 w-2 rounded-full bg-gray-600"></div>
      </div>

      {/* Optional: Swipe instruction for mobile */}
      <p className="text-center text-xs text-gray-500 mt-2 sm:hidden">
        Swipe to view more awards
      </p>
    </div>
  );
}

export default TCGTestimonials;
