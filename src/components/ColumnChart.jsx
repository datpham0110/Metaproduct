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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: "Dataset 1",
            data: [10, 20, 30, 50, 100, 100],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dataset 2",
            data: [10, 20, 30, 50, 100, 100],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            // position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Doanh thu theo nhóm ngành',
          },
        },
      }}
    />
  );
};

export default ColumnChart;
