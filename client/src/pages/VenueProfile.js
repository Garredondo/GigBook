import React, {Component} from "react";
import {LogoutButton, BookGigButton} from "../components/buttons";
import API from "../utils/index";
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
        <ProfileRightVenue />
      </div>
    );
  }
}

export default VenueProfile;
