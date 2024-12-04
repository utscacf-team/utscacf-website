import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const MinistryGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel
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
      <CarouselPrevious className="bg-inherit text-inherit" />
      <CarouselNext className="bg-inherit text-inherit" />
    </Carousel>
  );
};

export default MinistryGrid;
