import { ZodiacAquarius, Menu } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
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

          {/* right */}
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

          {/* burger only visible when screen is small */}
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
