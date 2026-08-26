import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto w-[92%] max-w-6xl py-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <div className="text-4xl font-black">404</div>
        <div className="mt-2 text-white/70">Page not found</div>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
