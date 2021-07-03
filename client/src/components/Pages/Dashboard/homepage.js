import React, { Component } from 'react'
import SideBar from '../Parts/SideBar/SideBar'
import Table from '../Parts/Table/Table'
import Chart from '../Parts/Chart/PieChart'
import './Dashboard.css'

class HomePage extends Component {

    render() {
        return (
            <div className="container" style={{ marginTop: '10%' }}>
                <div className="row container-fluid">

                    <SideBar className="col"></SideBar>
                    <Table className="col tableStyle"></Table>
                    <Chart className="col" ></Chart>
                </div>
            </div>

        )
    }
}


export default HomePage
