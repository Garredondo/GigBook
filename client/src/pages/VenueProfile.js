import React, {Component} from "react";
import {LogoutButton, BookGigButton} from "../components/buttons";
import API from "../utils/index";
import ProfileRightVenue from "../components/containers/ProfileRightVenue";
import ProfileLeft from "../components/containers/ProfileLeft";



class VenueProfile extends Component {

  componentDidMount() {
    API.Users.isAuthed().then(res => {
      if(res.data === "false") {
        this.props.history.push("/");
      }
    }).catch(err => console.log(err));
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
        <ProfileLeft image="https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/dee61aad9a52408abded3b7f0492bab4/2/4SoifmQp45JMgBnHp7ed2/EMOS-RELAUNCH2019-11-Resized.jpg"
          venueName="Emo's Austin" 
          email="email@email.com"
          website="https://www.emosaustin.com/"
          street_address = "2015 E Riverside Drive"
          city = "Austin"
          state = "Texas"
          zipcode = "78741"
          phone="(000)-000-0000">
          <LogoutButton onClick={this.handleLogout}/>
          </ProfileLeft>
        <ProfileRightVenue />
      </div>
    );
  }
}

export default VenueProfile;
