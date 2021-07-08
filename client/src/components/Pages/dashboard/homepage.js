import React, { Component } from 'react'
import SideBar from '../Parts/SideBar/SideBar'
import Table from '../Parts/Table/Table'
import Chart from '../Parts/Chart/PieChart'
import $ from "jquery";
import { withRouter } from "react-router";
import cookie from 'react-cookies'
import './dashboard.css';
// import Json from '../../../data/insurances.json'
import onServer from '../../../config'


class HomePage extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {

        let isLoggedIn = false;
        let token = cookie.load('token')
        token == undefined ? isLoggedIn = false : isLoggedIn = true;
        if (isLoggedIn == false) {
            this.props.history.push("/404");
        }

        $("#btn").click(function () {
            $('.sidebar').toggleClass('active');
        })


        let link = "";
        if (onServer() == true) {
            link = "https://insurance-web-project.herokuapp.com";
        } else {
            link = "http://localhost:5000";
        }
        fetch(link + '/api/insurance/getall')
            .then(res => res.json())
            .then(json => this.setState({ data: json }));

    }

    statehandler = (datar) => {
        this.setState({ data: datar });
    }

    render() {
        return (
            <div>
                <sidebar className="sidebar ">
                    <div className="logo_content mb-5">
                        <i class='bx bx-menu' id="btn"></i>
                    </div>
                    <ul className="nav_list mt-5">
                        <li className="pt-2">
                            <a href='/dashboard'>
                                <i class='bx bxs-dashboard'></i>
                                <span className="links_name"> Dashboard</span>
                            </a>
                            <span class="tooltip"> Dashboard</span>
                        </li>
                        <li>
                            <a href='/dashboard'>
                                <i class='bx bxs-user'></i>
                                <span className="links_name"> Users</span>
                            </a>
                            <span class="tooltip"> Users</span>
                        </li>
                    </ul>
                </sidebar>
                <div className="home_content row mt-5">
                    {this.state.data == undefined ? <div>waiting for data </div> : <> <Table className="text bg-primary" data={this.state.data} data_state={this.statehandler}></Table>
                        <Chart data={this.state.data} data_state={this.statehandler}></Chart></>}

                </div>
            </div>

        );
    }
}


export default HomePage;
