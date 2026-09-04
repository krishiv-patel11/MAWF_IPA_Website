import React from "react";
import { Link } from "react-router-dom";
import { doctors } from "../../data/doctors";
import {
  Activity,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  /*
   * Provider ordering:
   * 1. Physicians appear first, alphabetically by last name.
   * 2. Nurse practitioners appear at the bottom, alphabetically by last name.
   * 3. Sonal Patel is treated like every other physician and appears
   *    in her normal alphabetical position.
   */

  const getLastName = (name = "") => {
    // Remove credentials after the comma first.
    const providerName = name.split(",")[0].trim();

    return (
      providerName
        .split(/\s+/)
        .pop()
        ?.toLowerCase() || ""
    );
  };

  const isNursePractitioner = (doctor) => {
    const name = doctor.name || "";
    const specialty = doctor.specialty || "";
    const title = doctor.title || "";

    const providerText = `${name} ${specialty} ${title}`;

    return /\b(ARNP|APRN|APRN-C|FNP-C|NP|DNP|Nurse Practitioner)\b/i.test(
      providerText
    );
  };

  const sortedDoctors = [...doctors].sort((a, b) => {
    const aIsNP = isNursePractitioner(a);
    const bIsNP = isNursePractitioner(b);

    // Physicians first, nurse practitioners second.
    if (aIsNP && !bIsNP) return 1;
    if (!aIsNP && bIsNP) return -1;

    // Alphabetize within each group by last name.
    const lastNameComparison = getLastName(a.name).localeCompare(
      getLastName(b.name)
    );

    if (lastNameComparison !== 0) {
      return lastNameComparison;
    }

    // If two providers have the same last name,
    // alphabetize by full name.
    return (a.name || "").localeCompare(b.name || "");
  });

  return (
    <footer className="bg-[hsl(215_35%_24%)] text-white/75">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                <Activity
                  className="h-5 w-5 text-[hsl(152_70%_60%)]"
                  strokeWidth={2.4}
                />
              </span>

              <span className="leading-tight">
                <span className="block font-display text-xl text-white">
                  Medical Associates
                </span>

                <span className="block text-[11px] uppercase tracking-[0.22em] text-white/55">
                  of West Florida Network
                </span>
              </span>
            </div>

            <p className="mt-5 text-base leading-relaxed text-white/55 max-w-xs">
              A network of independent primary care physicians serving the greater West Florida community.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Explore
            </h4>

            <ul className="mt-5 space-y-3 text-lg">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/mission"
                  className="hover:text-white transition-colors"
                >
                  Our Mission
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="hover:text-white transition-colors"
                >
                  The Team
                </Link>
              </li>

              <li>
                <Link
                  to="/insurances"
                  className="hover:text-white transition-colors"
                >
                  Insurances Accepted
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Our Providers
            </h4>

            <ul className="mt-5 space-y-2 text-lg max-h-48 overflow-y-auto pr-2">
              {sortedDoctors.map((doctor) => (
                <li key={doctor.id}>
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {(doctor.name || `Doctor ${doctor.id}`).split(",")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Get in touch
            </h4>

            <ul className="mt-5 space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-[hsl(152_70%_60%)] shrink-0" />

                <span className="text-white/80">
                  7575 State Rd 52, Hudson, FL,
                  34667
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[hsl(152_70%_60%)]" />

                <a
                  href="tel:7278619800"
                  className="hover:text-white transition-colors"
                >
                  (727) 861-9800
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[hsl(152_70%_60%)]" />

                <a
                  href="mailto:info@mawfipa.com"
                  className="hover:text-white transition-colors"
                >
                  info@mawfipa.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-base text-white/45">
          <p>
            © {new Date().getFullYear()} Medical Associates of West Florida Network. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/"
              className="hover:text-white"
            >
              Web Policies
            </Link>

            <Link
              to="/"
              className="hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/"
              className="hover:text-white"
            >
              Accessibility
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}