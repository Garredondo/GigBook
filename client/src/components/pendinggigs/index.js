import React from 'react';
// import {BookGigButton} from "../buttons";
import ResultBox from "../cards/index.js";
import "./style.css";
import moment from "moment";


function BookedGigs(props) {
    return (
            <div id={props.id} className = "booked-gig-card">
    
                <img src = {props.src} alt = "venues profile image" className= "image"/>

                <div className = "card-text">
                    {/* either the artist's name/description/genre or the venue's */}
                    <h3 className = "card-title">{props.name}</h3>
                    <p className = "card-desc">{props.description}</p>
                    <p className = "card-genre">{props.genre}</p>
                    {/*===========================================================*/}

                    <p className = "card-date"> {moment(props.date).format("MM/DD/YYYY")}</p>
                
                </div>
            </div>
    )
}

export default BookedGigs;