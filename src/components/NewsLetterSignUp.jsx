import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) return;
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-primary-dark py-20 md:py-28"
    >
      {/* Subtle radial highlight top-left, matching the image */}
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        {/* Heading */}
        <h2 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
          Dive Deeper
        </h2>

        {/* Subtext */}
        <p className="mb-8 text-base leading-relaxed text-white sm:text-lg">
          Join 15,000+ ocean enthusiasts. Get the latest marine biology
          discoveries and conservation news delivered to your inbox weekly.
        </p>

        {/* Input + Button row */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Enter your email address"
            className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-sm outline-none transition focus:border-white/40 focus:bg-white/15 sm:w-80"
          />
          <button
            onClick={handleSubscribe}
            className="w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 active:scale-95"
          >
            Subscribe
          </button>
        </div>

        {/* No spam note */}
        <p className="mt-4 text-xs text-cyan-400">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
