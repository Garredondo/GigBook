import React, {Component} from "react";
import {LogoutButton, GigFilter, BookGigButton} from "../components/buttons";
import { createDecipher } from "crypto";

class ArtistProfile extends Component {



render(){
    return (
      <div>
          <LogoutButton />
          <GigFilter />

        {/* When we map out each gig, 
        BookGigButton will have dataID={gig.Id} */}
          <BookGigButton dataId={1}/>
      </div>
    );
  }
}
export default ArtistProfile;