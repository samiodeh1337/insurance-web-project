import React, { Component } from 'react'
import SideBar from '../Parts/SideBar/SideBar'
import Table from '../Parts/Table/Table'
import Chart from '../Parts/Chart/PieChart'
import $ from "jquery";
import './dashboard.css';
// import Json from '../../../data/insurances.json'



class HomePage extends Component {
    constructor() {
        super();
        this.state = { data: [] };
      }

    componentDidMount(){
        $("#btn").click(function(){
          $('.sidebar').toggleClass('active');
        })

    fetch('http://localhost:5000/api/insurance/getall')
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
          
      }
    
    render(){
        return (
            <div>
                <sidebar className="sidebar ">
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
                <div className="home_content row mt-5">
                    <Table className="text bg-primary" data={this.state.data}></Table>
                    <Chart data={this.state.data}></Chart>
                </div>
             </div>

        );
    }
}


export default  HomePage;
