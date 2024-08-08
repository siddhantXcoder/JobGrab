import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center px-4">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          One Place Destination
        </span>
        <h1 className="text-4xl md:text-5xl font-bold">
          Search, Apply & <br />
          Get Your <span className="text-yellow-500">Dream Jobs</span>
        </h1>
        <p className="text-base md:text-lg">
          JobGrab: Seize Your Dream Job Today
        </p>
        <div className="flex lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-blue-950">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
