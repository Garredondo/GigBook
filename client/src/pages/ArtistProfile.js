import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/index";
import React, {Component} from "react";
import ProfileLeft from "../components/containers/ProfileLeft";
import ProfileRightArtist from "../components/containers/ProfileRightArtist";
import ResultBox from "../components/cards";

// import { createDecipher } from "crypto";

class ArtistProfile extends Component {

  state = {
    gigs:[],
    requests:{},
    venues:[]
  };

  componentDidMount() {
    // API.Users.isAuthed().then(res => {
    //   if(res.data === "false") {
    //     this.props.history.push("/");
    //   }
    // }).catch(err => console.log(err));
    this.loadGigs();
  };

  loadGigs = () => {
    API.Artists.getGigs()
      .then(res => {
        // console.log("loadGigs res: ")
        // console.log(res.data);
        this.setState({ 
          gigs: res.data.availableGigs, 
          venues: res.data.allVenues, 
          requests: res.data.artistRequests 
        })
      })
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
    // this.loadGigs()
    console.log(this.state.requests)
    return (
      <div>
        <h1>Artist Profile Page</h1>
        <ProfileLeft 
          image={this.state.requests.profileImage}
          artistName={this.state.requests.artistName}
          genre={this.state.requests.genre}
          numberOfMembers={this.state.requests.numberOfMembers}
          instrumentation={this.state.requests.instrumentation}
          email={this.state.requests.email}
          website={this.state.requests.website}
          phone={this.state.requests.phone}
        >
          <LogoutButton onClick={this.handleLogout}/>
        </ProfileLeft>
        

        <ProfileRightArtist>
        <GigFilter filter = {this.filterButton} venues = {this.state.venues} ></GigFilter>

        <ResultBox 
        src = "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/dee61aad9a52408abded3b7f0492bab4/2/4SoifmQp45JMgBnHp7ed2/EMOS-RELAUNCH2019-11-Resized.jpg"
        name = "Emo's Austin"
        description = "Jesse's Jam Sesh"
        genre = "Funk"
        date = "05/16/2019" />
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