import React, {Component} from "react";
import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/API";

// import { createDecipher } from "crypto";

class ArtistProfile extends Component {


  state = {
    gigs:[]
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadGigs = () => {
    API.getGigs()
      .then(res => this.setState({ gigs: res.data }))
      .catch(err => console.log(err));
  };



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