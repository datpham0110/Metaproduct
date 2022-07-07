import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { TbSortDescending } from "react-icons/tb";

const SalesChart = () => {

  //Custom setting and data for Chart: Net Sale Units
  const [saleApex, setsaleApex] = useState(
    {
      series: [
        {
          name: 'Stores',
          data: [10]
        },
        {
          name: 'Online',
          data: [44]
        },
        {
          name: 'Máy bán hàng',
          data: [64]
        }
      ],
      options: {
        colors: ['#376562', '#E16648', '#F4DEC1'],
        chart: {
          type: 'bar',
          height: 350,
          toolbar:{
            show: false
          },
          events: {
            dataPointMouseEnter: function(event) {
              event.path[0].style.cursor = "pointer";
            }
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '75%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return val + '%'
          },
          style:{
            colors: ['#000']
          },
          textAnchor: 'middle',

        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [''],
          enabled: false
        },
        yaxis: {
          title: {
            text: undefined
          },
          labels:{
            show: false
          }
        },
        fill: {
          opacity: 1
        },
        grid: {
          show: false,     
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        }
      },
    }
  )
  
  return (
    <div className="salechart">
      <div className="salechart__bar">
        <div className="salechart__bar__title">
          <h2>Net Sales Units</h2>
          <span>by Store Type</span>
        </div>
        <div className="salechart__bar__icon">
          <TbSortDescending />
        </div>  
      </div>
        <Chart 
          options={saleApex.options}
          series={saleApex.series}
          type="bar"
          height={175}
          width={350}
        />
    </div>
  )
}

export default SalesChart