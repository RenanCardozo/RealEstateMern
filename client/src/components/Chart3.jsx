import React,{useState} from 'react'
import Chart from 'react-apexcharts'


const Chart3 = () => {
  const [chart2,setChart2]=useState({
    options: {},
    series: [{
      name: 'properties for sale',
    data:[32,23,42,35,55]
  }],
    labels: ['A', 'B', 'C', 'D', 'E']
  }
)


  return (
    <Chart
    options={chart2.options}
    series={chart2.series}
    type="line"
    width="500"
  />
  )
}

export default Chart3