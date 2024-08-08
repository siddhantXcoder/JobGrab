import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Carousel className="w-[30%] max-w-xl mx-auto my-20 ">
        <CarouselContent>
          {category.map((items, index) => (
            <CarouselItem className="md:basis-1/2 lg-basis-1/3 ">
              <Button
                variant="outline"
                className="rounded-full bg-yellow-500 text-white"
              >
                {items}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
