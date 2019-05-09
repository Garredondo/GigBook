import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/index";
import React, {Component} from "react";
import ProfileLeft from "../components/containers/ProfileLeft";
import ProfileRight from "../components/containers/ProfileRight";

// import { createDecipher } from "crypto";

class ArtistProfile extends Component {

  state = {
    gigs:[],
    requests:[],
    venues:[],
    // This is for the Profile Left Component
    editing:false
  }

  componentDidMount() {
    API.Users.isAuthed().then(res => {
      // if(res.data === "false") {
      //   this.props.history.push("/");
      // }
    }).catch(err => console.log(err));
    this.loadGigs();
  };

  loadGigs = () => {
    API.Artists.getGigs()
      .then(res => {
        // console.log("loadGigs res: ")
        // console.log(res.data);
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


  // This function is for editing the profile (it's executed in ProfileLeft/index.js)
  toggleEdit = () => {
    if (this.state.editing === false){
      this.setState({
        editing: true
      });
    }
    else if (this.state.editing === true){
      this.setState({
        editing:false
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Artist Profile Page</h1>

        <ProfileLeft 
          toggleEdit = {this.toggleEdit}
          editing = {this.state.editing}
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
       
          <GigFilter 
            filter={this.filterButton}
            venues={this.state.venues}
          />

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