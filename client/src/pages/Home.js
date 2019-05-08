import React, { Component } from "react";
import {TextLabel, InputBox, Radio} from "../components/inputs";
import {ModalButton, FormButton} from "../components/buttons";
import API from "../utils/index";

class Home extends Component {
  state = {
    name: "",
    password: "",
    confirmPassword: "",
    role: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => console.log(this.state.role));
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.username && this.state.password) {
  //     API.userLogin({
  //       username: this.state.username,
  //       password: this.state.password,
  //       role: this.state.role
  //     })
  //       .then(res => this.loadProfile())
  //       .catch(err => console.log(err));
  //   }
  // };



  render(){
    return (
      <div>
          <h1>Home Page</h1>
          <div>
            <ModalButton className={"log-in"} 
            data-target={"#login-modal"}
            label={"Log In"}/>
            <ModalButton className={"sign-up"} 
            data-target={"#form-modal"}
            label={"Sign Up"}/>
            <ModalButton className={"sign-up-main"} 
            data-target={"#form-modal"}
            label={"Sign Up"}/>
            <FormButton id={"login-submit"} value={"Submit"} 
            className={"log-in"}
            label={"Log In"}/>
            <FormButton id={"signup-submit"} type={"submit"} value={"Submit"}
            className={"sign-up-main"} 
            label={"Sign Up"}/>
          </div>





          <TextLabel>Username</TextLabel>
          <InputBox 
          placeholder="Username"
          name="name" 
          value={this.state.name}
          onChange={this.handleInputChange}/>
          <TextLabel>Password</TextLabel>
          <InputBox 
          placeholder="Password" 
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          />
          <TextLabel>Confirm Password</TextLabel>
          <InputBox 
          placeholder="Confirm Password" 
          name="confirmPassword"
          type="password"
          value={this.state.confirmPassword}
          onChange={this.handleInputChange}/>


          <TextLabel>Are you a Venue or Artist?</TextLabel>
          <Radio value="venue" name="role" checked={this.state.role === "venue"} onChange={this.handleInputChange} />Venue
          <Radio value="artist" name="role" checked={this.state.role === "artist"} onChange={this.handleInputChange} />Artist
  
      </div>
    );
  }
}

export default Home;