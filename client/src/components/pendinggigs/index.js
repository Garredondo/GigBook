import React from 'react';
// import {BookGigButton} from "../buttons";
import "./style.css";




  

function BookedGigs(props) {
    return (
            <div id={props.id} className = "booked-gig-card">
    
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
       
    )
}

export default BookedGigs;