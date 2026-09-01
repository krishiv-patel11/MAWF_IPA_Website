import React from "react";
import {
  Heart,
  ShieldCheck,
  Handshake,
  Sparkles,
} from "lucide-react";
import SEO from "../components/mawf/SEO";
import Header from "../components/mawf/Header";
import Footer from "../components/mawf/Footer";
import PageHeader from "../components/mawf/PageHeader";
import Reveal from "../components/mawf/Reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We do what is right for patients and practices, always.",
  },
  {
    icon: Heart,
    title: "Compassion",
    desc: "Care that treats the whole person, not just the condition.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    desc: "A relentless commitment to clinical and operational quality.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    desc: "Physicians and partners working as one coordinated team.",
  },
];

export default function MissionPage() {
  return (
    <div className="bg-[hsl(206_60%_98%)]">
      <SEO
        title="Our Mission"
        description="Learn about the mission of Medical Associates of West Florida IPA and our commitment to supporting independent physicians and coordinated patient care."
        path="/mission"
      />
      <Header />

      <PageHeader
        eyebrow="About Us"
        title="Our Mission"
      />

      <section className="py-12 lg:py-16">

        <div className="mx-auto max-w-[820px] px-6 lg:px-10">

          <Reveal>

            <p className="font-display text-2xl lg:text-3xl leading-[1.4] text-[hsl(215_35%_24%)]">
              Our mission is to strengthen independent primary care across West Florida by uniting physicians around a shared standard of clinical excellence, integrity, and compassion. We exist so that every patient, no matter how complex their needs, has access to coordinated, excellent care, and every affiliated practice has the support it needs to thrive.
            </p>

          </Reveal>

          <Reveal delay={0.1}>

            <p className="mt-8 text-xl leading-relaxed text-[hsl(215_22%_38%)]">
              We believe the best healthcare is local, led by physicians, and deeply human. By joining forces without losing independence, our member practices deliver the personalized attention of a small practice backed by the strength of a coordinated network.
            </p>

          </Reveal>

        </div>

      </section>

      <section className="bg-white py-16 lg:py-20">

        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">

          <Reveal className="text-center">

            <h2 className="font-display text-3xl lg:text-4xl text-[hsl(215_35%_24%)]">
              Our Values
            </h2>

            <p className="mt-4 text-lg text-[hsl(215_22%_42%)]">
              The principles that guide every decision we make.
            </p>

          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map(
              (
                {
                  icon: Icon,
                  title,
                  desc,
                },
                index
              ) => (
                <Reveal
                  key={title}
                  delay={(index % 4) * 0.08}
                >

                  <div className="h-full rounded-2xl border border-[hsl(205_38%_88%)] bg-[hsl(206_60%_98%)] p-7 text-center">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(152_70%_52%)] text-white">

                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.8}
                      />

                    </div>

                    <h3 className="mt-5 font-display text-xl text-[hsl(215_35%_24%)]">
                      {title}
                    </h3>

                    <p className="mt-2 text-[17px] leading-relaxed text-[hsl(215_22%_42%)]">
                      {desc}
                    </p>

                  </div>

                </Reveal>
              )
            )}

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}