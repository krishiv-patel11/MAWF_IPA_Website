import React from "react";
import { Link, useParams } from "react-router-dom";
import { UserRound, ArrowLeft } from "lucide-react";

import Header from "../components/mawf/Header";
import Footer from "../components/mawf/Footer";
import PageHeader from "../components/mawf/PageHeader";
import { getDoctor } from "../data/doctors";

export default function DoctorBio() {
  const { id } = useParams();
  const doctor = getDoctor(id);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-[hsl(206_60%_98%)]">
        <Header />

        <PageHeader
          eyebrow="Our Doctors"
          title="Doctor Not Found"
          subtitle="The requested physician profile could not be found."
        />

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-lg leading-relaxed text-[hsl(215_22%_42%)]">
              We couldn't find the requested doctor.
            </p>

            <Link
              to="/team"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[hsl(205_78%_44%)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Our Doctors
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  const displayName = doctor.name || `Doctor ${doctor.id}`;
  const specialty = doctor.specialty || "Medical Associates of West Florida";

  return (
    <div className="min-h-screen bg-[hsl(206_60%_98%)]">
      <Header />

      <PageHeader
        eyebrow="Our Doctors"
        title={displayName}
        subtitle={specialty}
      />

      <main className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-5xl">

          {/* Doctor profile */}
          <section className="overflow-hidden rounded-3xl border border-[hsl(205_38%_88%)] bg-white shadow-sm">

            <div className="grid lg:grid-cols-[320px_1fr]">

              {/* Photo */}
              <div className="flex items-center justify-center bg-[hsl(205_50%_93%)] p-10 lg:p-12">
                <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-8 border-white shadow-sm lg:h-64 lg:w-64">
                  {doctor.photo ? (
                    <img
                      src={doctor.photo}
                      alt={displayName}
                      className="h-full w-full object-cover"
                      style={{
                        objectPosition: doctor.imagePosition || "50% 50%",
                      }}
                    />
                  ) : (
                    <UserRound
                      className="h-24 w-24 text-[hsl(205_78%_44%)]"
                      strokeWidth={1.25}
                    />
                  )}
                </div>
              </div>

              {/* Doctor information */}
              <div className="p-8 sm:p-10 lg:p-12">

                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(205_78%_44%)]">
                  Medical Associates of West Florida
                </p>

                <h2 className="mt-3 font-display text-4xl leading-tight text-[hsl(215_35%_24%)] sm:text-5xl">
                  {displayName}
                </h2>

                <p className="mt-4 text-xl text-[hsl(215_22%_42%)]">
                  {specialty}
                </p>

                <div className="mt-7 h-px bg-[hsl(205_38%_88%)]" />

                <p className="mt-7 text-base leading-7 text-[hsl(215_22%_42%)]">
                  Providing thoughtful, compassionate care to patients
                  throughout West Florida.
                </p>

              </div>
            </div>

            {/* Biography */}
            <div className="border-t border-[hsl(205_38%_88%)] px-8 py-10 sm:px-10 lg:px-12 lg:py-12">

              <h3 className="font-display text-3xl text-[hsl(215_35%_24%)]">
                About {displayName.split(",")[0]}
              </h3>

              {doctor.bio ? (
                <div className="mt-6 max-w-4xl space-y-5">
                  {doctor.bio
                    .split(/\n\s*\n/)
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-lg leading-8 text-[hsl(215_22%_38%)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              ) : (
                <p className="mt-6 text-lg leading-8 text-[hsl(215_22%_42%)]">
                  Doctor information will be added soon.
                </p>
              )}

            </div>
          </section>

          {/* Back link */}
          <div className="mt-8">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(205_78%_44%)] transition hover:opacity-75"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Our Doctors
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}