// src/pages/Clients.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// HERO COVER IMAGE
import clientsCover from "../assets/clients-cover.jpg";

// WATERMARK LOGO
import footerLogo from "../assets/footer-logo.png";

/* 22 CLIENT LOGOS */
import Clnt1 from "../assets/clients/Clnt1.png";
import Clnt2 from "../assets/clients/Clnt2.png";
import Clnt3 from "../assets/clients/Clnt3.png";
import Clnt4 from "../assets/clients/Clnt4.png";
import Clnt5 from "../assets/clients/Clnt5.png";
import Clnt6 from "../assets/clients/Clnt6.png";
import Clnt7 from "../assets/clients/Clnt7.png";
import Clnt8 from "../assets/clients/Clnt8.png";
import Clnt9 from "../assets/clients/Clnt9.png";
import Clnt10 from "../assets/clients/Clnt10.png";
import Clnt11 from "../assets/clients/Clnt11.png";
import Clnt12 from "../assets/clients/Clnt12.png";
import Clnt13 from "../assets/clients/Clnt13.png";
import Clnt14 from "../assets/clients/Clnt14.png";
import Clnt15 from "../assets/clients/Clnt15.png";
import Clnt16 from "../assets/clients/Clnt16.png";
import Clnt17 from "../assets/clients/Clnt17.png";
import Clnt18 from "../assets/clients/Clnt18.png";
import Clnt19 from "../assets/clients/Clnt19.png";
import Clnt20 from "../assets/clients/Clnt20.png";
import Clnt21 from "../assets/clients/Clnt21.png";
import Clnt22 from "../assets/clients/Clnt22.png";

const EASE = [0.22, 1, 0.36, 1];

export default function Clients() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const DATA = useMemo(
    () => ({
      brand: "Tusmo Advert Agency",
      tagline: "Quality never goes out of style",
    }),
    []
  );

  const CLIENTS = useMemo(
    () => [
      { name: "Client 1", logo: Clnt1 },
      { name: "Client 2", logo: Clnt2 },
      { name: "Client 3", logo: Clnt3 },
      { name: "Client 4", logo: Clnt4 },
      { name: "Client 5", logo: Clnt5 },
      { name: "Client 6", logo: Clnt6 },
      { name: "Client 7", logo: Clnt7 },
      { name: "Client 8", logo: Clnt8 },
      { name: "Client 9", logo: Clnt9 },
      { name: "Client 10", logo: Clnt10 },
      { name: "Client 11", logo: Clnt11 },
      { name: "Client 12", logo: Clnt12 },
      { name: "Client 13", logo: Clnt13 },
      { name: "Client 14", logo: Clnt14 },
      { name: "Client 15", logo: Clnt15 },
      { name: "Client 16", logo: Clnt16 },
      { name: "Client 17", logo: Clnt17 },
      { name: "Client 18", logo: Clnt18 },
      { name: "Client 19", logo: Clnt19 },
      { name: "Client 20", logo: Clnt20 },
      { name: "Client 21", logo: Clnt21 },
      { name: "Client 22", logo: Clnt22 },
    ],
    []
  );

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[260px] md:h-[320px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${clientsCover})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />

          <div className="relative mx-auto flex h-full w-[92%] max-w-6xl items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="text-center"
            >
              <div className="text-sm font-extrabold text-white/90">Our Clients</div>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Our Clients
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
                Trusted by brands we support with design, marketing, video and web solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section className="bg-white">
        <div className="mx-auto w-[92%] max-w-6xl py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-[#1677ff]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mx-auto max-w-5xl text-center">
                <div className="text-[11px] font-semibold tracking-wide text-slate-500">
                  PARTNERS & CLIENTS
                </div>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Brands we’ve worked with
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Click any logo to smoothly scroll to the top of this page.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {CLIENTS.map((c, idx) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(idx * 0.03, 0.35),
                      ease: EASE,
                    }}
                    className="group relative"
                  >
                    <button
                      type="button"
                      onClick={scrollTop}
                      aria-label={`${c.name} - Scroll to top`}
                      className="relative flex h-24 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1677ff]/30 md:h-28"
                    >
                      <img
                        src={c.logo}
                        alt={c.name}
                        draggable="false"
                        className="max-h-14 w-auto object-contain md:max-h-16"
                        loading="lazy"
                      />

                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-white/70 opacity-0 backdrop-blur-[1px] transition group-hover:opacity-100" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0b76b7] to-[#22a2dc]">
        <img
          src={footerLogo}
          alt="Tusmo watermark"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[380px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:w-[520px]"
          draggable="false"
        />

        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto w-[92%] max-w-6xl py-16 text-center text-white">
          <div className="text-[11px] font-semibold tracking-wide text-white/85">
            NEXT STEP
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-3 text-3xl font-extrabold md:text-4xl"
          >
            Want your brand here too?
          </motion.h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
            Let’s discuss your goals and build something professional together.
          </p>

          <Link
            to="/contact"
            onClick={scrollTop}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-[#0b76b7] hover:opacity-95"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}