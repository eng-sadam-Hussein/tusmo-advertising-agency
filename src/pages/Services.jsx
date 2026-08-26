import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Lightbulb,
  Palette,
  Video,
  Megaphone,
  Globe2,
  Wand2,
} from "lucide-react";

import servicesCover from "../assets/services-cover.jpg";
import brochurePage1 from "../assets/tusmo-brochure-page-1.png";
import brochurePage2 from "../assets/tusmo-brochure-page-2.png";

const BRAND_DARK = "#0B2A4A";
const BRAND_BLUE = "#173A68";
const BRAND_ACCENT = "#24A9E0";

const creativeItems = [
  {
    title: "Creative Ideas",
    text: "Fresh ideas designed to help your brand communicate differently and stand out in a competitive market.",
    icon: Lightbulb,
  },
  {
    title: "Brand Creativity",
    text: "We create professional visual identities, campaigns, and brand experiences that people remember.",
    icon: Palette,
  },
  {
    title: "Digital Content",
    text: "Engaging social media content, promotional visuals, digital campaigns, and creative storytelling.",
    icon: Megaphone,
  },
  {
    title: "Video Experiences",
    text: "Professional video concepts, production, editing, event coverage, and powerful visual storytelling.",
    icon: Video,
  },
  {
    title: "Digital Innovation",
    text: "Modern websites, digital experiences, creative technology, and smart solutions for growing businesses.",
    icon: Globe2,
  },
  {
    title: "Motion & Visuals",
    text: "Creative motion graphics, animations, promotional designs, and visual content built for modern audiences.",
    icon: Wand2,
  },
];

export default function Services() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-900 [font-family:Inter,sans-serif]">

      {/* =========================================================
          HERO - KEEP THIS SECTION
      ========================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[420px] md:min-h-[470px]">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center"
            style={{
              backgroundImage: `url(${servicesCover})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071b30]/95 via-[#0b2a4a]/88 to-[#0b2a4a]/55" />

          <div className="absolute -left-32 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-sky-400/10 blur-[110px]" />

          <div className="relative mx-auto flex min-h-[420px] w-full max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[470px] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                <Sparkles size={14} />
                Our Services
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Creative services built to make your{" "}
                <span className="text-[#33B4E8]">
                  brand stronger
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/80 md:text-base">
                Tusmo Advert Agency provides digital marketing, branding design,
                video production, motion graphics, event management, and web
                design &amp; development.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#24A9E0] px-6 py-3.5 text-sm font-black text-white shadow-[0_15px_40px_rgba(36,169,224,.25)] transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
              >
                Get Started
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BROCHURE SECTION
      ========================================================== */}
      <section className="bg-[#f4f8fb] py-6 md:py-10">
        <div className="mx-auto w-full max-w-[1540px] px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12">
          <div className="space-y-5 md:space-y-7">

            {/* BROCHURE PAGE 1 */}
            <BrochurePage
              src={brochurePage1}
              alt="Tusmo Advertising Agency brochure page one"
              priority
            />

            {/* BROCHURE PAGE 2 */}
            <BrochurePage
              src={brochurePage2}
              alt="Tusmo Advertising Agency brochure page two"
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          INNOVATION & CREATIVITY
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">

        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF7FC] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#24A9E0]">
              <Sparkles size={14} />
              Innovation &amp; Creativity
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#173A68] md:text-5xl">
              Creative thinking that turns ideas into powerful results.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-slate-600">
              At Tusmo, creativity is more than design. We combine strategy,
              technology, storytelling, content, and professional execution to
              create work that gives brands a stronger presence and a clearer
              identity.
            </p>
          </div>

          {/* CREATIVE FEATURE AREA */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* LEFT FEATURE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#0B2A4A] via-[#123B68] to-[#17669A] p-7 text-white shadow-[0_28px_80px_rgba(11,42,74,.20)] md:p-10"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-400/20 blur-[70px]" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px]" />

              <div className="relative">
                <div className="grid h-16 w-16 place-items-center rounded-[20px] bg-white/10 text-sky-300 backdrop-blur">
                  <Lightbulb size={29} />
                </div>

                <div className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-sky-300">
                  Creative Thinking
                </div>

                <h3 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.035em] md:text-4xl">
                  We don't just create content.
                  <br />
                  We create experiences.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
                  Every project starts with an idea. We develop that idea into
                  professional branding, digital campaigns, videos, websites,
                  event experiences, and content that connects with audiences.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Original Creative Concepts",
                    "Modern Brand Experiences",
                    "Professional Execution",
                    "Audience-Focused Content",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#24A9E0]" />
                      <span className="text-sm font-bold text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#24A9E0] px-6 py-4 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
                >
                  Create With Tusmo
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT GRID */}
            <div className="grid gap-5 sm:grid-cols-2">
              {creativeItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,.05)] transition duration-300 hover:border-sky-200 hover:shadow-[0_22px_50px_rgba(15,23,42,.08)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid h-13 w-13 place-items-center rounded-[17px] bg-[#EAF7FC] p-3 text-[#24A9E0] transition duration-300 group-hover:bg-[#24A9E0] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <span className="text-[11px] font-black tracking-[0.15em] text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-[#173A68]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* FINAL CREATIVE STRIP */}
          <div className="mt-12 overflow-hidden rounded-[30px] border border-slate-200 bg-[#F7FBFD]">
            <div className="grid items-center gap-7 p-7 md:grid-cols-[1fr_auto] md:p-10">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.18em] text-[#24A9E0]">
                  Let's Build Something Different
                </div>

                <h3 className="mt-3 max-w-2xl text-2xl font-black tracking-[-0.03em] text-[#173A68] md:text-3xl">
                  Your idea can become the next strong brand experience.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Whether you need branding, content, campaigns, videos,
                  photography, events, or a modern website, Tusmo can help
                  transform your idea into professional creative work.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#173A68] px-7 py-4 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0B2A4A]"
              >
                Start Your Project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   BROCHURE PAGE COMPONENT
========================================================== */

function BrochurePage({ src, alt, priority = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="
        overflow-hidden
        rounded-[18px]
        bg-white
        shadow-[0_18px_55px_rgba(15,42,74,0.10)]
        ring-1
        ring-slate-200/70
        sm:rounded-[24px]
        lg:rounded-[28px]
      "
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        draggable="false"
        className="
          block
          h-auto
          w-full
          select-none
          object-contain
        "
      />
    </motion.div>
  );
}