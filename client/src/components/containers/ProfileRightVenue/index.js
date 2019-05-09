import React from "react";
import "./style.css";



function ProfileRight(props) {

    return(
        <div className = "profile-right">
            {props.children}
        </div>
    )
}

export default ProfileRight;