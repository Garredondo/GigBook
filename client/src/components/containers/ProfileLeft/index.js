import React from "react";
import "./style.css";
import {FormButton} from "../../buttons";
import {InputBox} from "../../inputs";

function ProfileLeft(props) {
    if (props.editing === false){
        if(props.role === "artist"){
            return(
                <div className = "profile-left">
                    <div className = "profile-picture">
                        <img className = "image-profile" alt = "profile-pic" src = {props.profileImage}/>
                    </div>
        
                    <div className = "profile-content">
                        <button id = "edit-profile-button" onClick = {props.toggleEdit}>Edit</button>
                        <h1 className = "name"> {props.artistName} </h1>
                        <p className="band-genres"> {props.genre} </p>
                        <br></br>
                        <p>Members: <strong>{props.numberOfMembers}</strong> </p>
                        <p className = "instruments"> {props.instrumentation} </p>
                    </div>
        
                    <div className = "profile-bottom">
                        <p> {props.email} </p>
                        <a className = "website-link" href = {`${props.website}`} target="_blank" rel="noopener noreferrer">
                            {props.website}
                        </a>
                        <p> {props.phone} </p>
        
                        {props.children}
                    </div>
                </div>
            )
        } else {
            return(
                <div className = "profile-left">
                    <div className = "profile-picture">
                        <img className = "image-profile" alt = "profile-pic" src = {props.image} />
                    </div>
        
                    <div className = "profile-content">
                        <button id = "edit-profile-button" onClick = {props.toggleEdit}>Edit</button>
                        <h1 className = "name"> {props.venueName} </h1>
                        <p className = "venue-address"> {props.street_address} </p>
                        <p className = "venue-address"> {props.city && props.state && props.zipcode ? `${props.city}, ${props.state} ${props.zipcode}` : ""}</p>
                    </div>
        
                    <div className = "profile-bottom">
                        <p> {props.email} </p>
                        <a className = "website-link" href = {`${props.website}`} target="_blank" rel="noopener noreferrer">
                            {props.website}
                        </a>
                        <p> {props.phone} </p>
        
                        {props.children}
                    </div>
                </div>
            )

        }
    }

    if(props.editing === true){
        if(props.role === "artist"){
            return (
                <div className = "profile-left editing">
                    <div className = "profile-content">
                        <h3>Image Url</h3>
                        <InputBox name = "profileImage" onChange = {props.handleInputChange} defaultValue = {props.profileImage}/>
                        <h3>Name</h3>
                        <InputBox name = "artistName" defaultValue = {props.artistName} onChange = {props.handleInputChange}/>
                        <h3>Genre</h3>
                        <InputBox name = "genre" defaultValue = {props.genre} onChange = {props.handleInputChange}/>
                        <hr />
                        <h3># of Members</h3>
                        <InputBox name = "numberOfMembers" onChange = {props.handleInputChange} defaultValue = {props.numberOfMembers} />
                        <h3># of Instruments</h3>
                        <InputBox name = "instrumentation" onChange = {props.handleInputChange} defaultValue = {props.instrumentation} />
        
                        <p>Email Address</p>
                        <InputBox name = "email" onChange = {props.handleInputChange} defaultValue = {props.email} />
                        <p>Website</p>
                        <InputBox name = "website" onChange = {props.handleInputChange} defaultValue = {props.website} />
                        <p>Phone</p>
                        <InputBox name = "phone" onChange = {props.handleInputChange} defaultValue = {props.phone} />

                        <FormButton label = "Submit Changes" onClick = {props.submitChanges}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className = "profile-left editing">
                    <div className = "profile-content">
                        <h3>Image Url</h3>
                        <InputBox name = "image" onChange = {props.handleInputChange} defaultValue = {props.image}/>
                        <h3>Name</h3>
                        <InputBox name = "venueName" defaultValue = {props.venueName} onChange = {props.handleInputChange}/>
                    
                        <p className = "venue-address">Street Address</p>
                        <InputBox name = "street_address"  onChange = {props.handleInputChange} defaultValue = {props.street_address}/>

                        <p className = "venue-address">City</p>
                        <InputBox name = "city"  onChange = {props.handleInputChange} defaultValue = {props.city}/>

                        <p className = "venue-address">State</p>
                        <InputBox name = "state"  onChange = {props.handleInputChange} defaultValue = {props.state}/>

                        <p className = "venue-address">Zip Code</p>
                        <InputBox name = "zipcode"  onChange = {props.handleInputChange} defaultValue = {props.zipcode}/>

                        <p>Email Address</p>
                        <InputBox name = "email" onChange = {props.handleInputChange} defaultValue = {props.email} />
                        <p>Website</p>
                        <InputBox name = "website" onChange = {props.handleInputChange} defaultValue = {props.website} />
                        <p>Phone</p>
                        <InputBox name = "phone" onChange = {props.handleInputChange} defaultValue = {props.phone} />

                        <FormButton label = "Submit Changes" onClick = {props.submitChanges}/>
                    </div>
                </div>
            )
        }
    }
}


export default ProfileLeft;