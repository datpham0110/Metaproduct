import React from "react";
import {Chart, PointElement} from 'chart.js';
import { Line } from "react-chartjs-2";
import 'chart.js/auto'

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
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'October'],
          datasets: [
            {
              label: "Dataset 1",
              data: [13, 24, 36, 68, 92, 100, 66],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Dataset 2",
              data: [133, 4, 76, 28, 32, 70, 66],
              borderColor: "rgb(53, 162, 235)",
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
              text: 'Đơn vị: Tỷ đồng',
            },
          },
        }}
      />
  )
}

export default LineChart