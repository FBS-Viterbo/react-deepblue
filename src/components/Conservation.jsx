import React from "react";
import { CalendarDays, User, Waves } from "lucide-react";

const cards = [
  {
    date: "Oct 08, 2024",
    author: "James Miller",
    title: "Coral Bleaching: A Silent Emergency",
    excerpt:
      "Rising ocean temperatures are causing widespread coral bleaching. What can we do to save these vital ecosystems?",
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&q=80",
  },
];

const Conservation = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container">
        <div className="wrapper">
          {/* Section header */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-200 shadow-sm">
              <Waves size={24} className="text-green-700" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="text-3xl md:text-4xl font-heading text-text-primary">
                Conservation
              </h2>
              <p className="font-body text-sm text-text-muted md:text-base">
                Protecting our oceans for future generations
              </p>
            </div>
          </div>

          {/* Cards container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                {/* Image - left */}
                <div className="w-32 shrink-0 sm:w-40 md:w-48">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text - right */}
                <div className="flex flex-1 flex-col justify-center gap-2 px-4 py-4 md:px-6">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] text-text-muted">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={12} />
                      {card.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {card.author}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold leading-snug text-text-primary md:text-xl">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-text-secondary md:text-base">
                    {card.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary hover:text-primary-dark md:text-base"
                  >
                    Read Story -&gt;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conservation;
