import React from "react";
import GigFilter from "../../gigfilter";
import ResultBox from "../../cards";

function ProfileRightArtist(props) {
    console.log(props)


    return(
        <div className = "profile-right">

        {props.children}
            
        </div>
    )
}

export default ProfileRightArtist;