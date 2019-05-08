import React from "react";
import "./style.css";
import {InputBox, TextLabel} from "../../inputs";
import {FormButton, StartButton} from "../../buttons";


function ProfileRight(props) {
    console.log(props)

    return(
        <div className = "profile-right">

            <StartButton id = "dis-gigs-btn" label = "View Gigs"/>

            <div className="div" id = "display-make-gig-form">
                <div className = "main-title">Post A Gig</div>
                <br></br>
                <div className = "createGigForm">
                    <form>
                        <TextLabel for = "gig-des">Gig Description:</TextLabel>
                        <InputBox type = "text" id = "gig-des" />

                        <TextLabel for = "gig-genre">Genre(s): </TextLabel>
                        <InputBox type = "text" id = "gig-genre" />  

                        
                        <TextLabel for = "gig-date">Date: </TextLabel>
                        <InputBox type="text" id = "gig-date" name = "date" placeholder = "MM/DD/YYYY"/>
                                                

                        <FormButton id = "gig-create"
                        value = "Post-Gig"
                        className = "btn btn-primary btn-lg btn-main"
                        label = "Post Gig" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileRight;