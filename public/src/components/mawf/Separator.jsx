import React from "react";
import Reveal from "./Reveal";

const IMG =
  "https://media.base44.com/images/public/6a8e1730d8db8d72ef824db2/369ea23ee_generated_image.png";

export default function Separator() {
  return (
    <section className="bg-white py-20 lg:py-28">

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        <Reveal>

          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[hsl(205_78%_42%)]">
            Our Promise
          </span>

          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-[hsl(215_35%_24%)] tracking-tight">
            Keeping West Florida moving
          </h2>

          <p className="mt-5 text-xl leading-relaxed text-[hsl(215_22%_38%)]">
            One step, one patient, one practice at a time. We are honored to walk alongside the neighbors we serve across the greater West Florida region.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-[hsl(215_22%_42%)]">
            From the first checkup to lifelong wellness, our network is here for every stage of the journey.
          </p>

        </Reveal>

        <Reveal delay={0.1}>

          <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl shadow-blue-100/50 ring-1 ring-[hsl(205_38%_85%)]">

            <img
              src={IMG}
              alt="An older couple walking together outdoors"
              className="h-full w-full object-cover"
            />

          </div>

        </Reveal>

      </div>
    </section>
  );
}