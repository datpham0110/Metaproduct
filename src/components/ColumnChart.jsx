import React from "react";
import { Chart, PointElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

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

const ColumnChart = () => {
  return (
    <Bar
      data={{
        labels: ["2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: "Bút viết(TL, Bizner)",
            data: [550, 200, 300, 450, 75],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dụng cụ văn phòng(Flexoffice)",
            data: [600, 100, 90, 120, 60],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
          {
            label: "Dụng cụ học tậP(Điểm 10)",
            data: [10, 20, 30, 50, 100],
            backgroundColor: "rgba(53, 20, 235, 0.5)",
          },
          {
            label: "Dụng cụ mỹ thuật(Colorkit)",
            data: [10, 20, 30, 50, 100],
            backgroundColor: "rgba(53, 20, 235, 0.5)",
          },
          {
            label: "Khác",
            data: [10, 20, 30, 50, 100],
            backgroundColor: "rgba(53, 20, 235, 0.5)",
          },
        ],
      }}
      options={{
        scales: {
          x: {
            stacked: true,
            ticks: {
                font: {
                    size: 20,
                }
            }
          },
          y: {
            stacked: true,
            ticks: {
                font: {
                    size: 20,
                }
            }
          },
        },
        responsive: true,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            labels: {
              // display: false,
              // boxWidth: 30,
              // boxHeight: 30,
  

              font: {
                size: 25,
              },
            },
            position: "bottom",
            align: "center",
          },
          title: {
            display: true,
            text: "Doanh thu theo nhóm ngành",
            padding:{
              bottom: 20
            },
            font: {
              size: 30,
            },
          },
        },
      }}
    />
  );
};

export default ColumnChart;
