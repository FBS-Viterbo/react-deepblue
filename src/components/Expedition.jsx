import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import articles from "../data/articles.json";

const expeditionsArticles = articles.filter(
  (article) => article.category === "Expeditions",
);

const Expedition = () => {
  return (
    <section id="expeditions" className="bg-bg-dark py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3 md:mb-12">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <ArrowRight className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Expeditions
            </h2>
            <p className="text-sm text-text-muted">
              Journeys to the most remote corners of the ocean
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          {expeditionsArticles.map((article) => (
            <div
              key={`${article.title}-${article.date}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              style={{ aspectRatio: "16/10" }}
            >
              {/* Full-bleed image */}
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent" />

              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                {/* Date + Author row */}
                <div className="mb-2 flex items-center gap-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </span>
                  {article.author && (
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      {article.author}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-serif text-lg font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-xl md:text-2xl leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="line-clamp-2 text-sm text-slate-300 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expedition;
