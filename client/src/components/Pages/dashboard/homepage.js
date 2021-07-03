import React, { Component } from 'react'
import SideBar from '../Parts/SideBar/SideBar'
import Table from '../Parts/Table/Table'
import Chart from '../Parts/Chart/PieChart'
import './dashboard.css'

function homepage(props) {

    return (
        <div className="container" style={{ marginTop: '10%' }}>
            <div className="row container-fluid">
                <SideBar></SideBar>
                <Table></Table>
                <Chart></Chart>

            </div>
        </div>

    )

}


export default homepage
