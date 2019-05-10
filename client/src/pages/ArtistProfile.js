import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/index";
import { log } from "util";

import React, {Component} from "react";
import ProfileLeft from "../components/containers/ProfileLeft";
import ProfileRightArtist from "../components/containers/ProfileRightArtist";
import ResultBox from "../components/cards";

// import { createDecipher } from "crypto";

class ArtistProfile extends Component {

  state = {
    gigs:[],
    requests:{},
    venues:[],
    // This is for the Profile Left Component
    editing:false,
    artistInfo: []
  }

  componentDidMount() {
    // API.Users.isAuthed().then(res => {
    //   // if(res.data === "false") {
    //   //   this.props.history.push("/");
    //   // }
    // }).catch(err => console.log(err));
    
    this.loadArtistInfo();
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
        });
        
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

  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadArtistInfo() {
    API.Artists.getArtistInfo().then(res => {
      this.setState({
        artistInfo: res.data
      })
    }).catch(err => console.log(err));
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

  submitChanges = () => {
    API.Artists.update().then(this.setState({editing:false})).catch(err => console.log(err));
    
  }

  render() {
    // this.loadGigs()
    console.log(this.state.requests)
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
          submitChanges = {this.submitChanges}
        >{/*~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/E/X/P/E/R/I/M/E/N/T/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/*/}
          {/*Hunter: "Possible Beginning of Profile Left Content" */}
          <div className = "profile-left">
                <div className = "profile-picture">
                    <img className = "image-profile" alt = "profile-pic" src = {`${this.state.requests.image || this.state.requests.profileImage}`} />
                </div>
    
                <div className = "profile-content">
                    <button id = "edit-profile-button" onClick = {this.toggleEdit}>Edit</button>
                    <h1 className = "name"> {this.state.requests.artistName || this.state.requests.venueName} </h1>
    
                    {/* For Artist */}
                    <p className="band-genres"> {this.state.requests.genre} </p>
                    <br></br>
                    <p>Members: <strong>{this.state.requests.numberOfMembers}</strong> </p>
                    <p className = "instruments"> {this.state.requests.instrumentation} </p>
                </div>
    
                <div className = "profile-bottom">
                    <p> {this.state.requests.email} </p>
                    <a className = "website-link" href = {`${this.state.requests.website}`} target="_blank">
                        {this.state.requests.website}
                    </a>
                    <p> {this.state.requests.phone} </p>
                </div>
            </div>
        )
         {/*~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/~/*/}

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