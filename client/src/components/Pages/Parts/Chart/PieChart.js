import React, { Component } from 'react'
// import { PieChart } from 'react-minimal-pie-chart';
import Chart from "react-google-charts";
import './PieChart.css';

class PieChart extends Component {

    render() {
        return (
        
            <Chart className="col-sm-12 col-md-12 "
            width={'300px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Medium', 11],
              ['Low', 2],
              ['Svere', 2],
              ['High ', 2],
          
            ]}
            options={{
              title: 'My Daily Activities',
              // Just add this option
              pieHole: 0.2,
            }}
            rootProps={{ 'data-testid': '3' }}
          />
    


        
        )
    }
}


export default PieChart
