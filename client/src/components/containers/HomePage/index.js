import React from "react";
import "./style.css";

function HomePage(props){
    return(
        <div>
            <div className="wrapper">
                {props.children}
            </div>
        </div>
    );
}

export default HomePage;