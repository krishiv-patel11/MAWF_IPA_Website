import React from "react";
import {
  ShieldPlus,
  Wallet,
  GraduationCap,
  LineChart,
  ClipboardList,
  HeartPulse,
  Receipt,
  FileCheck2,
  ServerCog,
  BriefcaseBusiness,
  BadgeCheck,
  Handshake,
} from "lucide-react";

import Reveal from "./Reveal";

const services = [
  {
    icon: ShieldPlus,
    title: "Medicare Advantage Risk Contracting",
    desc: "Delegated risk arrangements with Medicare Advantage plans across West Florida.",
  },
  {
    icon: Wallet,
    title: "Monthly Financial Settlements",
    desc: "Transparent capitation and shared savings settlements with clear reporting.",
  },
  {
    icon: GraduationCap,
    title: "Risk Adjustment Education",
    desc: "Practical MRA training and documentation coaching for affiliated practices.",
  },
  {
    icon: LineChart,
    title: "Service Fund Analysis & Forecasting",
    desc: "Projections guided by data that keep your practice financially resilient.",
  },
  {
    icon: ClipboardList,
    title: "Utilization Management",
    desc: "Coordinated review that ensures appropriate, efficient care centered on the patient.",
  },
  {
    icon: HeartPulse,
    title: "Case & Disease Management",
    desc: "Dedicated nurses guiding complex patients through every step of care.",
  },
  {
    icon: Receipt,
    title: "Claims Analysis",
    desc: "Granular claims review to surface gaps and protect practice revenue.",
  },
  {
    icon: FileCheck2,
    title: "HEDIS Guidance & Education",
    desc: "Continuous quality measure optimization with proactive outreach.",
  },
  {
    icon: ServerCog,
    title: "Software & EDI Support",
    desc: "Technical onboarding and EDI connectivity between practices and payers.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practice Management Consulting",
    desc: "Operational tuning for scheduling, coding, and front office operations.",
  },
  {
    icon: BadgeCheck,
    title: "Credentialing Verification",
    desc: "Complete credentialing and recredentialing with health plans.",
  },
  {
    icon: Handshake,
    title: "Contract Negotiations",
    desc: "Experienced advocacy securing favorable terms for our network.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <Reveal className="max-w-2xl">

          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[hsl(205_78%_42%)]">
            What We Offer
          </span>

          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-[hsl(215_35%_24%)] tracking-tight">
            Our Services
          </h2>

          <p className="mt-5 text-xl leading-relaxed text-[hsl(215_22%_38%)]">
            A complete operational backbone for independent practices, from risk contracting and credentialing to clinical quality and revenue integrity.
          </p>

        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map(
            ({ icon: Icon, title, desc }, index) => (
              <Reveal
                key={title}
                delay={(index % 3) * 0.08}
              >
                <article className="group h-full rounded-2xl border border-[hsl(205_38%_88%)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(152_70%_52%)] hover:shadow-xl hover:shadow-emerald-50">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(205_78%_44%)] text-white transition-colors group-hover:bg-[hsl(152_70%_52%)]">
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-5 font-display text-2xl text-[hsl(215_35%_24%)] leading-snug">
                    {title}
                  </h3>

                  <p className="mt-3 text-[17px] leading-relaxed text-[hsl(215_22%_42%)]">
                    {desc}
                  </p>

                </article>
              </Reveal>
            )
          )}

        </div>
      </div>
    </section>
  );
}