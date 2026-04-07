import React from "react";
import { Fish, CalendarDays, User } from "lucide-react";
import articles from "../data/articles.json";

const ArticleGrid = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="wrapper flex flex-col gap-10">
          {/* top title */}
          <div className="flex items-center gap-4">
            {/* left icon circle background - black */}
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Fish className="w-7 h-7 text-primary" />
            </div>

            {/* flex col gap 2 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-heading text-text-primary">
                Marine Life
              </h2>
              <p className="text-text-muted">
                Discover the incredible creatures of our oceans
              </p>
            </div>
          </div>

          {/* cards container same as the article card*/}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* loop the cards here but this time add shadow as - Different card style (white background, shadow black), no Read Story link and no category as well */}
            {articles.map((article) => (
              <div
                key={`${article.title}-${article.date}`}
                className="group w-[340px] bg-white mx-auto shadow-[0_12px_30px_rgba(0,0,0,0.16)] rounded-xl cursor-pointer overflow-hidden font-body transition-all duration-300 hover:border hover:border-primary"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="px-[18px] pt-4 pb-5">
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

                  <h2 className="font-heading font-bold text-[17px] leading-snug text-text-primary mb-2.5 transition-colors duration-300 group-hover:text-primary">
                    {article.title}
                  </h2>

                  <p className="text-[13.5px] text-text-secondary leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;
