import React, { useState } from "react";

import Header from "../components/mawf/Header";
import Footer from "../components/mawf/Footer";
import PageHeader from "../components/mawf/PageHeader";
import Reveal from "../components/mawf/Reveal";

const insurers = [
  {
    name: "Humana",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Humana_logo.png",
  },
  {
    name: "Optimum",
    logo: "https://icons.duckduckgo.com/ip3/youroptimumhealthcare.com.ico",
  },
  {
    name: "Ultimate",
    logo: "https://www.chooseultimate.com/apple-touch-icon.png",
  },
  {
    name: "United WellMed",
    logo: "https://www.wellmedhealthcare.com/apple-touch-icon.png",
  },
  {
    name: "Freedom Health",
    logo: "https://icons.duckduckgo.com/ip3/freedomhealth.com.ico",
  },
];

function Logo({ src, name }) {
  const [error, setError] =
    useState(false);

  if (error || !src) {
    return (
      <span className="font-display text-2xl text-[hsl(215_35%_24%)]">
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      onError={() =>
        setError(true)
      }
      className="max-h-16 max-w-[220px] object-contain"
    />
  );
}

export default function Insurances() {
  return (
    <div className="bg-[hsl(206_60%_98%)]">

      <Header />

      <PageHeader
        eyebrow="About Us"
        title="Insurances Accepted"
        subtitle="We proudly partner with the following Medicare Advantage health plans to serve our patients."
      />

      <section className="py-12 lg:py-20">

        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">

          <div className="flex flex-wrap justify-center gap-6">

            {insurers.map(
              (insurer, index) => (
                <Reveal
                  key={insurer.name}
                  delay={(index % 3) * 0.08}
                  className="w-full sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]"
                >

                  <div className="flex h-48 w-full flex-col items-center justify-center gap-4 rounded-2xl border border-[hsl(205_38%_88%)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60">

                    <div className="flex h-16 items-center justify-center">

                      <Logo
                        src={insurer.logo}
                        name={insurer.name}
                      />

                    </div>

                    <h3 className="font-display text-2xl text-[hsl(215_35%_24%)]">
                      {insurer.name}
                    </h3>

                    <p className="text-base text-[hsl(215_22%_42%)]">
                      Medicare Advantage partner
                    </p>

                  </div>

                </Reveal>
              )
            )}

          </div>

          <Reveal delay={0.2}>

            <p className="mt-10 text-center text-lg text-[hsl(215_22%_42%)]">

              Don't see your plan?{" "}

              <a
                href="tel:7278619800"
                className="font-semibold text-[hsl(205_78%_42%)] underline-offset-4 hover:underline"
              >
                Call us
              </a>

              {" "}and we'll help confirm your coverage.

            </p>

          </Reveal>

        </div>
      </section>

      <Footer />

    </div>
  );
}