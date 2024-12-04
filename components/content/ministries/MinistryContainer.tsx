import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const MinistryContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel
      className="py-3"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="w-full">
        {children &&
          React.Children.map(children, (child, index) => (
            <CarouselItem key={index} className="2xl:basis-1/2">
              {child}
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="hidden bg-inherit text-inherit md:flex" />
      <CarouselNext className="hidden bg-inherit text-inherit md:flex" />
    </Carousel>
  );
};

export default MinistryContainer;
