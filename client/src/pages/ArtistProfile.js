import {LogoutButton, BookGigButton} from "../components/buttons";
import GigFilter from "../components/gigfilter";
import API from "../utils/index";
// import { log } from "util";
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
      if(res.data === "false") {
        this.props.history.push("/");
      }
    }).catch(err => console.log(err));
    
    // this.loadArtistInfo();
    this.loadGigs();
    
  };

  //get gig data and load users information

  loadGigs = () => {
    API.Artists.getGigs()
      .then(res => {
        console.log("loadGigs res: ")
        console.log(res.data);
        this.setState({ 
          gigs: res.data.availableGigs, 
          venues: res.data.allVenues, 
          requests: res.data.artistRequests,
          booked: res.data.booked,
          image:res.data.artistRequests.profileImage,
          artistName:res.data.artistRequests.artistName,
          genre:res.data.artistRequests.genre,
          numberOfMembers:res.data.artistRequests.numberOfMembers,
          instrumentation:res.data.artistRequests.instrumentation,
          email:res.data.artistRequests.email,
          website:res.data.artistRequests.website,
          phone:res.data.artistRequests.phone
        })
     
      })
      .catch(err => console.log(err));
  };

  filterButton = (event) => {
    event.preventDefault();

    API.Artists.getGigs()
    .then(res => {
      // console.log("loadGigs res: ")
      // console.log(res.data.booked);
      const option = document.getElementById('inputGroupSelect03').value;
      // console.log("what is option", option);
      const filteredGigs = res.data.availableGigs.filter(gig => { 
        //compare gigName to state.filter. only render those which gigName === this.state.filter
        if(option=== "All Venues"){
          return gig;
        }
        if(gig.gigName === option) {
          return gig;
        }
      })

      this.setState({ 
        gigs: filteredGigs, 
        venues: res.data.allVenues, 
      })
    })
    .catch(err => console.log(err));
  }

  handleLogout = event => {
    event.preventDefault();
    API.Users.logout()
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  
  handleInputChange = event => {
    console.log("testing")
    var { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({[name]: value});
  };

  // loadArtistInfo() {
  //   API.Artists.getArtistInfo().then(res => {
  //     this.setState({
  //       artistInfo: res.data
  //     })
  //   }).catch(err => console.log(err));
  // };

  // This function is for editing the profile (it's executed in ProfileLeft/index.js)
  toggleEdit = () => {
    console.log("Edit was clicked")

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
  };

  // handleDeleteProfile = id => {
  //   API.Users.deleteProfile(id)
  //     .then(res => this.props.history.push("/"))
  //     .catch(err => console.log(err));
  // }

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
    event.preventDefault();
    this.setState({editing:false})

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

    // console.log("=/=/=/=/=U=P=D=A=T=E=/=/=/=/=/=/=/");
    // console.log(updatedArtistInfo);
    // console.log("submitchanges state");
    // console.log(this.state);


    
    API.Artists.update(updatedArtistInfo)
    .then(e=>{
      API.Artists.getGigs()
      .then(res => {
        // console.log("loadGigs res: ")
        // console.log(res.data.booked);
        this.setState({ 

          image:res.requests.profileImage,
          artistName:res.requests.artistName,
          genre:res.requests.genre,
          numberOfMembers:res.requests.numberOfMembers,
          instrumentation:res.requests.instrumentation,
          email:res.requests.email,
          website:res.requests.website,
          phone:res.requests.phone
        })
      })
      .catch(err => console.log(err));  
    
    })
    .catch(err => console.log(err));
    
  }

  render() {

    // console.log("what is this.state.requests? client/src/pages/ArtistProfile.js")
    // console.log(this.state.requests)
    console.log("what is this.state.editing? client/src/pages/ArtistProfile.js")
    console.log(this.state.editing)
    return (
      <div>

        {(this.state.requests.profileImage) ? 
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
              toggleEdit = {this.toggleEdit}
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
            </ProfileLeft>
        }

        

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
            <div className = "main-title">Booked Gigs</div>
          <hr className = "divider"></hr>
       
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





        {/* <DeleteProfileButton onClick={()=> {this.handleDeleteProfile(this.state.requests.id)}}/> */}
        {/* <DeleteProfileButton onClick={this.handleDeleteProfile}/> */}
      </div>
    );
  }
}
export default ArtistProfile;






