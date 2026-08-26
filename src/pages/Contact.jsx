// src/pages/Contact.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUp,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import contactCover from "../assets/contact-cover.jpg";

const BRAND_ACCENT = "#1D9BD1";
const ORANGE = "#f97316";
const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  const DATA = useMemo(
    () => ({
      hero: {
        pill: "Contact us",
        title: "Get In Touch",
        subtitle: "Start the conversation with us and unlock endless possibilities.",
      },

      topCards: [
        {
          title: "Mail Here",
          value: "info@tusmoadvert.com",
          icon: Mail,
          href: "mailto:info@tusmoadvert.com",
        },
        {
          title: "Visit Here",
          value: "Bakaaro, Howlwadaag Mogadishu, Somalia",
          icon: MapPin,
          href: "#map",
        },
        {
          title: "Call Here",
          value: "+252619818501",
          icon: Phone,
          href: "tel:+252619818501",
    
        },
      ],
      

      map: {
        embedSrc: "https://www.google.com/maps?q=2.0372133,45.3379172&z=12&output=embed",

      },



      newsletter: {
        small: "GET STARTED INSTANTLY!",
        title: "Get the only new update from this\nnewsletter",


        placeholder: "Enter your email",
        button: "Subscribe",
      },
    }),
    []
  );

  const [form, setForm] = useState({
    
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", text: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsStatus, setNewsStatus] = useState("");

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill Name, Email and Message." });
      return;
    }
    setStatus({ type: "ok", text: "Message ready. Connect an API to send it." });
  };

  const onNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      setNewsStatus("Please enter a valid email.");
      return;
    }
    setNewsStatus("Subscribed (demo). Connect your email service later.");
  };

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[280px] md:h-[340px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactCover})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_35%,rgba(255,255,255,.35),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(29,155,209,.35),transparent_55%)]" />

          <div className="relative mx-auto flex h-full w-[92%] max-w-6xl items-center justify-center">
            <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
              <motion.div
                variants={fadeUp}
                className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold text-white/90 ring-1 ring-white/20"
              >
                <Mail size={16} />
                {DATA.hero.pill}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl"
              >
                {DATA.hero.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-white/85 md:text-base"
              >
                {DATA.hero.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="bg-white">
        <div className="mx-auto w-[92%] max-w-6xl py-10 md:py-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {DATA.topCards.map((c) => (
              <ContactTopCard key={c.title} item={c} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white">
        <div className="mx-auto w-[92%] max-w-6xl pb-14 md:pb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mx-auto w-full max-w-4xl"
          >
            <motion.div variants={fadeUp} className="text-center">
              <div className="text-2xl font-black">Get In Touch</div>
              <div className="mt-2 text-sm text-slate-500">
                Start the conversation with us and unlock endless possibilities.
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp}
              onSubmit={onSubmit}
              className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input placeholder="Name" name="name" value={form.name} onChange={onChange} />
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                />
                <Input
                  placeholder="Phone number"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                />
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                />
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={7}
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-[#1D9BD1]/30 placeholder:text-slate-400 focus:bg-white focus:ring-4"
                  placeholder="Write your message..."
                />
              </div>

              {status.text ? (
                <div
                  className={`mt-4 flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
                    status.type === "ok"
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border border-rose-200 bg-rose-50 text-rose-800"
                  }`}
                >
                  {status.type === "ok" ? (
                    <CheckCircle2 size={18} className="mt-[1px]" />
                  ) : (
                    <AlertTriangle size={18} className="mt-[1px]" />
                  )}
                  <div>{status.text}</div>
                </div>
              ) : null}

              <div className="mt-6 flex items-center justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md px-7 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:opacity-95"
                  style={{ backgroundColor: BRAND_ACCENT }}
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section className="bg-white">
        <div className="mx-auto w-[92%] max-w-6xl pb-16">
          <div className="relative overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b76b7] to-[#22a2dc]" />
            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,.55),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,.25),transparent_60%)]" />

            <div className="relative px-6 py-12 text-center text-white md:px-10">
              <div className="text-[11px] font-extrabold tracking-widest text-white/85">
                {DATA.newsletter.small}
              </div>

              <div className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                {DATA.newsletter.title.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>

              <form
                onSubmit={onNewsletter}
                className="mx-auto mt-7 flex w-full max-w-2xl items-center gap-3 rounded-full bg-white px-3 py-2"
              >
                <input
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={DATA.newsletter.placeholder}
                  className="h-11 w-full bg-transparent px-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="h-11 rounded-full px-6 text-xs font-extrabold uppercase tracking-wide text-white transition hover:opacity-95"
                  style={{ backgroundColor: BRAND_ACCENT }}
                >
                  {DATA.newsletter.button}
                </button>
              </form>

              {newsStatus ? (
                <div className="mt-3 text-sm font-semibold text-white/90">{newsStatus}</div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="bg-white">
        <div className="mx-auto w-[92%] max-w-6xl pb-16">
          <div className="mb-3 text-sm font-extrabold text-slate-800">Location</div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
            <iframe
              title="map"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={DATA.map.embedSrc}
            />
          </div>

          <div className="mt-3 text-sm text-slate-600">
            <a
              className="font-semibold underline underline-offset-4"
              href="https://www.google.com/maps/place/Mogadishu,+Somalia/@2.1820731,45.2818823,300256m/data=!3m1!1e3!4m6!3m5!1s0x3d58425955ce6b53:0xbb20eaaa52cc59d9!8m2!3d2.0372133!4d45.3379172!16zL20vMGdjbGI?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={goTop}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full shadow-lg"
            style={{ backgroundColor: BRAND_ACCENT }}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="text-white" size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactTopCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.a
      variants={fadeUp}
      href={item.href}
      className="group rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <span
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-slate-200 transition"
          style={{ backgroundColor: `${BRAND_ACCENT}12`, color: BRAND_ACCENT }}
        >
          <Icon size={18} />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-black text-slate-900 transition-colors duration-300 group-hover:text-[#f97316]">
            {item.title}
          </div>
          <div className="mt-1 truncate text-sm text-slate-600">{item.value}</div>
          <div
            className="mt-3 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-14"
            style={{ backgroundColor: ORANGE }}
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.a>
  );
}

function Input({ placeholder, ...props }) {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm outline-none ring-[#1D9BD1]/30 placeholder:text-slate-400 focus:bg-white focus:ring-4"
    />
  );
}