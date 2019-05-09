import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {TextLabel, InputBox, Radio} from "../components/inputs";
import {ModalButton, FormButton} from "../components/buttons";
import API from "../utils/index";
// import HomePage from "../components/containers/HomePage";
import TopBar from "../components/topbar";

const styles = {
  text: {
    color: "black"
  }
}



class Home extends Component {
  state = {
    name: "",
    password: "",
    confirmPassword: "",
    roleSignUp: "",
    roleLogin: ""
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
        role: this.state.roleSignUp
      })     
    .then(res => this.props.history.push("/venue/profile/" + res.data.id))
    .catch(err => console.log(err));
    }


    this.setState({
      name: "",
      password: "",
      roleSignUp: ""
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.name && this.state.password) {
      API.Users.login({
        name: this.state.name,
        password: this.state.password,
        role: this.state.roleLogin
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

    this.setState({
      name: "",
      password: "",
      roleLogin: ""
    });
  };


  render(){
    return (
      <div>
        <TopBar>
            <ModalButton className={"log-in"} 
            dataEventTarget={"#login-modal"}
            label={"Log In"}
            />
            
            <ModalButton className={"sign-up"} 
            dataEventTarget={"#form-modal"}
            label={"Sign Up"}/>
        </TopBar>
        

        <ModalButton className={"sign-up-main"} 
        dataEventTarget={"#form-modal"}
        label={"Sign Up"}/>


      {/* Login Modal */}

    <div className="modal fade" id="login-modal" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Log In</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
              <TextLabel style={styles.text}>Username</TextLabel>
              <InputBox 
              placeholder="Username"
              name="name" 
              value={this.state.name}
              onChange={this.handleInputChange}/>
              <TextLabel style={styles.text}>Password</TextLabel>
              <InputBox 
              placeholder="Password" 
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              />

              <TextLabel style={styles.text}>Are you a Venue or Artist?</TextLabel>
              <Radio value="venue" name="roleLogin" checked={this.state.roleLogin === "venue"} onChange={this.handleInputChange} />Venue
              <Radio value="artist" name="roleLogin" checked={this.state.roleLogin === "artist"} onChange={this.handleInputChange} />Artist
            
          </div>
          <div className="modal-footer">
            <FormButton 
              id={"login-submit"} 
              value={"Submit"} 
              className={"log-in"}
              label={"Log In"}
              onClick={this.handleLogin}
              />  
          </div>
        </div>
      </div>
    </div>


      {/* SignUp Modal */}
    <div className="modal fade" id="form-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <TextLabel style={styles.text}>Username</TextLabel>
          <InputBox 
          placeholder="Username"
          name="name" 
          value={this.state.name}
          onChange={this.handleInputChange}/>
          <TextLabel style={styles.text}>Password</TextLabel>
          <InputBox 
          placeholder="Password" 
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          />
          <TextLabel style={styles.text}>Confirm Password</TextLabel>
          <InputBox 
          placeholder="Confirm Password" 
          name="confirmPassword"
          type="password"
          value={this.state.confirmPassword}
          onChange={this.handleInputChange}/>


          <TextLabel style={styles.text}>Are you a Venue or Artist?</TextLabel>
          <Radio value="venue" name="roleSignUp" checked={this.state.roleSignUp === "venue"} onChange={this.handleInputChange} />Venue
          <Radio value="artist" name="roleSignUp" checked={this.state.roleSignUp === "artist"} onChange={this.handleInputChange} />Artist
      
          <div className="modal-footer">

            <FormButton 
            id={"signup-submit"} 
            type={"submit"} 
            value={"Submit"}
            className={"sign-up-main"} 
            label={"Sign Up"}
            onClick={this.handleSignUp}/>
            
          </div>
        </div>
      </div>
    </div>
          
    </div>
    );
  }
}

export default Home;