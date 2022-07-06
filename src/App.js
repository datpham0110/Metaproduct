import React from "react";
import LineChart from "./components/LineChart";
import Header from "./components/Header";
import ColumnChart from "./components/ColumnChart";
import CircleChart from "./components/CircleChart";
import Content from "./components/Content";
import './sass/index.scss'
import Title from "./components/Title";
import ListProduct from "./components/ListProduct";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Title title="Thống kê theo sản phẩm" des="Thống kê doanh thu, tốc độ tăng trưởng các sản phẩm theo từng năm"/>
        <div className="content">
          <div className="content1">
            <div className="content1__column">
              <ColumnChart />
            </div>
            {/* <LineChart /> */}
            <div className="content1__line">
              <LineChart />
            </div>
            {/* <LineChart /> */}
            
          </div>
          <div className="content2">
            <div className="content2__circle">
              <div className="content2__circle__chart">
                <CircleChart />
              </div>
            </div>
            <Content />
          </div>
        </div>
        <br/>
        <Title title="Danh mục sản phẩm" des=" "/>
        <ListProduct />

        <Footer />
      </div>
    </>
    
  );
}

export default App;
