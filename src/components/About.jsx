import React from "react";
import { Waves } from "lucide-react";
import stats from "../data/metrics.json";

const About = () => {
  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <div className="container">
        <div className="wrapper">
          <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Waves className="h-7 w-7 text-white" />
            </div>
            <h2 className="mb-4 font-heading text-3xl md:text-5xl">
              About DeepBlue
            </h2>
            <p className="text-base leading-8 text-text-muted md:text-lg">
              DeepBlue is a community of ocean enthusiasts, marine biologists,
              and conservationists dedicated to sharing the wonders of our blue
              planet. Founded in 2020, we&apos;ve grown to a community of over
              15,000 readers who care deeply about marine life and ocean
              conservation.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col items-center justify-center"
              >
                <h4 className="font-heading text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </h4>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
