import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-bg-dark text-white py-25">
      <div className="container">
        {/* flex col */}
        <div className="wrapper flex flex-col items-center text-center gap-10 max-w-3xl mx-auto">
          {/* badge */}
          <div className="bg-primary/10 border border-primary text-primary px-3 py-1 w-fit rounded-full text-xs">
            <small>OCEAN CONSERVATION BLOG</small>
          </div>

          {/* heading */}
          <h1 className="text-5xl md:text-7xl px-5">
            <span className="text-white">Discover the Secrets of the </span>
            <span className="text-primary">Deep</span>
          </h1>

          {/* description */}
          <p className="text-text-muted max-w-xl">
            Exploring the mysteries of marine life, from the coral reefs to the
            abyssal plains. Join us in protecting our blue planet
          </p>

          {/* buttons */}
          <div className="flex flex-col md:flex-row w-full gap-4 items-center justify-center">
            <button className="btn btn--primary w-full md:w-auto flex items-center justify-center gap-2">
              Start Reading
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="btn border border-white text-white hover:bg-white hover:text-bg-dark w-full md:w-auto">
              Latest Issue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
