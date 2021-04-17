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
                    <a href="/">Facebook</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Apple</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Amazon.com</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Shopify</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Microsoft</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Tesla</a>
                </div>
                <h2>FINANCIALS</h2>
                <div className="sidebar_link">
                    <a href="/">Revenue Growth</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Gross Profit Margin</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Free Cashflow Margin</a>
                </div>
                <h2>INFORMATION</h2>
                <div className="sidebar_link">
                    <a href="/">How To</a>
                </div>
                <div className="sidebar_link">
                    <a href="/">Contact</a>
                </div>
                

            </div>

        </div>
    )
}

export default Sidebar;