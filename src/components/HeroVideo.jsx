import React from "react";
import heroVideo from "../assets/hero.mp4";

/**
 * mode:
 * - "cover"  => fills hero area (may crop a bit, but looks premium)
 * - "contain"=> shows full video (may add small side/top space)
 *
 * For "fit" on large screens without ugly crop, use:
 * mode="cover" + objectPosition="center"
 * AND we control hero height with clamp + aspect ratio wrapper.
 */
export default function HeroVideo({
  pill,
  title,
  subtitle,
  cta,
  mode = "cover",
  objectPosition = "center",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Responsive height: not too tall on big screens, not too short on small */}
      <div
        className="
          relative w-full
          [height:clamp(520px,72vh,860px)]
          md:[height:clamp(560px,78vh,900px)]
        "
      >
        {/* Aspect-ratio safety layer (prevents weird stretching on ultra-wide screens) */}
        <div className="absolute inset-0">
          <video
            className={[
              "absolute inset-0 h-full w-full",
              mode === "contain" ? "object-contain" : "object-cover",
            ].join(" ")}
            style={{ objectPosition }}
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />

          {/* overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/10 via-slate-950/45 to-slate-950/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-6xl flex-col justify-center gap-4 py-14 md:py-20">
          {pill ? (
            <div className="w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90">
              {pill}
            </div>
          ) : null}

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl md:leading-[1.05]">
            {title}
          </h1>

          {subtitle ? (
            <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {subtitle}
            </p>
          ) : null}

          {cta ? <div className="pt-2">{cta}</div> : null}
        </div>
      </div>

      {/* Optional bottom fade for nice transition */}
      <div className="pointer-events-none h-10 w-full bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
