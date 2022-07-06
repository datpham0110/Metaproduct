import React, { useState } from "react";
import Chart from "react-apexcharts"


const ColumnChart = () => {

  const [columnApex, setColumnApex] = useState(
    {
      series: [{
        name: 'Bút viết (TL, Bizner)',
        data: [44, 55, 41, 67, 22],
      
      }, {
        name: 'Dụng cụ văn phòng (FlexOffice)',
        data: [13, 23, 20, 8, 13]
      }, {
        name: 'Dụng cụ học tập (Điểm 10)',
        data: [11, 17, 15, 15, 21]
      }, {
        name: 'Dụng cụ mỹ thuật (ColorKit)',
        data: [21, 7, 25, 13, 22]
      }, {
        name: 'Khác',
        data: [21, 7, 25, 13, 22]
      }],
      options: {
        colors: ['#4074B1', '#B02418', '#5E803F', '#F9D978', '#C1D0E8'],
        chart: { 
          type: 'bar',
          stacked: true,
          toolbar:{
            show: false
          },
          events: {
            dataPointMouseEnter: function(event) {
              event.path[0].style.cursor = "pointer";
            }
          },
        },
        dataLabels:{
          enabled: false,
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: '35%',
          },
        },
        title: {
          text: 'Doanh thu theo nhóm ngành',
          align: 'center',
          offsetX: 10,
          offsetY: 10,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily: 'Helvetica, Arial',
            color:  '#263238'
          },
        },
        xaxis: {
          type: 'category',
          categories: [
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
          ],
        },
        legend: {
          // position: 'right',
          // offsetY: 40,
          show: true,
          position: 'bottom',
          fontSize: '13px',
          fontFamily: 'Helvetica, Arial',
          fontWeight: 400,
          
        },
        fill: {
          opacity: 1
        }
      },
    }
  )

  return (
    <Chart 
      options={columnApex.options}
      series={columnApex.series}
      type="bar" 
      width={600}
      height={350}
    />
  );
};

export default ColumnChart;
