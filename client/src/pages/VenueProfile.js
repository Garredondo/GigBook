import React from "react";
import {LogoutButton, PostGigButton, StartButton} from "../components/buttons";



function VenueProfile() {
  return (
    <div>
      <LogoutButton/>
      <PostGigButton />
      <StartButton label="View Gigs" id="dis-gigs-btn"/>
      <StartButton label="Make a Gig" id="dis-make-gig-form-btn"/>
    </div>
  );
}

export default VenueProfile;
