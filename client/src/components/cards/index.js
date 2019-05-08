import React from 'react';
import {BookGigButton} from "../buttons";
import "./style.css";

function ResultBox(props) {
    return (
        <div className = "result-box">
            <div className = "image-wrapper">
                <img src = {props.src} alt = "result image"/>
            </div>
            
            {/* either the artist's name/description/genre or the venue's */}
            
            
            <h3>{props.name}</h3>
            <hr />
            <div className = "info">
            <p className = "genre"><em>{props.genre}</em></p>
            <p class = "date">{props.date}</p>
            <br />
            <p className = "description">{props.description}</p>
            
            {/*===========================================================*/}

            
            </div>
            <BookGigButton />
        </div>
    );
}

export default ResultBox;