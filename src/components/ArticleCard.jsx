import React, { useState } from "react";
import { X, CalendarDays, User, Fish } from "lucide-react";
import articles from "../data/articles.json";
import SearchBar from "./SearchBar";

const ArticleCard = () => {
  const [search, setSearch] = useState("");

  const clearSearch = () => setSearch("");
  const filteredArticles = articles.filter((article) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.author.toLowerCase().includes(query)
    );
  });

  return (
    <section className="py-12 bg-bg-light">
      <div className="container">
        <div className="wrapper flex flex-col gap-2">
          <div className=" flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* left: heading */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-heading text-text-primary">
                Latest Stories
              </h2>
              <p className="text-text-muted">
                Curated insight from the frontlines of oceanography
              </p>
            </div>

            {/* right: search */}
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClear={clearSearch}
              placeholder="Search stories..."
            />
          </div>

          {search.trim() && (
            <p className="text-sm text-text-muted mb-6">
              {filteredArticles.length} result
              {filteredArticles.length !== 1 ? "s" : ""} found for "{search}"
            </p>
          )}

          {/* cards and results content */}
          <div className="mt-10">
            {/* cards container max col = 3 then add rows accordingly, like flex box or use grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-6 cursor-pointer">
              {filteredArticles.map((article) => (
                <div
                  key={`${article.title}-${article.date}`}
                  className="group w-[340px] bg-white border border-slate-200 mx-auto h-[420px] rounded-xl overflow-hidden font-body transition-all duration-300 hover:border-primary"
                >
                  {/* Image + Badge */}
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-white text-primary text-[10px] font-medium tracking-widest px-2.5 py-1 rounded">
                      {article.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-[18px] pt-4 pb-5">
                    {/* Meta */}
                    <div className="flex items-center gap-3.5 text-text-muted text-[12.5px] mb-2.5">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={13} />
                        {article.author}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading font-bold text-[17px] leading-snug text-text-primary mb-2.5 transition-colors duration-300 group-hover:text-primary">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[13.5px] text-text-secondary leading-relaxed mb-3.5">
                      {article.excerpt}
                    </p>

                    {/* Link */}
                    <a
                      href="#"
                      className="text-[13.5px] font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      Read Story →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredArticles.length === 0 && search.trim() && (
            <div className="flex flex-col items-center justify-center min-h-75 text-center gap-4">
              <div className="flex items-center justify-center rounded-full p-3 bg-primary/10">
                <Fish className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-text-primary">
                No stories found
              </h3>

              <p className="max-w-md text-text-muted leading-relaxed">
                We couldn't find any articles matching "{search}". Try searching
                for a different title or author, or clear your search to see all
                stories.
              </p>

              <button
                onClick={clearSearch}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                <X className="w-4 h-4" />
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
