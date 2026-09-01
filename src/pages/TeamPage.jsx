import React from "react";
import {
  UserRound,
} from "lucide-react";
import SEO from "../components/mawf/SEO";
import Header from "../components/mawf/Header";
import Footer from "../components/mawf/Footer";
import PageHeader from "../components/mawf/PageHeader";
import Reveal from "../components/mawf/Reveal";

import { teamSections } from "../data/team";

export default function TeamPage() {
  return (
    <div className="bg-[hsl(206_60%_98%)]">

    <SEO
      title="Our Team"
      description="Meet the leadership and administrative team supporting Medical Associates of West Florida IPA and its network of independent physicians."
      path="/team"
    />

      <Header />

      <PageHeader
        eyebrow="About Us"
        title="Our Team"
        subtitle="The people behind the network, dedicated to supporting our physicians and the patients they serve."
      />

      <section className="py-12 lg:py-20">

        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 space-y-16">

          {teamSections.map(
            (section) => (
              <div key={section.title}>

                <Reveal>

                  <h2 className="font-display text-3xl lg:text-4xl text-[hsl(215_35%_24%)]">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-lg text-[hsl(215_22%_42%)]">
                    Meet the {section.title.toLowerCase()} team supporting our network.
                  </p>

                </Reveal>

                <div className="mt-8 flex flex-wrap justify-center gap-6">

                  {section.members.map(
                    (member, index) => (
                      <Reveal
                        key={index}
                        delay={(index % 4) * 0.08}
                      >

                        <div className="rounded-2xl border border-[hsl(205_38%_88%)] bg-white p-6 text-center">

                          <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-[hsl(205_50%_93%)]">

                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={
                                  member.name ||
                                  "Team member"
                                }
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <UserRound
                                className="h-12 w-12 text-[hsl(205_78%_44%)]"
                                strokeWidth={1.5}
                              />
                            )}

                          </div>

                          <h3 className="mt-5 font-display text-xl text-[hsl(215_35%_24%)]">
                            {member.name ||
                              "Add name"}
                          </h3>

                          <p className="mt-1 text-base text-[hsl(215_22%_48%)]">
                            {member.title ||
                              "Title"}
                          </p>

                        </div>

                      </Reveal>
                    )
                  )}

                </div>

              </div>
            )
          )}

        </div>
      </section>

      <Footer />

    </div>
  );
}