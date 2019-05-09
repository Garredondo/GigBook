import React from "react";
import "./style.css";

function TopBar(props){
    return(
        <nav id="topbar">
            <div className="wrapper">
                <div id="logo">
                    GigBook
                </div>
                <div id="nav-right">
                    {props.children}
                </div>
            </div>
        </nav>
    )
}

export default TopBar;