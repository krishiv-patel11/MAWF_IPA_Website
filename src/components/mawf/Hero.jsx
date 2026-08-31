import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
} from "framer-motion";
import {
  Phone,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=900&q=80",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1100&q=80",
    span: "col-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1100&q=80",
    span: "col-span-3",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[hsl(215_35%_18%)]">

      <div className="absolute inset-0 grid grid-cols-6 grid-rows-2">

        {PHOTOS.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${photo.span}`}
          >
            <img
              src={photo.src}
              alt="Healthcare in West Florida"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />

      <div className="relative z-10 mx-auto max-w-[1400px] min-h-[100svh] px-6 lg:px-10 flex flex-col items-center justify-center pt-32 pb-24 text-center">

        <div className="max-w-4xl">

          {/* Organization Name */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[hsl(152_70%_60%)]" />
              West Florida Independent Physician Association
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-8 font-display text-5xl sm:text-6xl lg:text-[5.2rem] leading-[0.98] tracking-tight text-white"
          >
            Medical Associates
            <br />
            of West Florida

          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-8 font-display text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-tight text-white"
          >
            Independent physicians.
            <br />
            Coordinated care.
            <br />

            <span className="font-heading not-italic font-semibold text-[hsl(152_70%_60%)]">
              A healthier West Florida.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mx-auto mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/85"
          >
            Independent primary care physicians across West Florida, partnering
            with Medicare Advantage plans to deliver coordinated, personalized care.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-9 flex flex-col sm:flex-row justify-center gap-3"
          >

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(205_78%_44%)] px-7 py-4 text-lg font-semibold text-white shadow-xl shadow-black/30 hover:bg-[hsl(205_78%_40%)] transition-colors"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="tel:7278619800"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-7 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[hsl(215_35%_24%)] transition-colors"
            >
              <Phone className="h-5 w-5" />
              (727) 861-9800
            </a>

          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 z-10 flex flex-col items-center text-white/70">

        <span className="text-xs uppercase tracking-[0.2em]">
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>

      </div>
    </section>
  );
}