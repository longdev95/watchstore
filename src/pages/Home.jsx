import React from "react";
import BestSeller from "../components/home/bestSeller/BestSeller";
import Header from "../components/home/header/Header";
import Slider from "../components/home/slider/Slider";
import Trend from "../components/home/trend/Trend";

function Home() {
  return (
    <div className="home-container relative h-[100vh] w-[100%]">
      <Header />
      <main className="home-wrapper w-[100%] top-[100px] desktop:top-[200px] tablet:top-[200px]">
        <Slider />
        <Trend />
        <BestSeller />
        <Trend />
      </main>
    </div>
  );
}

export default Home;
