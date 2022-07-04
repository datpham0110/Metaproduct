import React, { useState, useEffect } from "react";
import LineChart from "./components/LineChart";
import Header from "./components/Header";
import ColumnChart from "./components/ColumnChart";
import CircleChart from "./components/CircleChart";
import Content from "./components/Content";
import './sass/index.scss'
import Title from "./components/Title";
import ListProduct from "./components/ListProduct";


function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Title title="Thống kê theo sản phẩm" des="Thống kê doanh thu, tốc độ tăng trưởng các sản phẩm theo từng năm"/>
        <div className="content">
          <ColumnChart />
          {/* <LineChart /> */}
          <LineChart />
          {/* <LineChart /> */}
          <CircleChart />
          <Content />
        </div>
        <Title title="Danh mục sản phẩm" des=" "/>
        <ListProduct />
      </div>
    </>
    
  );
}

export default App;
