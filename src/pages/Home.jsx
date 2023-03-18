import React from "react";
import HomeMain from "../components/home/HomeMain";
import HomeTop from "../components/home/HomeTop";
import HomeNav from "../components/home/HomeNav";

function Home() {
    return (
        <React.Fragment>
            <HomeTop />
            <HomeMain />
            <HomeNav />
        </React.Fragment>
    );
}

export default Home;
