import React, { useState } from 'react'
import Chart from "react-apexcharts";


const Chart1 = () => {
  const[chart,setChart]=useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,2023]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 67]
      }
    ]
  }
  )



  return (
<div id="chart">
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
</div>  )
}

export default Chart1