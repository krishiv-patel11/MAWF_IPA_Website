import React from "react";
import {
  HeartPulse,
  ShieldCheck,
  MapPin,
  Users,
} from "lucide-react";

import Reveal from "./Reveal";

const features = [
  {
    icon: HeartPulse,
    title: "Coordinated care that puts patients first",
    desc: "Care that connects the dots across providers, specialists, and settings.",
  },
  {
    icon: ShieldCheck,
    title: "Medicare Advantage expertise",
    desc: "Decades of experience managing risk and quality for Medicare populations.",
  },
  {
    icon: MapPin,
    title: "A local West Florida network",
    desc: "Physicians who live in and understand the communities they serve.",
  },
  {
    icon: Users,
    title: "Support that lets doctors focus on medicine",
    desc: "Credentialing, contracting, and operations handled for our practices.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <Reveal className="max-w-2xl">

          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[hsl(205_78%_42%)]">
            Why Our Network
          </span>

          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-[hsl(215_35%_24%)] tracking-tight">
            Care that works for patients and physicians
          </h2>

        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map(
            ({ icon: Icon, title, desc }, index) => (
              <Reveal
                key={title}
                delay={(index % 4) * 0.08}
              >

                <div className="h-full rounded-2xl border border-[hsl(205_38%_88%)] bg-[hsl(206_60%_98%)] p-7">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(152_70%_52%)] text-white">

                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3 className="mt-5 font-display text-xl text-[hsl(215_35%_24%)] leading-snug">
                    {title}
                  </h3>

                  <p className="mt-3 text-[17px] leading-relaxed text-[hsl(215_22%_42%)]">
                    {desc}
                  </p>

                </div>

              </Reveal>
            )
          )}

        </div>
      </div>
    </section>
  );
}