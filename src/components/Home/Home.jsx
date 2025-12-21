import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import About from "./About";

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
        <Banner></Banner>
      </section>
      <section>
          <About></About>
      </section>
    </div>
  );
};

export default Home;
