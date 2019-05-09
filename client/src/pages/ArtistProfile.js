import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/artists";
import React, {Component} from "react";
import ProfileLeft from "../components/containers/ProfileLeft";
import ProfileRight from "../components/containers/ProfileRight";

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
        console.log("loadGigs res: ")
        console.log(res);
        this.setState({ gigs: res.data })})
      .catch(err => console.log(err));
  };

  render(){
    // console.log("ArtistProfile.js state is: ")
    // console.log(this.state);
    return (
      <div>
        <h1>Artist Profile Page</h1>

        <ProfileLeft image="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/921376_1654683351451821_2260836721501491794_o.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=672d9bcebdf79dcde7119017abdbe144&oe=5D32B9DB"
          artistName="Stones ATX"
          genre="Classic Rock"
          numberOfMembers="5"
          instrumentation="Full Set"
          email="devildog66@austin.rr.com"
          website="https://www.facebook.com/pg/StonesATX/about/?ref=page_internal"
          phone="(555) 555-5555"
        />
        <GigFilter />
        <ProfileRight />
        
        {/* <LogoutButton />
        <FilterButton /> */}

        {/* When we map out each gig, 
        BookGigButton will have dataID={gig.Id} */}
        <BookGigButton dataId={1} />
      </div>
    );
  }
}
export default ArtistProfile;