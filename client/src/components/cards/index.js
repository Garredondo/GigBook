import {React, Component} from 'react';
import {BookGigButton} from "../buttons";

function ResultBox(props) {
    return (
        <div className = "result-box">
            <img src = {props.src} alt = "result image"/>

            {/* either the artist's name/description/genre or the venue's */}
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.genre}</p>
            {/*===========================================================*/}

            <p>{props.date}</p>
            <BookGigButton />
        </div>
    );
}

export default ResultBox;