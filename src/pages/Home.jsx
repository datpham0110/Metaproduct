import React from 'react'
import Title from '../components/Title'
import ColumnChart from '../components/homeComponents/ColumnChart'
import LineChart from '../components/homeComponents/LineChart'
import CircleChart from '../components/homeComponents/CircleChart'
import Content from '../components/homeComponents/Content'
import ListProduct from '../components/homeComponents/ListProduct'


const Home = () => {
  return (
    <div className="container">
        <Title
          title="Thống kê theo sản phẩm"
          des="Thống kê doanh thu, tốc độ tăng trưởng các sản phẩm theo từng năm"
        />
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
        <br />
        <Title title="Danh mục sản phẩm" des=" " />
        <ListProduct />

        
      </div>
  )
}

export default Home