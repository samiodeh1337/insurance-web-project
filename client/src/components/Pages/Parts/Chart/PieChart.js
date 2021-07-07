
// import { PieChart } from 'react-minimal-pie-chart';
import Chart from "react-google-charts";
import './PieChart.css';
import React, { Component, useState, useEffect } from 'react'

function PieChart(props) {


  const { data } = props;
  const [data_per, setdata_per] = useState({ Low: 1, Medium: 0, High: 0, Severe: 0 });


  useEffect(() => {
    console.log(data);

    let Low = 0;
    let Medium = 0;
    let High = 0;
    let Severe = 0;
    let sum = 0;
    data.forEach(elem => {
      sum += 1;
      if (elem.severity === "LOW") {
        Low += 1;
      } else if (elem.severity === "MID") {
        Medium += 1;
      } else if (elem.severity === "HIGH") {
        High += 1;
      } else if (elem.severity === "SEVERE") {
        Severe += 1;
      }
    });

    setdata_per({ Low: Low, Medium: Medium, High: High, Severe: Severe });
  }, [props]);


  return (
    <>

      <Chart className="col-sm-12 col-md-12 pie mt-2"
        width={'400px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Medium ' + (data_per.Medium / data.length) * 100 + "%", data_per.Medium],
          ['Low ' + (data_per.Low / data.length) * 100 + "%", data_per.Low],
          ['Svere ' + (data_per.Severe / data.length) * 100 + "%", data_per.Severe],
          ['High ' + (data_per.High / data.length) * 100 + "%", data_per.High],

        ]}
        options={{
          title: 'Org Risk',
          // Just add this option
          pieHole: 0.2,
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    </>



  )
}



export default PieChart
