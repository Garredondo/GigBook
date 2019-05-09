import React, {Component} from "react";
import {LogoutButton, BookGigButton, StartButton, FormButton} from "../components/buttons";
import API from "../utils/index";
import {InputBox, TextLabel} from "../components/inputs";
import ProfileRightVenue from "../components/containers/ProfileRightVenue";
import ProfileLeft from "../components/containers/ProfileLeft";

class VenueProfile extends Component {

  state = {
    venue: []
  };

  componentDidMount() {
    API.Users.isAuthed().then(res => {
      // if(res.data === "false") {
      //   this.props.history.push("/");
      // }
    }).catch(err => console.log(err));
    this.loadVenueInfo();
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

  render() {
    return (
      <div>
        <ProfileLeft image={this.state.venue.image}
          venueName={this.state.venue.venueName}
          email={this.state.venue.email}
          website={this.state.venue.website}
          street_address = {this.state.venue.street_address}
          city = {this.state.venue.city}
          state = {this.state.venue.state}
          zipcode = {this.state.venue.zipcode}
          phone={this.state.venue.phone}>
          <LogoutButton onClick={this.handleLogout}/>
          </ProfileLeft>
        <ProfileRightVenue >
        <StartButton id = "dis-gigs-btn" label = "View Gigs"/>

<div className="div" id = "display-make-gig-form">
    <div className = "main-title">Post A Gig</div>
    <br></br>
    <div className = "createGigForm">
        <form>
            <TextLabel for = "gig-des">Gig Description:</TextLabel>
            <InputBox type = "text" id = "gig-des" />

            <TextLabel for = "gig-genre">Genre(s): </TextLabel>
            <InputBox type = "text" id = "gig-genre" />  

            
            <TextLabel for = "gig-date">Date: </TextLabel>
            <InputBox type="text" id = "gig-date" name = "date" placeholder = "MM/DD/YYYY"/>
                                    

            <FormButton id = "gig-create"
            value = "Post-Gig"
            className = "btn btn-primary btn-lg btn-main"
            label = "Post Gig" />
        </form>
    </div>
</div>
        </ProfileRightVenue>
      </div>
    );
  }
}

export default VenueProfile;
