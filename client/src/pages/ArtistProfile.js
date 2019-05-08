import React from "react";
import {LogoutButton, FilterButton, BookGigButton} from "../components/buttons";
// import { createDecipher } from "crypto";

function ArtistProfile() {




  return (
    <div>
        <LogoutButton />
        <FilterButton />

      {/* When we map out each gig, 
      BookGigButton will have dataID={gig.Id} */}
        <BookGigButton dataId={1}/>
    </div>
  );
}

export default ArtistProfile;