import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";

import NavDropdown from "./NavDropdown";
import { doctors } from "../../data/doctors";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const aboutItems = [
    {
      label: "Our Mission",
      to: "/mission",
    },
    {
      label: "The Team",
      to: "/team",
    },
    {
      label: "Insurances Accepted",
      to: "/insurances",
    },
  ];

  /*
   * Provider ordering:
   * 1. Sonal Patel always appears first.
   * 2. Physicians appear next, alphabetically by last name.
   * 3. Nurse practitioners appear at the bottom, alphabetically by last name.
   */

  const getLastName = (name = "") => {
    return name
      .replace(
        /\b(M\.?D\.?|D\.?O\.?|F\.?A\.?C\.?P\.?|F\.?A\.?B\.?H\.?P\.?|FACP|MSN|ARNP-C|APRN-C|APRN|NP|DNP|MPH|CPE|MBA)\b/gi,
        ""
      )
      .trim()
      .split(/\s+/)
      .pop()
      ?.toLowerCase() || "";
  };

  const isNursePractitioner = (doctor) => {
    const name = doctor.name || "";
    const specialty = doctor.specialty || "";
    const title = doctor.title || "";

    const providerText = `${name} ${specialty} ${title}`;

    return /\b(ARNP|APRN|NP|DNP|Nurse Practitioner)\b/i.test(
      providerText
    );
  };

  const sortedDoctors = [...doctors].sort((a, b) => {
    const aName = (a.name || "").toLowerCase();
    const bName = (b.name || "").toLowerCase();

    // Sonal Patel is always first.
    const aIsSonal = aName.includes("sonal patel");
    const bIsSonal = bName.includes("sonal patel");

    if (aIsSonal && !bIsSonal) return -1;
    if (!aIsSonal && bIsSonal) return 1;

    // Nurse practitioners always go below physicians.
    const aIsNP = isNursePractitioner(a);
    const bIsNP = isNursePractitioner(b);

    if (aIsNP && !bIsNP) return 1;
    if (!aIsNP && bIsNP) return -1;

    // Alphabetize within each group by last name.
    return getLastName(a.name).localeCompare(
      getLastName(b.name)
    );
  });

  const doctorItems = sortedDoctors.map((doctor) => ({
    label: doctor.name || `Doctor ${doctor.id}`,
    to: `/doctors/${doctor.id}`,
  }));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-[hsl(205_38%_88%)] shadow-sm ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Medical Associates of West Florida"
        >
          <img
            src="/images/logo.jpg"
            alt="Medical Associates of West Florida"
            className="h-14 w-auto object-contain scale-[2.5] origin-left mix-blend-multiply"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="text-[17px] font-medium text-[hsl(215_35%_24%)] hover:text-[hsl(205_78%_40%)] transition-colors"
          >
            Home
          </Link>

          <NavDropdown
            label="About Us"
            items={aboutItems}
          />

          <NavDropdown
            label="Our Providers"
            items={doctorItems}
          />

          <a
            href="tel:7278619800"
            className="inline-flex items-center gap-2 text-[17px] font-medium text-[hsl(215_35%_24%)] hover:text-[hsl(205_78%_40%)] transition-colors"
          >
            <Phone className="h-4 w-4" />
            (727) 861-9800
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-lg bg-[hsl(205_78%_44%)] px-5 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-200/60 hover:bg-[hsl(205_78%_40%)] transition-colors"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setOpen((value) => !value)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[hsl(215_35%_24%)] hover:bg-[hsl(205_45%_93%)]"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-6 mt-3 rounded-2xl border border-[hsl(205_38%_88%)] bg-white p-4 shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[17px] font-medium text-[hsl(215_35%_24%)] hover:bg-[hsl(205_45%_95%)]"
            >
              Home
            </Link>

            <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(215_22%_45%)]">
              About Us
            </p>

            {aboutItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 pl-6 text-base text-[hsl(215_35%_24%)] hover:bg-[hsl(205_45%_95%)]"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => setDocsOpen((value) => !value)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-[17px] font-medium text-[hsl(215_35%_24%)] hover:bg-[hsl(205_45%_95%)]"
            >
              Our Providers

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  docsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {docsOpen && (
              <div className="max-h-64 overflow-y-auto pl-3">
                {doctorItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base text-[hsl(215_35%_24%)] hover:bg-[hsl(205_45%_95%)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[hsl(205_78%_44%)] px-5 py-3 text-base font-semibold text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}