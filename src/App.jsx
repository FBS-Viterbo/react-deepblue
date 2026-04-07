import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import ArticleGrid from "./components/ArticleGrid";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ArticleCard />
      <ArticleGrid />
    </>
  );
}

export default App;
