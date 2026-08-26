// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

const BRAND_DARK = "#0B2A4A";
const BRAND_ACCENT = "#1D9BD1";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Tusmo.Advertising/",
    icon: <Facebook size={18} />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram size={18} />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@tusmo_advert",
    icon: <FaTiktok size={16} />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <Linkedin size={18} />,
  },
  {
    name: "Website",
    href: "https://www.tusmoadvert.so",
    icon: <Globe size={18} />,
  },
];

const exploreLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Clients", to: "/clients" },
  { name: "Highlights", to: "/highlights" },
  { name: "Contact Us", to: "/contact" },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: `linear-gradient(135deg, ${BRAND_DARK} 0%, #081a2d 45%, #0d2745 100%)`,
      }}
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${BRAND_ACCENT}18` }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "#ffffff08" }}
      />

      {/* Scroll To Top Button */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className="absolute bottom-6 right-6 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 md:flex"
      >
        <ArrowUp size={20} />
      </button>

      <div className="relative mx-auto w-[92%] max-w-7xl py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {/* ABOUT */}
          <div>
            <h2 className="text-2xl font-black text-white">TUSMO</h2>
            <p className="text-sm text-white/70">Advertising Agency</p>

            <p className="mt-5 max-w-[320px] text-sm leading-7 text-white/75">
              We build premium branding, digital presence, video content, event
              visuals, and modern web experiences that help businesses grow with
              clarity, trust, and strong presentation.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 grid w-fit grid-cols-5 gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10 hover:text-white"
                >
                  <span className="transition group-hover:scale-110">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-lg font-extrabold">Explore</h3>
            <div
              className="mt-2 h-1 w-14 rounded-full"
              style={{ backgroundColor: BRAND_ACCENT }}
            />

            <ul className="mt-6 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    onClick={scrollTop}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full transition group-hover:scale-125"
                      style={{ backgroundColor: BRAND_ACCENT }}
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-extrabold">Get in Touch</h3>
            <div
              className="mt-2 h-1 w-14 rounded-full"
              style={{ backgroundColor: BRAND_ACCENT }}
            />

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-white/90" />
                <div>
                  <div className="text-sm text-white/75">+252 770656588</div>
                  <div className="text-sm text-white/75">+252 619818501</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-white/90" />
                <a
                  href="mailto:info@tusmoadvert.com"
                  className="break-words text-sm text-white/75 transition hover:text-white hover:underline"
                >
                  info@tusmoadvert.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={18} className="mt-1 shrink-0 text-white/90" />
                <a
                  href="https://www.tusmoadvert.so"
                  target="_blank"
                  rel="noreferrer"
                  className="break-words text-sm text-white/75 transition hover:text-white hover:underline"
                >
                  www.tusmoadvert.so
                </a>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-lg font-extrabold">Location</h3>
            <div
              className="mt-2 h-1 w-14 rounded-full"
              style={{ backgroundColor: BRAND_ACCENT }}
            />

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-white/90" />
                <p className="text-sm leading-7 text-white/75">
                  Bakaaro Howlwadaag
                  <br />
                  Mogadishu, Somalia
                </p>
              </div>
            </div>

            {/* Mobile scroll up */}
            <button
              onClick={scrollTop}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white/80 transition hover:-translate-y-1 hover:bg-white/10 hover:text-white md:hidden"
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm leading-7 text-white/60">
          <p>
            © 2026 Tusmo Advertising Agency. All rights reserved.
          </p>
          <p className="mt-1">
            Website-kan waxaa xuquuqdiisa leh{" "}
            <span className="font-semibold text-white/80">
              Tusmo Advertising Agency
            </span>
            , waxaana developed gareeyay{" "}
            <span className="font-semibold text-white/80">
              Eng. Saiman Hussein Mohamed
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}