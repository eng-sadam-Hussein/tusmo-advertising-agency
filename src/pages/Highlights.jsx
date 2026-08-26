// src/pages/Highlights.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Hero image */
import highlightHero from "../assets/clients/highlite.png";

/* Thumbnails */
import hl01 from "../assets/highlights/hl01.jpg";
import hl02 from "../assets/highlights/hl02.jpg";
import hl03 from "../assets/highlights/hl03.jpg";
import hl04 from "../assets/highlights/hl04.jpg";
import hl05 from "../assets/highlights/hl05.jpg";
import hl06 from "../assets/highlights/hl06.jpg";
import hl07 from "../assets/highlights/hl07.jpg";
import hl08 from "../assets/highlights/hl08.jpg";
import hl09 from "../assets/highlights/hl09.jpg";
import hl10 from "../assets/highlights/hl10.jpg";
import hl11 from "../assets/highlights/hl11.jpg";
import hl12 from "../assets/highlights/hl12.jpg";
import hl13 from "../assets/highlights/hl13.jpg";
import hl14 from "../assets/highlights/hl14.jpg";
import hl15 from "../assets/highlights/hl15.jpg";

/* Watermark logo for CTA */
import footerLogo from "../assets/footer-logo.png";

const EASE = [0.22, 1, 0.36, 1];
const BRAND_DARK = "#0B2A4A";
const BRAND_ACCENT = "#1D9BD1";

export default function Highlights() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const PROJECTS = useMemo(
    () => [
      {
        title: "DHALAAL HYGIENE",
        category: "Brand Identity",
        image: hl01,
        href: "https://www.behance.net/gallery/235637895/-BRAND-IDENTITY",
      },
      {
        title: "SWEDISH SOMALI NETWORK",
        category: "Brand Identity",
        image: hl02,
        href: "https://www.behance.net/gallery/237486943/BRAND-IDENTITY-SWEDISH-SOMALI-NETWORK",
      },
      {
        title: "CIID COMPANY",
        category: "Brand Identity",
        image: hl03,
        href: "https://www.behance.net/gallery/235493211/CIID-COMPANY-BRAND-IDENTITY",
      },
      {
        title: "7 MAALIN COMPANY",
        category: "Brand Identity",
        image: hl04,
        href: "https://www.behance.net/gallery/233912221/7-MAALIN-COMPANY-BRAND-IDENTITY",
      },
      {
        title: "RESEARCH & DATA INSIGHTS CONSULTANCY",
        category: "Brand Identity",
        image: hl05,
        href: "https://www.behance.net/gallery/232646537/RESEARCH-DATA-INSIGHTS-CONSULTANCY-BRAND-IDENTITY",
      },
      {
        title: "FAWAAKIH FOOD COMPANY",
        category: "Branding / Packaging",
        image: hl06,
        href: "https://www.behance.net/gallery/233003205/FAWAAKIH-FOOD-COMPANY",
      },
      {
        title: "BLIP CAFE",
        category: "Brand Identity",
        image: hl07,
        href: "https://www.behance.net/gallery/233560879/BLIP-CAFE-BRAND-IDENTITY",
      },
      {
        title: "GOB COMPANY",
        category: "Social Media Posters",
        image: hl08,
        href: "https://www.behance.net/gallery/235037843/SOCIAL-MEDIA-POSTERS-DESIGN-GOB-COMPANY",
      },
      {
        title: "ALIZA COLLECTION",
        category: "Brand Identity",
        image: hl09,
        href: "https://www.behance.net/gallery/233817413/ALIZA-COLLECTION-BRAND-IDENTITY",
      },
      {
        title: "KARAAMA COMPUTERS",
        category: "Brand Identity",
        image: hl10,
        href: "https://www.behance.net/gallery/234090687/KARAAMA-COMPUTERS-BRAND-IDENTITY",
      },
      {
        title: "FATXI DENTAL",
        category: "Brand Identity",
        image: hl11,
        href: "https://www.behance.net/gallery/234412765/FATXI-DENTAL-BRAND-IDENTITY",
      },
      {
        title: "TOPLUU",
        category: "Brand Identity",
        image: hl12,
        href: "https://www.behance.net/gallery/232667237/TOPLUU-BRAND-IDENTITY",
      },
      {
        title: "CAAWIYE REPAIR",
        category: "Brand Identity",
        image: hl13,
        href: "https://www.behance.net/gallery/232648507/CAAWIYE-REPAIR-BRAND-IDENTITY",
      },
      {
        title: "ABIRSOM",
        category: "Social Media Posters",
        image: hl14,
        href: "https://www.behance.net/gallery/236972831/ABIRSOM-SOCIAL-MEDIA-POSTERS",
      },
      {
        title: "MASTER ELECTRONICS",
        category: "Brand Identity",
        image: hl15,
        href: "https://www.behance.net/gallery/233564957/MASTER-ELECTRONICS-BRAND-IDENTITY",
      },
    ],
    []
  );

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[240px] sm:h-[300px] md:h-[380px] lg:h-[320px]">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${highlightHero})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundColor: BRAND_DARK,
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/55" />

          <div className="relative mx-auto flex h-full w-[92%] max-w-6xl items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-wide text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                HIGHLIGHTS
              </div>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                A curated selection of our brand identity, social media design, and creative work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#f6f7f9]">
        <div className="mx-auto w-[92%] max-w-6xl py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold tracking-[0.22em] text-slate-700 shadow-sm ring-1 ring-slate-200">
              <span className="h-[2px] w-6 rounded-full bg-sky-500" />
              OUR LATEST PROJECTS
              <span className="h-[2px] w-6 rounded-full bg-sky-500" />
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Our Latest Projects
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Tap any card to open Behance.
            </p>
          </motion.div>

          {/* MOBILE */}
          <div className="mt-10 space-y-7 md:hidden">
            {PROJECTS.map((p, idx) => (
              <MobileProjectCard key={p.href} p={p} index={idx} />
            ))}
          </div>

          {/* DESKTOP */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3"
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.href} p={p} />
            ))}
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

        <div className="mx-auto w-[92%] max-w-6xl py-14 text-center text-white md:py-16">
          <div className="text-[11px] font-semibold tracking-wide text-white/85">
            SO WHAT’S NEXT?
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mt-3 text-3xl font-extrabold md:text-4xl"
          >
            Ready to build something premium for your brand?
          </motion.h3>

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

