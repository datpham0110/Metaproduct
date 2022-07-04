import React, { useState, useEffect } from "react";
import LineChart from "./components/LineChart";
import Header from "./components/Header";
import './sass/index.scss'
import Info from "./components/Info";
import Product from "./components/Product";

function App() {

  return (
    <div className="container">
      <Header />
      <div className="grid3">
        <Info/>
        <LineChart />
        <Product />
      </div>
    </div>
  );
}

export default App;
