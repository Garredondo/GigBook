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

  handleSignUp = event => {
    event.preventDefault();
    if (this.state.name && this.state.password) {
      API.Users.signUp({
        name: this.state.name,
        password: this.state.password,
        role: this.state.role
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.name && this.state.password) {
      API.Users.login({
        name: this.state.name,
        password: this.state.password,
        role: this.state.role
      })
        .then(res => {
          if (res.data.role === "venue") {
            this.props.history.push("/venue/profile/" + res.data.id);
          } else if (res.data.role === "artist") {
            this.props.history.push("/artist/profile/" + res.data.id);
          }
        })
        .catch(err => console.log(err));
    }
  };

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
  
          <FormButton id={"signup-submit"} type={"submit"} value={"Submit"}
          className={"sign-up-main"} 
          label={"Sign Up"} onClick={this.handleSignUp}/>
          <FormButton id={"login-submit"} value={"Submit"} 
          className={"log-in"}
          label={"Log In"} onClick={this.handleLogin}/>
      </div>
    );
  }
}

export default Home;