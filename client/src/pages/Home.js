import React, { Component } from "react";
import {TextLabel, InputBox, Radio} from "../components/inputs";
import {ModalButton, FormButton} from "../components/buttons";
import API from "../utils/index";
import TopBar from "../components/topbar";
import "./landing.css";

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
    });
  };

  handleSignUp = event => {
    event.preventDefault();
    if (this.state.name && this.state.password) {
      API.Users.signUp({
        name: this.state.name,
        password: this.state.password,
        role: this.state.roleSignUp
      })     
    .then()
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
    <div className="bodyClass">
    {/* Navbar */}
      <TopBar>
          <ModalButton className={"log-in"} 
          dataEventTarget={"#login-modal"}
          label={"Log In"}
          />
          
          <ModalButton className={"sign-up"} 
          dataEventTarget={"#form-modal"}
          label={"Sign Up"}/>
      </TopBar>


    {/* Login Modal */}
    <div className="modal fade" id="login-modal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={styles.text}>Log In</h5>
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
              <Radio value="venue" name="roleLogin" checked={this.state.roleLogin === "venue"} onChange={this.handleInputChange} /><p style={styles.text}>Venue</p>
              <Radio value="artist" name="roleLogin" checked={this.state.roleLogin === "artist"} onChange={this.handleInputChange} /><p style={styles.text}>Artist</p>
            
          </div>
          <div className="modal-footer">
            <FormButton 
              id={"login-submit"} 
              value={"Submit"} 
              className={"log-in"}
              label={"Log In"}
              onClick={this.handleLogin}
              dataDismiss="modal"
              />  
          </div>
        </div>
      </div>
    </div>


      {/* SignUp Modal */}
    <div className="modal fade" id="form-modal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={styles.text}>Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <TextLabel style={styles.text}>Username</TextLabel>
          <InputBox 
            placeholder="Username"
            name="name" 
            value={this.state.name}
            onChange={this.handleInputChange}
          />
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
            onChange={this.handleInputChange}
          />

          <TextLabel style={styles.text}>Are you a Venue or Artist?</TextLabel>
          <Radio value="venue" name="roleSignUp" checked={this.state.roleSignUp === "venue"} onChange={this.handleInputChange}/><p style={styles.text}>Venue</p>
          <Radio value="artist" name="roleSignUp" checked={this.state.roleSignUp === "artist"} onChange={this.handleInputChange}/><p style={styles.text}>Artist</p>
      
          <div className="modal-footer">

            <FormButton 
              id={"signup-submit"} 
              type={"submit"} 
              value={"Submit"}
              className={"sign-up-main"} 
              label={"Sign Up"}
              onClick={this.handleSignUp}
              dataDismiss="modal"
            />
            
          </div>
        </div>
      </div>
    </div>

      {/* Text and button in center of page */}
      <div className="container">
          <div className="row">
              <div id="main" className="col-12">
                  <h1>Find Talent.</h1>
                  <h1>Find Shows.</h1>
                  <p id="text-desc">The easiest way for bands and venues to stay booked.</p>
                  <ModalButton className={"sign-up-main"} 
                    dataEventTarget={"#form-modal"}
                    label={"Sign Up"}
                  />
              </div>
          </div>
      </div>

      {/* Footer */}
      <footer>
          <div id="footer-text">
              &copy; Copyright 2019
          </div>
      </footer>
    </div>
    );
  }
}

export default Home;