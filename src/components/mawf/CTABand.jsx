import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
} from "lucide-react";

import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="bg-[hsl(205_78%_44%)] py-16 lg:py-20">

      <Reveal className="mx-auto max-w-[1100px] px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">

          <div>

            <h2 className="font-display text-3xl lg:text-4xl text-white tracking-tight">
              Have a question? We're here to help.
            </h2>

            <p className="mt-3 text-lg text-white/85">
              Reach our team by message or give us a call, whichever is easiest for you.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-lg font-semibold text-[hsl(205_78%_44%)] hover:bg-[hsl(206_60%_96%)] transition-colors"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="tel:7278619800"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (727) 861-9800
            </a>

          </div>
        </div>
      </Reveal>
    </section>
  );
}