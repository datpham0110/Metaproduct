import React, { useState } from "react";
import logo from "../../images/logo.png";
import imgproduct from "../../images/1.jpg";
import logotitle1 from "../../images/iconDetails.png";
import logotitle2 from "../../images/iconDetails2.png";
import logotitle3 from "../../images/iconDetails3.png";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const ListProductContent = () => {
  const label = ["Miền Bắc", "Miền Trung", " Miền Nam"];

  // Custom setting and dâta for chart: Tổng số lượng bán
  const [totalApex, setTotalApex] = useState({
    series: [51, 33, 16],
    options: {
      colors: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
      ],
      dataLabels: {
        textAnchor: "start",
        offsetX: 20,
        offsetY: 220,
        style: {
          fontSize: "11px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "600",
          // colors: ['#000']
        },
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.55
        }
      },
      chart: {
        width: 380,
        type: "pie",
        toolbar: {
          show: false,
        },
        events: {
          dataPointMouseEnter: function (event) {
            event.path[0].style.cursor = "pointer";
          },
        },
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          customScale: 1,
          dataLabels: {
              offset: -20,
              minAngleToShowLabel: 10
          }, 
        },
      },
      labels: label,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  // Custom setting and data for chart: Doanh thu
  const [turnoverApex, setTurnoverApex] = useState({
    series: [45, 37, 18],
    options: {
      colors: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
      ],
      dataLabels: {
        style: {
          fontSize: "11px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "600",
          // colors: ['#000']
        },
        offsetX: -30,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
        }
      },
      chart: {
        width: 380,
        type: "pie",
        toolbar: {
          show: false,
        },
        events: {
          dataPointMouseEnter: function (event) {
            event.path[0].style.cursor = "pointer";
          },
        },
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          customScale: 1,
          dataLabels: {
              offset: -20,
              minAngleToShowLabel: 10
          }, 
        },
      },
      labels: label,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  // Custom setting and data for chart: Tốc độ tăng trưởng
  const [growthApex, setGrowthApex] = useState({
    series: [
      {
        name: "Tốc độ tăng trưởng",
        data: [20, 30, 20, 50],
      },
    ],
    options: {
      colors: ["#4D73BE"],
      plotOptions: {
        line: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          customScale: 1,
          dataLabels: {
              offset: -20,
              minAngleToShowLabel: 10
          }, 
        },
      },
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        // offsetY: -10,
        // offsetX: -5,
        formatter: function (val, opts) {
          return val + '%'
        },
        background:{
          enabled: true
        }
      },
      stroke: {
        curve: "straight",
      },

      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7"],
      },
    },
  });

  // Create Fake data for charts
  const data = [
    {
      brand: logo,
      img: imgproduct,
      name: "Bút xoá Thiên Long TL - 031 - Tẩy siêu sạch - Đạt chuẩn châu Âu",
    },
    {
      brand: logo,
      img: imgproduct,
      name: "Bút xoá Thiên Long TL - 031 - Tẩy siêu sạch - Đạt chuẩn châu Âu",
    },
    {
      brand: logo,
      img: imgproduct,
      name: "Bút xoá Thiên Long TL - 031 - Tẩy siêu sạch - Đạt chuẩn châu Âu",
    },
    {
      brand: logo,
      img: imgproduct,
      name: "Bút xoá Thiên Long TL - 031 - Tẩy siêu sạch - Đạt chuẩn châu Âu",
    },
  ];

  return (
    <div className="listproductcontent">
      {data.map((item, index) => (
        <div className="listproductcontent__item" key={index}>
        <Link to="detail">
          <div className="listproductcontent__item__info">
            
              <img src={item.brand} alt="" />
              
              <img src={item.img} alt="" />
              <p>{item.name}</p>
  
          </div>
          </Link>
          <div className="listproductcontent__item__detail">
            <div className="listproductcontent__item__detail__card">
              <div className="listproductcontent__item__detail__card__title">
                <img src={logotitle1} alt="" />
                <span>Tổng số lượng bán</span>
              </div>
              <div className="listproductcontent__item__detail__card__chart">
                <Chart
                  options={totalApex.options}
                  series={totalApex.series}
                  type="pie"
                  width={300}
                  // style={{height: '300px'}}
                />
              </div>
            </div>
            <div className="listproductcontent__item__detail__card">
              <div className="listproductcontent__item__detail__card__title">
                <img src={logotitle2} alt="" />
                <span>Doanh thu</span>
              </div>
              <div className="listproductcontent__item__detail__card__chart">
                <Chart
                  options={turnoverApex.options}
                  series={turnoverApex.series}
                  type="pie"
                  width={300}
                />
              </div>
            </div>
            <div className="listproductcontent__item__detail__card">
              <div className="listproductcontent__item__detail__card__title">
                <img src={logotitle3} alt="" />
                <span>Tốc độ tăng trưởng</span>
              </div>
              <div className="listproductcontent__item__detail__card__chart__linechart">
                <Chart
                  options={growthApex.options}
                  series={growthApex.series}
                  type="line"
                  height={250}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProductContent;
