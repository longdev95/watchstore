import React from "react";
import BestSeller from "../components/home/bestSeller/BestSeller";
import Header from "../components/home/header/Header";
import Slider from "../components/home/slider/Slider";
import Trend from "../components/home/trend/Trend";

function Home() {
  console.log("Home is rendering");
  return (
    <div className="home-container relative h-[100vh] w-[100%]">
      <Header />
      <main className="home-wrapper w-[100%] top-[100px] desktop:top-[200px] tablet:top-[200px]">
        <Slider />
        <Trend img={[0, 1]} />
        <BestSeller />
        <Trend img={[2, 3]} />
      </main>
    </div>
  );
}

export default Home;
