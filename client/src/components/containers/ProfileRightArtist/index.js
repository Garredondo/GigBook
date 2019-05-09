import React from "react";
import GigFilter from "../../gigfilter";
import ResultBox from "../../cards";

function ProfileRightArtist(props) {
    console.log(props)


    return(
        <div className = "profile-right">

            <GigFilter />

            <ResultBox 
            src = "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/dee61aad9a52408abded3b7f0492bab4/2/4SoifmQp45JMgBnHp7ed2/EMOS-RELAUNCH2019-11-Resized.jpg"
            name = "Emo's Austin"
            description = "Jesse's Jam Sesh"
            genre = "Funk"
            date = "05/16/2019" />
        </div>
    )
}

export default ProfileRightArtist;