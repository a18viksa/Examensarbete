import "./sidebar.css"
import React from 'react';

const Sidebar = () => {
    return(
        <div className="sidebar" id="sidebar">
            <div className="sidebar_title">
                <h1>Dashboard</h1>
            </div>

            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <a href="/">Line Chart</a>
                </div>
                <h2>STOCKS</h2>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum</a>
                </div>
                <h2>FINANCIALS</h2>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum dolor sit amet</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum dolor sit amet</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum dolor sit amet</a>
                </div>
                <h2>INFORMATION</h2>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum dolor</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Lorem ipsum dolor</a>
                </div>
                

            </div>

        </div>
    )
}

export default Sidebar;