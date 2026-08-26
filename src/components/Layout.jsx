import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const BRAND_DARK = "#0B2A4A";
const BRAND_ACCENT = "#1D9BD1";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [loc.pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/clients", label: "Clients" },
    { to: "/highlights", label: "Highlights" },
    { to: "/contact", label: "Contact us" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .tusmo-font { font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; }
      `}</style>

      <header
        className={[
          "fixed inset-x-0 top-0 z-50 border-b transition",
          solid
            ? "border-slate-200 bg-white/80 backdrop-blur"
            : "border-transparent bg-white",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[72px] w-[92%] max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 blur-md transition group-hover:opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_ACCENT}33, ${BRAND_DARK}22)`,
                }}
              />
              <img
                src={logo}
                alt="Tusmo Advertising Logo"
                className="relative h-40 w-40 rounded-2xl object-cover"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) =>
                  [
                    "group relative rounded-xl px-3 py-2 text-sm font-semibold transition",
                    isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{it.label}</span>

                    <span
                      className={[
                        "absolute left-2 right-2 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-300",
                        isActive ? "scale-x-100" : "group-hover:scale-x-100",
                      ].join(" ")}
                      style={{
                        background: `linear-gradient(90deg, ${BRAND_ACCENT}, ${BRAND_DARK})`,
                      }}
                    />

                    <span
                      className={[
                        "absolute inset-0 rounded-xl opacity-0 transition",
                        isActive ? "opacity-100" : "group-hover:opacity-100",
                      ].join(" ")}
                      style={{
                        background: `linear-gradient(135deg, ${BRAND_ACCENT}14, ${BRAND_DARK}10)`,
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-[1px] hover:opacity-95"
              style={{ backgroundColor: BRAND_ACCENT }}
            >
              Get Started
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid place-items-center rounded-xl border border-slate-200 bg-white p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 rounded bg-slate-900" />
            <span className="my-1 block h-0.5 w-6 rounded bg-slate-900" />
            <span className="block h-0.5 w-6 rounded bg-slate-900" />
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto w-[92%] max-w-6xl py-3">
              <div className="flex flex-col gap-2">
                {nav.map((it) => (
                  <NavLink
                    key={it.to}
                    to={it.to}
                    className={({ isActive }) =>
                      [
                        "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition",
                        isActive
                          ? "border-slate-200 bg-slate-50 text-slate-900"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      ].join(" ")
                    }
                    style={({ isActive }) =>
                      isActive
                        ? { boxShadow: `inset 0 0 0 1px ${BRAND_ACCENT}55` }
                        : undefined
                    }
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: BRAND_ACCENT }}
                      />
                      {it.label}
                    </span>
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  className="rounded-xl px-4 py-3 text-sm font-extrabold text-white"
                  style={{ backgroundColor: BRAND_ACCENT }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="pt-[72px]">
        <div className="tusmo-font">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}