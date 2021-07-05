import React, { Component } from 'react'
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter,CDBContainer } from "cdbreact";
import './SideBar.css'
import 'boxicons'
import Table from '../Table/Table'
import Chart from '../Chart/PieChart'
import $ from "jquery";

// <script>
//    let btn = document.querySelector("#btn");
//    let sidebar = document.querySelector(".sidebar");
//    let searchBtn = document.querySelector(".bx-search");

//    btn.onclick = function() {
//      sidebar.classList.toggle("active");
//      if(btn.classList.contains("bx-menu")){
//        btn.classList.replace("bx-menu" , "bx-menu-alt-right");
//      }else{
//        btn.classList.replace("bx-menu-alt-right", "bx-menu");
//      }
//    }
//    searchBtn.onclick = function() {
//      sidebar.classList.toggle("active");
//    }
//   </script>

class SideBar extends Component  {


  componentDidMount() {
    // $('#sidebarCollapse').click(function() {
    //   $('#sidebar').toggleClass('active');
    // });
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");

    $("#btn").click(function(){
      $('.sidebar').toggleClass('active');
    })

    // btn.onclick = function()
    // {  
    //   $('.sidebar').toggleClass('active');
    //   if (btn.classList.contains('bx-menu')){
    //     btn.classList.replace('bx-menu' , 'bx-menu-alt-right');
    //   }else{
    //     btn.classList.replace("bx-menu-alt-right", "bx-menu");
    //   }
    // }

    // $(".bx-search").click(function(){
    //   $('.sidebar').classList.toggleClass('active');
    // })
  }

render(){
    return (
      <div>
      <sidebar className="sidebar">
        <div className="logo_content">
            <div className="logo">
              {/* <div className="logo_name">
                 HAREL 
              </div> */}
            </div>
            {/* <box-icon name='menu' id="btn"></box-icon> */}
            <i class='bx bx-menu' id="btn"></i>
        </div>
        <ul className="nav_list">
          <li>
            <a href='/'>
              {/* <box-icon name='dashboard' type='solid' className="icon" ></box-icon> */}
              <i class='bx bxs-dashboard'></i>
              <span className="links_name"> Dashboard</span>
            </a>
            <span class="tooltip"> Dashboard</span>
          </li>
          <li>
            <a href='/'>
              {/* <box-icon type='solid' name='user' className="icon"></box-icon> */}
              <i class='bx bxs-user'></i>
              <span className="links_name"> Users</span>
            </a>
            <span class="tooltip"> Users</span>
          </li>
        </ul>
      </sidebar>
      <div className="home_content row">
        <Table className="text"></Table>
        <Chart></Chart>
      </div>
      </div>
    );
  }
};

export default  SideBar;