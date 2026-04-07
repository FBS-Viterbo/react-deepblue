import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import ArticleGrid from "./components/ArticleGrid";
import Conservation from "./components/Conservation";
import Expedition from "./components/Expedition";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <main className="pt-18">
        <Hero />
        <ArticleCard />
        <ArticleGrid />
        <Conservation />
        <Expedition />
        <About />
      </main>
    </>
  );
}

export default App;
