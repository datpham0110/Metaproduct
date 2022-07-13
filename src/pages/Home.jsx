import React from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
