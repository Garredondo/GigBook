import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/index";
import { log } from "util";

import React, {Component} from "react";
import ProfileLeft from "../components/containers/ProfileLeft";
import ProfileRightArtist from "../components/containers/ProfileRightArtist";
import ResultBox from "../components/cards";
import BookedGigs from "../components/pendinggigs";


class ArtistProfile extends Component {
  state = {
    gigs:[],
    requests:{},
    venues:[],
    booked:[],
    filter:"",
    // This is for the Profile Left Component =/=/=/=/=/=/=/=/=/=/=/
    editing:false,
    profileImage: "",
    artistName: "",
    genre: "",
    numberOfMembers: 0,
    instrumentation: "",
    phone: 0,
    website: "",
    email: "",
    //=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

  };

  componentDidMount() {
    API.Users.isAuthed().then(res => {
      // if(res.data === "false") {
      //   this.props.history.push("/");
      // }
    }).catch(err => console.log(err));
    
    this.loadArtistInfo();
    this.loadGigs();
  };

  loadGigs = () => {
    API.Artists.getGigs()
      .then(res => {
        // console.log("loadGigs res: ")
        // console.log(res.data.booked);
        this.setState({ 
          gigs: res.data.availableGigs, 
          venues: res.data.allVenues, 
          requests: res.data.artistRequests,
          booked: res.data.booked
        })
      })
      .catch(err => console.log(err));
  };

  // filterButton = (event) => {
  //   event.preventDefault();

  //   this.state.gigs.filter(gig => {
  //     //compare gigName to state.filter. only render those which gigName === this.state.filter
  //     if(gigName===)

  //   })

  //   console.log("filter button was clicked.");

  // }

  handleLogout = event => {
    event.preventDefault();
    API.Users.logout()
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  
  handleInputChange = event => {
    var { name, value } = event.target;
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
  bookGigAsArtist = (event,id) => {
    var ArtistId = this.state.requests.id;
    var GigId = event;
    API.Requests.bookGigAsArtist({
      ArtistId,
      GigId
    }).then(res => console.log(res))
    .catch(err => console.log(err));
  };



  submitChanges = (event) => {
    console.log(this.state);
    event.preventDefault();

    let updatedArtistInfo = {
      profileImage: this.state.profileImage,
      artistName: this.state.artistName,
      genre: this.state.genre,
      numberOfMembers: parseInt(this.state.numberOfMembers),
      instrumentation: this.state.instrumentation,
      phone: this.state.phone,
      website: this.state.website,
      email:this.state.email
    }

    console.log("=/=/=/=/=U=P=D=A=T=E=/=/=/=/=/=/=/");
    console.log(updatedArtistInfo);
    
    API.Artists.update(updatedArtistInfo)
    .then(this.setState({editing:false})).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Artist Profile Page</h1>

        {this.state.requests.profileImage ? 
          <ProfileLeft 
          editing = {this.state.editing}
          toggleEdit = {this.toggleEdit}
          image={this.state.requests.profileImage}
          artistName={this.state.requests.artistName}
          genre={this.state.requests.genre}
          numberOfMembers={this.state.requests.numberOfMembers}
          instrumentation={this.state.requests.instrumentation}
          email={this.state.requests.email}
          website={this.state.requests.website}
          phone={this.state.requests.phone}
          submitChanges = {this.submitChanges}
          handleInputChange = {this.handleInputChange}
        >
          <LogoutButton onClick={this.handleLogout}/>
        </ProfileLeft> 
        : 
        <ProfileLeft 
        editing = {this.state.editing}
        image={"https://via.placeholder.com/150"}
        artistName={this.state.requests.artistName}
        genre={this.state.requests.genre}
        numberOfMembers={this.state.requests.numberOfMembers}
        instrumentation={this.state.requests.instrumentation}
        email={this.state.requests.email}
        website={this.state.requests.website}
        phone={this.state.requests.phone}
        submitChanges = {this.submitChanges}
        handleInputChange = {this.handleInputChange}
      >
        <LogoutButton onClick={this.handleLogout}/>
      </ProfileLeft>}

        

        <ProfileRightArtist>
          <GigFilter filter = {this.filterButton} venues = {this.state.venues} />

          <div className = "result-box">
            { this.state.gigs.map( gig => (
              <ResultBox 
            src = {gig.image}
            name = {gig.gigName}
            description = {gig.description}
            genre = {gig.genre}
            date = {gig.date}>
              <BookGigButton dataId={gig.id} onClick={() => this.bookGigAsArtist(gig.id)}/>
            </ResultBox>
            ))
            
            // src = "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/dee61aad9a52408abded3b7f0492bab4/2/4SoifmQp45JMgBnHp7ed2/EMOS-RELAUNCH2019-11-Resized.jpg"
            // name = "Emo's Austin"
            // description = "Jesse's Jam Sesh"
            // genre = "Funk"
            // date = "05/16/2019" />
            }
            {/* <BookedGigs 
            src = "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/dee61aad9a52408abded3b7f0492bab4/2/4SoifmQp45JMgBnHp7ed2/EMOS-RELAUNCH2019-11-Resized.jpg"
            name = "Central Market"
            description = "boogaloo"
            genre = "Funk"
            date = "05/17/2019" /> */}
            <hr />
            <h2>Pending Gigs</h2>
       
            { this.state.booked.map( gig => (
              <BookedGigs
                src = {gig.image}
                name = {gig.gigName}
                description = {gig.description}
                genre = {gig.genre}
                date = {gig.date} 
              />
            ))}

        </div>
        </ProfileRightArtist>
        
        {/* <LogoutButton />
        <FilterButton /> */}

        {/* When we map out each gig, 
        BookGigButton will have dataID={gig.Id} */}
      </div>
    );
  }
}
export default ArtistProfile;
