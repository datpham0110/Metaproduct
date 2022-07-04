import React from "react";
import logo from "../images/logo.png";
import { Chart, PointElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import imgproduct from "../images/1.jpg";

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
  Legend
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
        <div className="listproductcontent__item">
          <div className="listproductcontent__item__info">
            <img src={item.brand} alt="" />
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
          <div className="listproductcontent__item__detail">
            <div className="listproductcontent__item__detail__title">
              <img src={item.img} alt="" />
              <span>Tổng số lượng bán</span>
            </div>
            <div className="listproductcontent__item__chart">
              <Pie
                data={{
                  labels: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                  datasets: [
                    {
                      label: "# of Votes",
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProductContent;
