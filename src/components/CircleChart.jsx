import React, { useState } from "react";
import Chart from "react-apexcharts"
import "chart.js/auto";


const CircleChart = () => {

  const [donutApex, setDonutApex] = useState(
    {
      series: [55, 27, 9, 9],
      options: {
        colors: ['#669AD0', '#F6C042', '#A5A5A5', '#DF8244'],
        chart: {
          type: 'donut',
          width: '1px',
          events: {
            dataPointMouseEnter: function(event) {
              event.path[0].style.cursor = "pointer";
            }
          },
        },
        labels: [
          'Bút viết 664', 
          'Dụng cụ văn phòng 332', 
          'Dụng cụ học sinh 114', 
          'Dụng cụ mỹ thuật 106'
        ],
        dataLabels: {
          enabled: true,
          style:{
            fontSize: '11px',
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 200
            },
            legend: {
              position: 'bottom',
              fontSize: '13px',
              fontFamily: 'Helvetica, Arial',
              fontWeight: 400,
            },
          }
        }]
      },
    }
  )

  return (
    <Chart  
      options={donutApex.options} 
      series={donutApex.series} 
      type="donut" 
      width="450" 
      height="560" 
    />
  );
};

export default CircleChart;
