import React from "react";
import "./style.css";
import {LogoutButton,FormButton} from "../../buttons";
import {InputBox} from "../../inputs";

function ProfileLeft(props) {

    if (props.editing === false){
        return(
            <div className = "profile-left">
                <div className = "profile-picture">
                    <img className = "image-profile" alt = "profile-pic" src = {`${props.image || props.profileImage}`} />
                </div>
    
                <div className = "profile-content">
                    <button id = "edit-profile-button" onClick = {props.toggleEdit}>Edit</button>
                    <h1 className = "name"> {props.artistName || props.venueName} </h1>
    
                    {/* For Artist */}
                    <p className="band-genres"> {props.genre} </p>
                    <br></br>
                    <p>Members: <strong>{props.numberOfMembers}</strong> </p>
                    <p className = "instruments"> {props.instrumentation} </p>
    
    
                    {/* For Venue */}
                    <p className = "venue-address"> {props.street_address} </p>
                    <p className = "venue-address"> {props.city && props.state && props.zipcode ? `${props.city}, ${props.state} ${props.zipcode}` : ""}</p>
                </div>
    
                <div className = "profile-bottom">
                    <p> {props.email} </p>
                    <a className = "website-link" href = {`${props.website}`} target="_blank">
                        {props.website}
                    </a>
                    <p> {props.phone} </p>
    
                    {props.children}
                </div>
            </div>
        )
    }

    else {
        return(
            <div className = "profile-left editing">
                <div className = "profile-content">
                    <h3>Image Url</h3>
                    <InputBox defaultValue = {`${props.image || props.profileImage}`}/>
                    <h3>Name</h3>
                    <InputBox defaultValue = {props.artistName || props.venueName}/>

                    {/* For Artist */}
                    <h3>Genre</h3>
                    <InputBox defaultValue = {props.genre}/>
                    <hr />
                    <h3># of Members</h3>
                    <InputBox defaultValue = {props.numberOfMembers} />
                    <h3># of Instruments</h3>
                    <InputBox defaultValue = {props.instrumentation} />
    
    
                    {/* For Venue */}
                    <p className = "venue-address"> {props.street_address} </p>
                    <p className = "venue-address"> {props.city && props.state && props.zipcode ? `${props.city}, ${props.state} ${props.zipcode}` : ""}</p>
                
                
                    <p>Email Address</p>
                    <InputBox defaultValue = {props.email} />
                    <p>Website</p>
                    <InputBox defaultValue = {props.website} />
                    <p>Phone</p>
                    <InputBox defaultValue = {props.phone} />

                    <FormButton label = "Submit Changes" onClick = {props.toggleEdit}/>
                    {/* {props.children} */}
                </div>
    
            </div>
        )
    }

}

export default ProfileLeft;