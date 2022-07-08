import React, { useState } from "react";
import Chart from "react-apexcharts";
import { TbSortDescending } from 'react-icons/tb'
import { GrSchedules } from 'react-icons/gr'

const RevenueCard = () => {

  // Custom setting and data for Char: Mixed Doanh thu
  const [mixedApex, setMixedApex] = useState({
    series: [
      {
        name: "Ngân sách",
        type: "area",
        data: [44, 55, 31, 47, 31, 43, 26],
      },
      {
        name: "Tốc độ tăng trưởng",
        type: "line",
        data: [54, 37, 52, 22, 61, 43, 56],
      },
    ],
    options: {
      colors: ["#376562", "#E27557"],
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        }
      },
      stroke: {
        curve: "straight",
        width: [1.5, 1.75],
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: ["gradient", "solid"],
        opacity: [0.15, 1],
      },
      labels: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
      markers: {
        size: 0,
      },
      legend:{
        show: false
      },
      yaxis: [
        {
          title: {
            text: undefined,
          },
        },
        {
          opposite: true,
          title: {
            text: undefined,
          },
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " tỷ đồng";
            }
            return y;
          },
        },
      },
    },
  });

  //Create data revenue for detail product
  const dataRevenue = [
    {
      name: "Tổng doanh thu",
      value: "21,754,02",
      icon: "$",
    },
    {
      name: "Ngân sách",
      value: "23,768,32",
      icon: "$",
    },
    {
      name: "Doanh số bán hàng theo đơn vị",
      value: "24,300",
    },
  ];

  return (
    <div className="revenue">
      <div className="revenue__list">
        {dataRevenue.map((item, index) => (
          <div className="revenue__list__item" key={index}>
            <div className="revenue__list__item__title">{item.name}</div>
            {(() => {
              if (item.icon != null) {
                return (
                  <div className="revenue__list__item__content">
                    <span>{item.icon}</span>
                    {item.value}
                  </div>
                );
              } else {
                return (
                  <div className="revenue__list__item__content">
                    {item.value}
                  </div>
                );
              }
            })()}
          </div>
        ))}
      </div>
      <div className="revenue__chart">
        <div className="revenue__chart__group">
          <div className="revenue__chart__group__title">
             
                <h2>Net sales</h2>
                <strong>/</strong>
                <span>Nov 22, 2021 - Nov 28, 2021</span>
          </div>
          <div className="revenue__chart__group__icons">
                <TbSortDescending />
                <GrSchedules />
              </div>
        </div>
        <Chart
          options={mixedApex.options}
          series={mixedApex.series}
          type="area"
          height={350}
          width={750}
        />
      </div>
    </div>
  );
};

export default RevenueCard;
