import React from "react";
import Header from "../components/home/header/Header";
import Slider from "../components/home/slider/Slider";
import Trend from "../components/home/trend/Trend";

function Home() {
  return (
    <div className="home-container relative h-[100vh] w-[100%]">
      <Header />
      <main className="home-wrapper w-[100%] desktop:top-[200px] tablet:top-[200px]">
        <Slider />
        <Trend />
        <Trend />
      </main>
    </div>
  );
}

export default Home;
