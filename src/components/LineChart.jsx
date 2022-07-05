import React from "react";
import { Chart, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
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

const LineChart = () => {
  return (
    <Line
      data={{
        labels: [
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: [200, 250, 320, 360, 400, 425, 450, 520, 600, 700],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            type: "bar",
            label: "Dataset 2",
            data: [50, 75, 95, 130, 150, 200, 250, 300, 400, 470],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
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
              },
            },
          },
          y: {
            stacked: true,
            ticks: {
              font: {
                size: 20,
              },
            },
          },
        },
        responsive: true,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            // position: 'top' as const,
            labels: {
              // display: false,
              // boxWidth: 0,
              // boxHeight: 0,
              font: {
                size: 20,
              },
            },
            position: "bottom",
            align: "center",
          },
          title: {
            display: true,
            text: "Đơn vị: Tỷ đồng",
            padding: {
              bottom: 20,
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

export default LineChart;
