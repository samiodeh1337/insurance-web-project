import React, { Component } from 'react'
import SideBar from '../Parts/SideBar/SideBar'
import Table from '../Parts/Table/Table'
import Chart from '../Parts/Chart/PieChart'
import $ from "jquery";
import './dashboard.css';
import Json from '../../../data/insurances.json'



class HomePage extends Component {
    componentDidMount(){
        $("#btn").click(function(){
          $('.sidebar').toggleClass('active');
        })
      }
    
    render(){
        return (
            <div>
                <sidebar className="sidebar">
                    <div className="logo_content mb-5">
                        <i class='bx bx-menu' id="btn"></i>
                    </div>
                    <ul className="nav_list mt-5">
                    <li className="pt-2">
                        <a href='/'>
                        <i class='bx bxs-dashboard'></i>
                        <span className="links_name"> Dashboard</span>
                        </a>
                        <span class="tooltip"> Dashboard</span>
                    </li>
                    <li>
                        <a href='/'>
                        <i class='bx bxs-user'></i>
                        <span className="links_name"> Users</span>
                        </a>
                        <span class="tooltip"> Users</span>
                    </li>
                    </ul>
                </sidebar>
                <div className="home_content row">
                    <Table className="text" data={Json}></Table>
                    <Chart></Chart>
                </div>
             </div>

        );
    }
}


export default  HomePage;
