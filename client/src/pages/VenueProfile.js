import React, { Component } from "react";
import { LogoutButton, BookGigButton, StartButton, FormButton } from "../components/buttons";
import API from "../utils/index";
import { InputBox, TextLabel } from "../components/inputs";
import ProfileRightVenue from "../components/containers/ProfileRightVenue";
import ProfileLeft from "../components/containers/ProfileLeft";

class VenueProfile extends Component {

  state = {
    description: "",
    genre: "",
    date: "",
    venue: [],
    display: true
  };

  componentDidMount() {
    API.Users.isAuthed().then(res => {
      // if(res.data === "false") {
      //   this.props.history.push("/");
      // }
    }).catch(err => console.log(err));
    this.loadVenueInfo();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.description && this.state.genre && this.state.date) {
      API.Gigs.postGig({
        description: this.state.description,
        genre: this.state.genre,
        date: this.state.date
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  };

  loadVenueInfo() {
    API.Venues.getVenueInfo().then(res => {
      this.setState({
        venue: res.data
      })
    }).catch(err => console.log(err));
  };

  handleLogout = event => {
    event.preventDefault();
    API.Users.logout()
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  toggleView = () => {
    this.setState({
      display: !this.state.display
    });
  };


  render() {
    return (
      <div>

        <ProfileLeft image={this.state.venue.image}
          venueName={this.state.venue.venueName}
          email={this.state.venue.email}
          website={this.state.venue.website}
          street_address={this.state.venue.street_address}
          city={this.state.venue.city}
          state={this.state.venue.state}
          zipcode={this.state.venue.zipcode}
          phone={this.state.venue.phone}>
          <LogoutButton onClick={this.handleLogout}/>
        </ProfileLeft>

        <ProfileRightVenue >
        {this.state.display ? <StartButton id = "dis-gigs-btn" label = "View Gigs" onClick = {this.toggleView} /> : <StartButton id = "dis-make-gig-form-btn" label = "Make A Gig" onClick = {this.toggleView}/>
}
        

        
          <div className="div" id = "display-make-gig-form">
              <div className = "main-title">Post A Gig</div>
              <br></br>
              <div className = "createGigForm">
                  <form>
                      <TextLabel for = "gig-des">Gig Description:</TextLabel>
                      <InputBox type = "text" id = "gig-des" name="description"
                        onChange={this.handleInputChange}
                        value={this.state.description}
                      />
                      <TextLabel for = "gig-genre">Genre(s): </TextLabel>
                      <InputBox type = "text" id = "gig-genre" name="genre"
                        onChange={this.handleInputChange}
                        value={this.state.genre}
                      />  
                      <TextLabel for = "gig-date">Date: </TextLabel>
                      <InputBox type="text" id = "gig-date" name = "date" placeholder = "MM/DD/YYYY"
                        onChange={this.handleInputChange}
                        value={this.state.date}
                      />
                      <FormButton id = "gig-create"
                        value = "Post-Gig"
                        className = "btn btn-primary btn-lg btn-main"
                        label = "Post Gig" 
                        onClick={this.handleFormSubmit}
                      />
                  </form>
              </div>
          </div>
        </ProfileRightVenue>
      </div>
    );
  }
}

export default VenueProfile;
