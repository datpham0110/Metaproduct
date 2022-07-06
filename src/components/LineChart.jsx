import React, { useState } from "react";
import Chart from "react-apexcharts"

const LineChart = () => {

  const [lineApex, setLineApex] = useState(
    {
      series: [{
        name: 'Văn phòng phẩm',
        type: 'column',
        data: [70, 100, 120, 150, 175, 210, 250, 275, 300, 350]
      }, {
        name: 'Tỷ trọng doanh thu',
        type: 'line',
        data: [300, 350, 375, 400, 420, 450, 475, 600, 625, 700]
      }],
      options: {
        colors: ['#4074B1', '#B02418'],
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
          toolbar:{
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'Đơn vị: Tỷ đồng',
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
          categories: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        },

        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'center', 
          offsetY: 5,
          fontSize: '13px',
          fontFamily: 'Helvetica, Arial',
          fontWeight: 400,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '40%',
          },
          line: {
            columnWidth: '40%',
          }
        },
      },
    }
  )

  return (
    <Chart 
      options={lineApex.options}
      series={lineApex.series}
      type="line" 
      width={600}
      height={350}
    />
  );
};

export default LineChart;
