import React from 'react';
// import {BookGigButton} from "../buttons";
import "./style.css";



var divStyle = {
    color: 'white',
  };
  

function BookedGigs(props) {
    return (
        <div className = "new-result-box">
            <h1 style={divStyle}>these are booked gigs</h1>
            <div className = "booked-gig-card">
                <img src = {props.src} alt = "result image" className= "image"/>

                <div className = "card-text">
                    {/* either the artist's name/description/genre or the venue's */}
                    <h3 className = "card-title">{props.gigName}</h3>
                    <p className = "card-desc">{props.description}</p>
                    <p className = "card-genre">{props.genre}</p>
                    {/*===========================================================*/}

                    <p className = "card-date"> {props.date}</p>
                
                </div>
            </div>
        </div>
    );
}

export default BookedGigs;