/* MOBILE CARD */

function MobileProjectCard({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: EASE, delay: Math.min(index * 0.03, 0.18) }}
      className="group"
    >
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${p.title} on Behance`}
        className="relative block overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-black/5"
      >
        <div className="relative h-[260px]">
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover"
            loading="lazy"
            draggable="false"
          />

          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="text-[11px] font-semibold text-white/80">{p.category}</div>

            <div className="mt-1 pr-14 text-xl font-black leading-snug tracking-tight text-white">
              {p.title}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-xs font-extrabold text-sky-600">
                View Details
              </span>

              <span className="grid h-10 w-10 place-items-center rounded-full bg-black/35 text-white ring-1 ring-white/15">
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

/* DESKTOP CARD */

function ProjectCard({ p }) {
  return (
    <motion.article
      variants={fadeUp()}
      className="group"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${p.title} on Behance`}
        className="relative block overflow-hidden rounded-[28px] bg-slate-100 ring-1 ring-black/5"
        style={{ boxShadow: "0 22px 70px rgba(2,6,23,0.14)" }}
      >
        <div className="relative h-[420px] md:h-[460px]">
          <motion.img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.7, ease: EASE }}
            loading="lazy"
            draggable="false"
          />

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),rgba(0,0,0,0.45))]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <div className="text-sm font-medium text-white/85">{p.category}</div>

            <div className="mt-2 max-w-[18ch] text-3xl font-black leading-[1.05] tracking-tight text-white md:text-[34px]">
              {p.title}
            </div>

            <div className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-sky-600 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition group-hover:-translate-y-[1px] group-hover:shadow-[0_22px_55px_rgba(0,0,0,0.45)]">
              View Details
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
        </div>
      </a>
    </motion.article>
  );
}

/* helpers */

function fadeUp() {
  return {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
}

function stagger(step = 0.08) {
  return { hidden: {}, show: { transition: { staggerChildren: step } } };
}