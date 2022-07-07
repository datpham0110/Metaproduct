import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const BlogCard = () => {
  
  //Custom setting and data for chart: Tỷ trọng doanh thu theo từng năm
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
        legend:{
          show:false
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
    <div className="container blogcard">
        <div className="blogcard__title">
            ĐHĐCĐ Tập đoàn Thiên Long : Đạt tỷ suất lợi nhuận  trên doanh thu <br /> thuần 10% năm 2022
        </div>
        <div className="blogcard__subtitle">
            Ngày 21/5, công ty cổ phần tập đoàn Thiên Long (mã TLG) tổ chức đại hội đồng cổ đông thường niên năm 2016 tại TP.HCM. Năm 2015, doanh thu thuần của TLG đạt 1.883 tỷ đồng, tăng gần 17% so với năm 2014.
        </div>
        <div className="blogcard__content">
            Lợi nhuận sau thuế đạt 187,9 tỷ đồng, tăng trên 27% so với năm 2014 và vượt gần 14% so với kế hoạch.Tỷ suất lợi nhuận sau thuế trên doanh thu thuần năm 2015 đạt 10%. Mức cao nhất kể từ khi niêm yết. Doanh số xuất khẩu năm 2015 đạt trên 251 tỷ đồng, tăng 38,5% so với năm 2014.
            <Chart 
              options={lineApex.options}
              series={lineApex.series}
              type="line" 
              width={900}
              height={600}
            />
            Lợi nhuận sau thuế đạt 187,9 tỷ đồng, tăng trên 27% so với năm 2014 và vượt gần 14% so với kế hoạch.Tỷ suất lợi nhuận sau thuế trên doanh thu thuần năm 2015 đạt 10%. Mức cao nhất kể từ khi niêm yết. Doanh số xuất khẩu năm 2015 đạt trên 251 tỷ đồng, tăng 38,5% so với năm 2014.
            Lợi nhuận sau thuế đạt 187,9 tỷ đồng, tăng trên 27% so với năm 2014 và vượt gần 14% so với kế hoạch.Tỷ suất lợi nhuận sau thuế trên doanh thu thuần năm 2015 đạt 10%. Mức cao nhất kể từ khi niêm yết. Doanh số xuất khẩu năm 2015 đạt trên 251 tỷ đồng, tăng 38,5% so với năm 2014.
        </div>
        <div className="blogcard__poster">

        </div>
    </div>
  )
}

export default BlogCard