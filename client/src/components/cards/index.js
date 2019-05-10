import React from 'react';
import {BookGigButton} from "../buttons";
import "./style.css";

function ResultBox(props) {
    return (
        
            <div className = "gig-card">
                <img src = {props.src} alt = "result image" className= "image"/>

                <div className = "card-text">
                    {/* either the artist's name/description/genre or the venue's */}
                    <h3 className = "card-title">{props.name}</h3>
                    <p className = "card-desc">{props.description}</p>
                    <p className = "card-genre">{props.genre}</p>
                    {/*===========================================================*/}
                    <p className = "card-date"> {props.date}</p>
                    <BookGigButton />
                </div>
            </div>
        
    );
}

export default ResultBox;