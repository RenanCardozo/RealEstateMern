import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const Chart2 = () => {
  const [chart,setChart]=useState({
    options: {},
    series: [44, 55, 41, 17, 15, 22],
    labels: ['A', 'B', 'C', 'D', 'E']
    }
  )




  return (

    <div className="donut">
    <Chart options={chart.options} series={chart.series} type="donut" width="380" />
  </div>  )
}

export default Chart2