import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import circlechart from "../data/CircleChart";

const CircleChart = () => {
  const [name, setName] = useState(['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'])
  const [number, setnumber] = useState(circlechart)
  // console.log('number: ', number);
  
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: number,
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        cutout: '90%'
      },
    ],
  };

  const option = {
    reponsive: true,
    plugins: {
      tootip:{
        useCallback: {
          label: (context) => {
            console.log('context: ', context);
          }
        }
      },
      datalabels: {
        
        anchor: "end",
        align: "top",
        color: "#000",
        formatter: function(value, context) {
          // console.log('value: ', value);
          console.log('context: ', context);
          return value.label + ': ' + value + '%';
        },
        // formatter: (value) => {
        //   return value + "%";
        // },
        font: {
          weight: "500",
          size: 30,
        },
      },
      legend: {
        labels: {
          render: (context) => {
            console.log('context: ', context);
              return context.label
          },
          // display: false,
          boxWidth: 0,
          boxHeight: 0,
          font: {
            size: 20,
          },
        },
        position: "bottom",
        align: "center",
      },
      title: {
        display: false,
        text: "Tốc độ tăng trưởng",
        font: {
          size: 16,
        },
    }
  }
}
  
  return (
    <Doughnut data={data} options={option}/>
    // <Doughnut
    //   data={{
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         // Data chart doanh thu nhóm ngành theo năm
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)",
    //         ],
    //         borderColor: [
    //           "rgba(255, 99, 132, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)",
    //         ],
    //         borderWidth: 2,
    //         cutout: '90%',
    //       },
    //     ],
    //   }}
    //   options={{
    //     // maintainAspectRatio: false,
    //     responsive: true,
    //     plugins: {
    //       outlabels: {
    //                 text: '%l %p',
    //                 color: 'white',
    //                 stretch: 45,
    //                 font: {
    //                     resizable: true,
    //                     minSize: 12,
    //                     maxSize: 18
    //                 }
    //             },
    //       datalabels: {
    //         anchor: "end",
    //         align: "top",
    //         color: "#000",
            
    //         formatter: (value) => {
    //           console.log('value: ', value);
              
    //           return value + "%";
    //         },
    //         font: {
    //           weight: "500",
    //           size: 30,
    //         },
    //       },
    //       legend: {
    //         labels: {
    //           boxWidth: 0,
    //           boxHeight: 0,
    //           font: {
    //             size: 0,
    //           },
    //         },
    //       },
    //     },
    //   }}
    // />
  );
};

export default CircleChart;
