import React from 'react';
import "./style.css";
import moment from "moment";


function ResultBox(props) {
    return (
        <div id = "">
            <div className = "gig-card">
                <img src = {props.src} alt = "users profile image" className= "image"/>

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
        </div>
    );
}

export default ResultBox;