import React from "react";
import Reveal from "./Reveal";

export default function Mission() {
  return (
    <section className="bg-[hsl(206_60%_98%)] py-20 lg:py-28">

      <div className="mx-auto max-w-[900px] px-6 lg:px-10 text-center">

        <Reveal>

          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(205_38%_85%)] bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(205_78%_42%)]">

            <span className="h-2 w-2 rounded-full bg-[hsl(152_70%_52%)]" />

            Our Mission

          </span>

        </Reveal>

        <Reveal delay={0.1}>

          <p className="mt-8 font-display text-3xl lg:text-4xl leading-[1.35] text-[hsl(215_35%_24%)]">
            Our mission is to strengthen independent primary care across West Florida by uniting physicians around a shared standard of clinical excellence, integrity, and compassion. We exist so that every patient, no matter how complex their needs, has access to coordinated, excellent care, and every affiliated practice has the support it needs to thrive.
          </p>

        </Reveal>

        <Reveal delay={0.2}>

          <div className="mt-12 rounded-2xl border border-[hsl(205_38%_88%)] bg-white p-8 text-left">

            <h3 className="font-display text-2xl text-[hsl(215_35%_24%)]">
              What is an IPA?
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-[hsl(215_22%_38%)]">
              An Independent Physician Association (IPA) is a network of independent practices that team up to contract with health plans and share resources, without losing their independence. Patients get broader access to coordinated care, and doctors get stronger support.
            </p>

          </div>

        </Reveal>

      </div>
    </section>
  );
}