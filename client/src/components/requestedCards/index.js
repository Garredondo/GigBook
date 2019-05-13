import React from 'react';


function ResultBox2(props) {
    return (
        <div className = "gig-card col-12">
        <img src = {props.src} alt = "Venue's profile image" className= "image"/>

        <div className = "card-text">
            {/* either the artist's name/description/genre or the venue's */}
            <h3 className = "card-title">{props.name}</h3>
            <p className = "card-desc">{props.description}</p>
            <p className = "card-genre">{props.genre}</p>
            {/*===========================================================*/}
            <p className = "card-date"> {props.date}</p>
            {/* {props.artists.map(artist => (
                  <h3>{artist.artistName}</h3>
                  
                ))} */}
            {props.children}
        </div>
    </div>
    );
}

export default ResultBox2;