import React from "react";
import logo from "../images/logo.png";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import imgproduct from "../images/1.jpg";
import logotitle from "../images/NewProduct_1.png";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ListProductContent = () => {
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
          <div className="listproductcontent__item__info">
            <img src={item.brand} alt="" />
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
          <div className="listproductcontent__item__detail">
            <div className="listproductcontent__item__detail__card">
              <div className="listproductcontent__item__detail__card__title">
                <img src={logotitle} alt="" />
                <span>Tổng số lượng bán</span>
              </div>
              <div className="listproductcontent__item__detail__card__chart">
                <Pie
                  data={{
                    labels: ["Miền Bắc", "Miền Trung", "Miền Nam"],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [51, 33, 16],
                        backgroundColor: [
                          "rgb(169,169,169)",
                          "rgb(0,0,205)",
                          "rgb(255,127,80)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      datalabels: {
                        color: "#000",
                        formatter: (value) => {
                          return value + "%";
                        },
                        font: {
                          weight: "500",
                          size: 14,
                        },
                      },
                      legend: {
                        labels: {
                          boxWidth: 5,
                          boxHeight: 5,
                        },
                        position: "bottom",
                      },
                      title: {
                        display: false,
                        text: "Tổng số lượng bán",
                        font: {
                          size: 16,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="listproductcontent__item__detail__card">
              <div className="listproductcontent__item__detail__card__title">
                <img src={logotitle} alt="" />
                <span>Doanh thu</span>
              </div>
              <div className="listproductcontent__item__detail__card__chart">
                <Pie
                  data={{
                    labels: ["Miền Bắc", "Miền Trung", "Miền Nam"],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [45, 18, 37],
                        backgroundColor: [
                          "rgb(169,169,169)",
                          "rgb(0,0,205)",
                          "rgb(255,127,80)",
                        ],
                        // borderColor: [
                        //   "rgba(255, 99, 132, 1)",
                        //   "rgba(54, 162, 235, 1)",
                        //   "rgba(255, 206, 86, 1)",
                        //   "rgba(75, 192, 192, 1)",
                        //   "rgba(153, 102, 255, 1)",
                        //   "rgba(255, 159, 64, 1)",
                        // ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      datalabels: {
                        color: "#000",
                        formatter: (value) => {
                          return value + "%";
                        },
                        font: {
                          weight: "500",
                          size: 14,
                        },
                      },
                      legend: {
                        labels: {
                          boxWidth: 5,
                          boxHeight: 5,
                        },
                        position: "bottom",
                      },
                      title: {
                        display: false,
                        text: "Tổng doanh thu theo miền",
                        font: {
                          size: 16,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="listproductcontent__item__detail__card">
              <div className="listproductcontent__item__detail__card__title">
                <img src={logotitle} alt="" />
                <span>Tốc độ tăng trưởng</span>
              </div>
              <div className="listproductcontent__item__detail__card__chart__linechart">
                <Line
                  data={{
                    labels: ["Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7"],
                    datasets: [
                      {
                        label: "Tốc độ tăng trưởng",
                        data: [20, 30, 20, 50],
                        borderColor: "blue",
                        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        borderWidth: 2,
                      },
                    ],
                  }}
                  options={{
                    font: {
                      size: 7,
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      datalabels: {
                        anchor: "end",
                        align: "top",
                        color: "#000",
                        formatter: (value) => {
                          return value + "%";
                        },
                        font: {
                          weight: "500",
                          size: 13,
                        },
                      },
                      legend: {
                        labels: {
                          // display: false,
                          boxWidth: 0,
                          boxHeight: 0,
                          font: {
                            size: 0,
                          },
                        },
                        position: "bottom",
                        align: "center",
                      },
                      title: {
                        display: false,
                        text: "Tốc độ tăng trưởng",
                        font: {
                          size: 16,
                        },
                      },
                    },
                  }}
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
