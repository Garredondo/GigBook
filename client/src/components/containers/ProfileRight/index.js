import React from "react";
import "./style.css";
import InputBox from "../../inputs";
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
                        <InputBox></InputBox>
                        <InputBox></InputBox>
                        <InputBox></InputBox>
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