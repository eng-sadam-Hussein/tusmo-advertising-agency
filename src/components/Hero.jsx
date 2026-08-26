import React from "react";
import heroImg from "../assets/hero.png";

export default function Hero({
  pill,
  title,
  subtitle,
  cta,
  mode = "cover",
  objectPosition = "center",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      <div
        className="
          relative w-full
          [height:clamp(520px,72vh,860px)]
          md:[height:clamp(590px,88vh,900px)]
        "
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Hero background"
            className={[
              "absolute inset-0 h-900 w-900px",
              mode === "contain" ? "object-contain" : "object-cover",
            ].join(" ")}
            style={{ objectPosition }}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-slate-950/55 to-slate-950/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-6xl flex-col justify-center gap-4 py-14 md:py-20 text-white">
          {pill && (
            <div className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">
              {pill}
            </div>
          )}

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl md:leading-[1.05]">
            {title}
          </h1>

          {subtitle && (
            <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {subtitle}
            </p>
          )}

          {cta && <div className="pt-2">{cta}</div>}
        </div>
      </div>

      <div className="pointer-events-none h-10 w-full bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
