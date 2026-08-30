import React from "react";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}) {
  return (
    <section className="bg-[hsl(206_60%_98%)] pt-32 pb-10 lg:pt-40 lg:pb-14">

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10 text-center">

        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[hsl(205_78%_42%)]">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[hsl(215_35%_24%)] leading-[1.08]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-xl leading-relaxed text-[hsl(215_22%_38%)] max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}