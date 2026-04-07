import React from "react";
import { Waves, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Marine Life", href: "#marine-life" },
    { label: "Conservation", href: "#conservation" },
    { label: "Expeditions", href: "#expeditions" },
    { label: "About Us", href: "#about" },
  ];

  const connectLinks = [
    { label: "Contact", href: "#contact" },
    { label: "Write for Us", href: "#write" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="bg-bg-dark border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500">
                <Waves className="h-5 w-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                DeepBlue
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Dedicated to exploring and preserving the wonders of our oceans.
              Educate, inspire, protect.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} DeepBlue Blog. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            Made with{" "}
            <Heart className="h-3.5 w-3.5 fill-cyan-500 text-cyan-500" /> for
            the Ocean
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
