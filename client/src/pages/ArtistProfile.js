import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/index";
import React, {Component} from "react";
import ProfileLeft from "../components/containers/ProfileLeft";
import ProfileRightArtist from "../components/containers/ProfileRightArtist";

// import { createDecipher } from "crypto";


class ArtistProfile extends Component {

  state = {
    gigs:[],
    requests:[],
    venues:[]
  }

  componentDidMount() {
    API.Users.isAuthed().then(res => {
      if(res.data === "false") {
        this.props.history.push("/");
      }
    }).catch(err => console.log(err));
    this.loadGigs();
  }

  loadGigs = () => {
    API.Artists.getGigs()
      .then(res => {
        // console.log("loadGigs res: ")
        // console.log(res);
        this.setState({ gigs: res.data.availableGigs, venues: res.data.allVenues, requests: res.data.artistRequests })})
      .catch(err => console.log(err));
  };

  filterButton = (event) => {
    event.preventDefault();
    console.log("filter button was clicked.");

  }

  handleLogout = event => {
    event.preventDefault();
    API.Users.logout()
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err));
  };


  render() {
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
        >
          <LogoutButton onClick={this.handleLogout}/>
        </ProfileLeft>

        <ProfileRightArtist>
        <GigFilter 
            filter={this.filterButton}
            venues={this.state.venues}
          />
        </ProfileRightArtist>
        
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