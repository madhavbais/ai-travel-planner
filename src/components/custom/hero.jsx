import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h2 className="font-extrabold text-[50px] items-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        Presonalized Itineraries at your Fingertips
      </h2>
      <p className="text-xl text-gray-500 text-center">
        "Effortlessly plan your perfect trip with AI-powered itineraries
        tailored just for you!"
      </p>
      <Button>Get Started.</Button>
    </div>
  );
}

export default Hero;