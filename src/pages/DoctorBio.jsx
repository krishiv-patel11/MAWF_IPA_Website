import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  UserRound,
  ArrowLeft,
} from "lucide-react";

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
        />

        <section className="pb-24 px-6">

          <div className="mx-auto max-w-xl text-center">

            <p className="text-lg text-[hsl(215_22%_42%)]">
              We couldn't find the requested doctor.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[hsl(205_78%_44%)] px-6 py-3 font-semibold text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Home
            </Link>

          </div>

        </section>

        <Footer />

      </div>
    );
  }

  const displayName =
    doctor.name ||
    `Doctor ${doctor.id}`;

  return (
    <div className="bg-[hsl(206_60%_98%)] min-h-screen">

      <Header />

      <PageHeader
        eyebrow="Our Doctors"
        title={displayName}
        subtitle={
          doctor.specialty ||
          "Medical Associates of West Florida"
        }
      />

      <section className="pb-20 lg:pb-28">

        <div className="mx-auto max-w-[900px] px-6 lg:px-10">

          <div className="rounded-3xl border border-[hsl(205_38%_88%)] bg-white p-8 lg:p-12">

            <div className="flex flex-col items-center text-center">

              <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-[hsl(205_50%_93%)]">

                {doctor.photo ? (
                  <img
                    src={doctor.photo}
                    alt={displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound
                    className="h-16 w-16 text-[hsl(205_78%_44%)]"
                    strokeWidth={1.5}
                  />
                )}

              </div>

              <h2 className="mt-7 font-display text-3xl text-[hsl(215_35%_24%)]">
                {displayName}
              </h2>

              <p className="mt-2 text-lg text-[hsl(215_22%_42%)]">
                {doctor.specialty ||
                  "Physician"}
              </p>

            </div>

            {doctor.bio ? (
              <div className="mt-10 border-t border-[hsl(205_38%_88%)] pt-8">

                <h3 className="font-display text-2xl text-[hsl(215_35%_24%)]">
                  About the Doctor
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-[hsl(215_22%_38%)]">
                  {doctor.bio}
                </p>

              </div>
            ) : (
              <div className="mt-10 border-t border-[hsl(205_38%_88%)] pt-8 text-center">

                <p className="text-lg text-[hsl(215_22%_42%)]">
                  Doctor information will be added soon.
                </p>

              </div>
            )}

          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}