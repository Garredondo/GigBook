import React from 'react';
import moment from "moment";
import "./style.css";


function ResultBox2(props) {
    return (
        <div className = "gig-card requests col-12">
        <img src = {props.src} alt = "Venue's profile image" className= "image"/>

        <div className = "card-text">
            {/* either the artist's name/description/genre or the venue's */}
            <h3 className = "card-title">{props.name}</h3>
            <p className = "card-desc">{props.description}</p>
            <p className = "card-genre">{props.genre}</p>
            {/*===========================================================*/}
            <p className = "card-date"> {moment(props.date).format("MM/DD/YYYY")}</p>
           
            {props.children}
        </div>
    </div>
    );
}

export default ResultBox2;