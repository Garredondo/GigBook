import React, {Component} from "react";
import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/artists";

// import { createDecipher } from "crypto";

class ArtistProfile extends Component {


  state = {
    gigs:[]
  }

  componentDidMount() {
    this.loadGigs();
  }

  loadGigs = () => {
    API.getGigs()
      .then(res => {
        console.log(res)
        this.setState({ gigs: res.data })})
      
      .catch(err => console.log(err));
  };



  render(){
    // console.log(state);
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