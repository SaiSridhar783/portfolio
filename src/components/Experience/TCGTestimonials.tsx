"use client";

import * as React from "react";

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
		<Carousel className="w-11/12 mx-auto">
			<CarouselContent>
				<CarouselItem>
					<Image
						src="/images/company/tcg/spot-award.jpg"
						alt="award"
						width={800}
						height={400}
					/>
				</CarouselItem>
				<CarouselItem>
					<Image
						src="/images/company/tcg/annual-excellence-award.jpeg"
						alt="award"
						width={600}
						height={400}
					/>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

export default TCGTestimonials;
