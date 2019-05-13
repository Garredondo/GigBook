import React from "react";
import "./style.css";
import {FormButton} from "../../buttons";
import {InputBox} from "../../inputs";

function ProfileLeft(props) {

    if (props.editing === false){
        return(
            <div className = "profile-left" style = {{left:props.mobile ? "-300px" : "0"}}>
                <button id = "collapse-profile" onClick = {props.toggleSidebar}>></button>
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
                <button id = "collapse-profile" onClick = {props.toggleSidebar}>></button>
                <div className = "profile-content">
                    <h4>Image Url</h4>
                    <InputBox name = "profileImage" onChange = {props.handleInputChange} defaultValue = {`${props.image || props.profileImage}`}/>
                    <h4>Name</h4>
                    <InputBox name = "artistName" defaultValue = {props.artistName || props.venueName} onChange = {props.handleInputChange}/>

                    {/* For Artist */}
                    <h4>Genre</h4>
                    <InputBox name = "genre" defaultValue = {props.genre} onChange = {props.handleInputChange}/>
                    
                    <div id = "quantities">
                        <p id = "members"># of Members</p>
                        <p id = "instruments">Instrumentation</p>
                        <InputBox name = "numberOfMembers" onChange = {props.handleInputChange} defaultValue = {props.numberOfMembers} />
                        <InputBox name = "instrumentation" onChange = {props.handleInputChange} defaultValue = {props.instrumentation} />
                    </div>
                    {/* For Venue */}
                    <p className = "venue-address"> {props.street_address} </p>
                    <p className = "venue-address"> {props.city && props.state && props.zipcode ? `${props.city}, ${props.state} ${props.zipcode}` : ""}</p>
                
                    <p>Email Address</p>
                    <InputBox name = "email" onChange = {props.handleInputChange} defaultValue = {props.email} />
                    <p>Website</p>
                    <InputBox name = "website" onChange = {props.handleInputChange} defaultValue = {props.website} />
                    <p>Phone</p>
                    <InputBox name = "phone" onChange = {props.handleInputChange} defaultValue = {props.phone} />

                    <FormButton label = "Submit Changes" onClick = {props.submitChanges}/>
                    {/* {props.children} */}
                </div>
            </div>
        )
    }
}

export default ProfileLeft;