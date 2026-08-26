// src/pages/About.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Globe2,
  Leaf,
  HeartHandshake,
  Briefcase,
  Activity,
  Play,
  X,
} from "lucide-react";

// Images / Video
import aboutCover from "../assets/about-cover.jpg";
import agencyVideo from "../assets/agency-video.mp4";

// Clients logos
import c1 from "../assets/client1.png";
import c2 from "../assets/client2.png";
import c3 from "../assets/client3.png";
import c4 from "../assets/client4.png";
import c5 from "../assets/client5.png";
import c6 from "../assets/client6.png";

const BRAND_DARK = "#183763";
const BRAND_ACCENT = "#219DE1";
const HOVER_BLUE = BRAND_ACCENT;
const ORANGE = "#f97316";
const EASE = [0.16, 1, 0.3, 1];

export default function About() {
  const DATA = useMemo(
    () => ({
      brand: "Tusmo Advert Agency",
      about:
        "Tusmo Advert Agency (est. 2025) is a Mogadishu-based creative and digital marketing studio. We help brands grow through strategy, content, branding design, video production, and modern web design & development—built for attention, trust, and results.",
      vision:
        "To emerge as a trusted creative partner for ambitious brands—known for bold ideas, clean execution, and measurable growth.",
      mission:
        "To empower clients by delivering high-impact creative solutions, fostering growth, and building lasting partnerships.",
      values: ["Innovation", "Integrity", "Quality", "Client-Centric"],

      objectives: [
        {
          icon: ShieldCheck,
          title: "Client Satisfaction",
          text:
            "Achieve a client satisfaction rating of 90% or higher through feedback and continuous improvement.",
        },
        {
          icon: Layers,
          title: "Market Expansion",
          text:
            "Establish a strong presence in our target markets, with a focus on acquiring at least more clients.",
        },
        {
          icon: Briefcase,
          title: "Service Diversification",
          text:
            "Expand our service offerings to meet evolving client needs and trends in the ICT industry.",
        },
        {
          icon: Globe2,
          title: "Global Expansion",
          text:
            "Explore opportunities for international expansion, with a focus on emerging markets.",
        },
        {
          icon: Leaf,
          title: "Sustainability",
          text:
            "Implement eco-friendly practices and sustainable technologies in our operations.",
        },
        {
          icon: HeartHandshake,
          title: "Social Responsibility",
          text:
            "Actively engage in corporate social responsibility initiatives, giving back to the community.",
        },
      ],

      stats: [
        { value: 40, suffix: "+", label: "Completed Projects", icon: CheckCircle2 },
        { value: 25, suffix: "+", label: "Happy Clients", icon: HeartHandshake },
        { value: 20, suffix: "+", label: "Ongoing Projects", icon: Activity },
      ],

      ctaSmall: "SO WHAT IS NEXT?",
      ctaTitle: "Are You Ready? Let's Get\nTo Work!",
      ctaButton: "CONTACT US",
    }),
    []
  );

  const clients = useMemo(
    () => [
      { img: c1, name: "Client 1" },
      { img: c2, name: "Client 2" },
      { img: c3, name: "Client 3" },
      { img: c4, name: "Client 4" },
      { img: c5, name: "Client 5" },
      { img: c6, name: "Client 6" },
    ],
    []
  );

  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
    setTimeout(async () => {
      try {
        await videoRef.current?.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }, 80);
  };

  const closeVideo = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setIsPlaying(false);
    setShowVideo(false);
  };

  const toggleVideo = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {}
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const resetVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setIsPlaying(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && showVideo) closeVideo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showVideo]);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const onClientClick = () => {
    scrollTop();
  };

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[300px] md:h-[380px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutCover})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

          <div
            className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: `${BRAND_ACCENT}30` }}
          />
          <div
            className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(34,211,238,0.20)" }}
          />

          <div className="relative mx-auto flex h-full w-[92%] max-w-6xl items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90 ring-1 ring-white/15"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_ACCENT }} />
                <span className="tracking-wide">Company Profile</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
                className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl"
              >
                Who We Are
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.18 }}
                className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base"
              >
                Strategy-first marketing, strong branding, clean design, and video that looks premium — built to grow modern businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.24 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <Link
                  to="/services"
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  style={{ backgroundColor: BRAND_ACCENT }}
                >
                  View Services
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Talk to Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white">
        <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-1 gap-12 py-14 md:grid-cols-2 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              style={{ boxShadow: "0 18px 55px rgba(46, 78, 217, 0.82)" }}
            >
              <img
                src={aboutCover}
                alt="About media"
                className="h-[460px] w-full object-cover md:h-[560px]"
                draggable="false"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/0" />

              <button
                type="button"
                onClick={openVideo}
                className="group absolute left-1/2 top-1/2 grid h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ff2d6f] text-white shadow-lg ring-1 ring-white/20"
                aria-label="Play video"
                title="Play"
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{ boxShadow: `0 0 0 10px ${BRAND_ACCENT}40` }}
                  animate={{ scale: [1, 1.18, 1], opacity: [0.7, 0.18, 0.7] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{ boxShadow: "0 0 0 24px rgba(255,45,111,0.12)" }}
                  animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.12, 0.6] }}
                  transition={{ duration: 2.25, repeat: Infinity, ease: "easeInOut" }}
                />
                <Play className="translate-x-[1px]" size={22} />
              </button>

              <AnimatePresence>
                {showVideo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 bg-black/55" />

                    <motion.div
                      initial={{ scale: 0.98, y: 10, opacity: 0 }}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      exit={{ scale: 0.98, y: 10, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="absolute inset-3 overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10"
                    >
                      <button
                        type="button"
                        onClick={closeVideo}
                        className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
                        aria-label="Close video"
                        title="Close"
                      >
                        <X size={18} />
                      </button>

                      <video
                        ref={videoRef}
                        src={agencyVideo}
                        className="h-full w-full object-cover"
                        playsInline
                        preload="metadata"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                      />

                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15 backdrop-blur">
                        <button
                          type="button"
                          onClick={toggleVideo}
                          className="rounded-lg bg-white/10 px-4 py-2 text-xs font-extrabold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                        >
                          {isPlaying ? "Pause" : "Play"}
                        </button>

                        <button
                          type="button"
                          onClick={resetVideo}
                          className="rounded-lg bg-white/10 px-4 py-2 text-xs font-extrabold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                        >
                          Reset
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700 ring-1 ring-slate-200">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_ACCENT }} />
              <span className="tracking-wide">Company Profile</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl"
            >
              About <span style={{ color: BRAND_ACCENT }}>Us</span>
            </motion.h2>

            <div className="mt-3 h-[2px] w-full bg-slate-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="h-full"
                style={{ backgroundColor: BRAND_ACCENT }}
              />
            </div>

            <p className="mt-6 text-[15px] leading-7 text-slate-600 md:text-[15.5px]">
              {DATA.about}
            </p>

            <div className="mt-10 space-y-6">
              <div className="mt-2">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl ring-1 ring-slate-200"
                    style={{ backgroundColor: `${BRAND_ACCENT}12`, color: BRAND_ACCENT }}
                  >
                    <Layers size={18} />
                  </span>
                  <div className="text-xl font-black text-slate-900">
                    Our Core <span style={{ color: BRAND_ACCENT }}>Values</span>
                  </div>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {DATA.values.map((v, idx) => (
                    <CoreValuePill
                      key={v}
                      value={v}
                      index={idx}
                      accent={BRAND_ACCENT}
                      hoverAccent={HOVER_BLUE}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: BRAND_ACCENT }}
              >
                View Services <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 transition hover:border-sky-200 hover:bg-sky-50"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-[#f4f6fb]">
        <div className="mx-auto w-[92%] max-w-6xl py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider ring-1 ring-slate-200">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_ACCENT }} />
              <span className="text-slate-700">Objectives</span>
            </div>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Guiding Our <span style={{ color: BRAND_ACCENT }}>Path</span> to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Success</span>
                <span
                  className="absolute -bottom-1 left-0 h-[10px] w-full rounded-full opacity-25"
                  style={{ backgroundColor: BRAND_ACCENT }}
                  aria-hidden="true"
                />
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              Clear goals, premium execution, and consistent delivery—built to help clients grow with confidence.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.objectives.map((o, i) => (
              <ObjectiveCard key={o.title} item={o} index={i} accent={BRAND_ACCENT} />
            ))}
          </div>
        </div>
      </section>

      {/* PRIORITY / STATS */}
      <section className="relative overflow-hidden bg-[#f2fbff]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(11,42,74,0.25) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />

        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: `${BRAND_ACCENT}25` }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${BRAND_ACCENT}20` }}
        />

        <div className="relative mx-auto w-[92%] max-w-6xl py-20 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-black leading-tight md:text-5xl"
          >
            <span className="text-slate-900">Client expectations</span>{" "}
            <span className="text-slate-500">are our</span>
            <br />
            <span className="mt-2 inline-flex flex-wrap items-center justify-center gap-4">
              <motion.span
                className="relative inline-block"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span
                  className="bg-clip-text text-5xl font-black text-transparent md:text-6xl"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND_DARK}, ${BRAND_ACCENT}, ${ORANGE})`,
                    backgroundSize: "200% auto",
                  }}
                >
                  priority
                </span>

                <motion.span
                  className="absolute left-0 -bottom-2 h-[4px] w-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND_ACCENT}, ${ORANGE})`,
                  }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.span>
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600"
          >
            Delivering results with premium execution and reliable customer standards.
          </motion.p>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
            {DATA.stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -12 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-md transition"
                  style={{ boxShadow: "0 20px 60px rgba(2,6,23,0.06)" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND_ACCENT}18, transparent 70%)`,
                    }}
                  />

                  <motion.div
                    className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl"
                    style={{ backgroundColor: `${BRAND_ACCENT}15`, color: BRAND_ACCENT }}
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Icon size={26} />
                  </motion.div>

                  <div className="text-5xl font-black tracking-tight text-slate-900">
                    <CountUp to={s.value} run />
                    <span style={{ color: BRAND_ACCENT }}>{s.suffix}</span>
                  </div>

                  <div className="mt-3 text-sm font-semibold text-slate-600 transition group-hover:text-sky-600">
                    {s.label}
                  </div>

                  <div
                    className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-24"
                    style={{ backgroundColor: BRAND_ACCENT }}
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-200 bg-white px-8 py-8 shadow-lg md:flex md:items-center md:justify-between"
          >
            <div>
              <div className="text-3xl font-black text-slate-900">Have a project in mind?</div>
              <div className="mt-2 text-sm text-slate-600">Let’s plan it and launch it fast.</div>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl md:mt-0"
              style={{ backgroundColor: BRAND_ACCENT }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="relative bg-white">
        <div className="mx-auto w-[92%] max-w-6xl py-16 text-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto"
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-extrabold tracking-[0.2em] text-slate-600">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_ACCENT }} />
              TRUSTED PARTNERS
            </div>

            <h3 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              <span className="block">Some of Our</span>

              <span className="relative inline-flex items-center justify-center">
                <motion.span
                  animate={{ backgroundPositionX: ["0%", "200%"] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND_DARK}, ${BRAND_ACCENT}, ${BRAND_DARK})`,
                    backgroundSize: "200% auto",
                  }}
                >
                  Valued Customers
                </motion.span>

                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-1/2 h-[3px] w-40 -translate-x-1/2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND_ACCENT}, ${BRAND_DARK}, ${BRAND_ACCENT})`,
                  }}
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              A selection of organizations we’ve supported with brand, marketing, and digital solutions.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-6">
            {clients.map((c, i) => (
              <motion.button
                key={c.name}
                type="button"
                onClick={onClientClick}
                aria-label={`${c.name} (Scroll to top)`}
                title="Scroll to top"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group relative mx-auto grid w-full max-w-[190px] cursor-pointer place-items-center bg-transparent p-0"
              >
                <div className="relative grid w-full place-items-center overflow-hidden rounded-2xl">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                      backgroundImage: `url(${c.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "120px",
                      filter: "blur(0.2px)",
                      opacity: 0,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${BRAND_ACCENT}14, transparent 62%)`,
                    }}
                  />

                  <img
                    src={c.img}
                    alt={c.name}
                    className="relative h-14 w-auto max-w-[180px] object-contain opacity-95 transition duration-300 group-hover:opacity-100 md:h-16"
                    draggable="false"
                  />

                  <span
                    className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-14"
                    style={{ backgroundColor: BRAND_ACCENT }}
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="h-10 bg-[#f7fbff]" />
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutCover})` }} />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${BRAND_ACCENT}EA, ${BRAND_ACCENT}CC)`,
          }}
        />

        <div className="relative mx-auto w-[92%] max-w-6xl py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="text-[11px] font-extrabold tracking-wider text-white/85">
              {DATA.ctaSmall}
            </div>

            <div className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              {DATA.ctaTitle.split("\n").map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-xs font-extrabold uppercase tracking-wide shadow-sm hover:opacity-95"
              style={{ color: BRAND_ACCENT }}
            >
              {DATA.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll top */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition hover:-translate-y-[2px] hover:opacity-95"
          style={{ backgroundColor: BRAND_ACCENT }}
          aria-label="Scroll to top"
        >
          <IconUp />
        </button>
      )}
    </div>
  );
}

function CoreValuePill({ value, index, accent, hoverAccent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
      style={{ boxShadow: "0 10px 28px rgba(2,6,23,0.06)" }}
    >
      <span
        className="grid h-9 w-9 place-items-center rounded-xl ring-1 ring-slate-200"
        style={{ backgroundColor: `${accent}14`, color: accent }}
      >
        <IconBadgeCheck />
      </span>

      <div className="min-w-0">
        <div className="text-sm font-extrabold text-slate-900">{value}</div>
        <div className="text-[12px] text-slate-500">Core value</div>
      </div>

      <span
        className="ml-auto h-2 w-2 rounded-full opacity-70 transition group-hover:opacity-100"
        style={{ backgroundColor: hoverAccent }}
      />
    </motion.div>
  );
}

function ObjectiveCard({ item, index, accent }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      style={{ boxShadow: "0 16px 46px rgba(2,6,23,0.06)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accent}18, transparent 72%)`,
        }}
      />
      <div
        className="grid h-12 w-12 place-items-center rounded-2xl ring-1 ring-slate-200"
        style={{ backgroundColor: `${accent}14`, color: accent }}
      >
        <Icon size={22} />
      </div>

      <div className="mt-4 text-lg font-black text-slate-900">{item.title}</div>
      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>

      <div
        className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-24"
        style={{ backgroundColor: accent }}
      />
    </motion.div>
  );
}

function CountUp({ to, run = false, duration = 900 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const from = 0;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(from + (to - from) * eased);
      setVal(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, run, duration]);

  return <>{val}</>;
}

function IconBadgeCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 2.1 3.2-.4 1.2 3 3 .9-.9 3 1.6 2.8-2.8 1.6-.4 3.2-3 .9-1.2 3-3.2-.4L12 22l-2.4-2.1-3.2.4-1.2-3-3-.9.9-3L1.3 10.6l2.8-1.6.4-3.2 3-.9 1.2-3 3.2.4L12 2zm-1.2 12.1l-2-2-1.4 1.4 3.4 3.4 6.6-6.6-1.4-1.4-5.2 5.2z" />
    </svg>
  );
}

function IconUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 8 6.5 13.5 8 15l4-4 4 4 1.5-1.5L12 8z" />
    </svg>
  );
}