import React from "react";
import more from "./img/more.jpg";
import girl from "./img/girl.jpg";
import nout from "./img/nout.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="hom">
      <div className="home-item">
        <div className="home-block1">
          <img src={more} alt="" />
          <h1>Greece Balos Beach</h1>
          <p>Tourism May 10 2023</p>
        </div>
        <div className="home-block2">
          <img src={girl} alt="" />
          <img src={nout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
