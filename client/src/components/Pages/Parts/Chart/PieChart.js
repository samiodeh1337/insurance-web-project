import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './PieChart.css';

class Chart extends Component {

    render() {
        return (
        
          <PieChart lineWidth='100' className="pie"
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />
    


        
        )
    }
}


export default Chart
