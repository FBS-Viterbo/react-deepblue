import { ZodiacAquarius, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white relative z-50">
      <div className="container mx-auto">
        <div className="wrapper flex items-center justify-between py-4">
          {/* left */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-2 rounded-full bg-primary">
              <ZodiacAquarius className="text-white w-6 h-6" />
            </div>
            <h4 className="font-heading text-text-primary text-2xl font-bold">
              DeepBlue
            </h4>
          </div>

          {/* right (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-text-secondary hover:text-primary">
              Marine Life
            </a>
            <a href="#" className="text-text-secondary hover:text-primary">
              Conservation
            </a>
            <a href="#" className="text-text-secondary hover:text-primary">
              Expedition
            </a>
            <a href="#" className="text-text-secondary hover:text-primary">
              About Us
            </a>

            <button className="btn btn--primary">Subscribe</button>
          </div>

          {/* burger */}
          <div
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full bg-primary cursor-pointer md:hidden"
          >
            {open ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
      </div>

      {/* overlay below header */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-18 left-0 w-full h-[calc(100%-64px)] bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* mobile nav */}
      <div
        className={`fixed top-[64px] right-0 h-[calc(100%-64px)] w-1/2 bg-white shadow-lg transform transition-transform duration-300 md:hidden z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 p-6">
          <a href="#" className="text-text-secondary hover:text-primary">
            Marine Life
          </a>
          <a href="#" className="text-text-secondary hover:text-primary">
            Conservation
          </a>
          <a href="#" className="text-text-secondary hover:text-primary">
            Expedition
          </a>
          <a href="#" className="text-text-secondary hover:text-primary">
            About Us
          </a>

          <button className="btn btn--primary w-full">Subscribe</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
