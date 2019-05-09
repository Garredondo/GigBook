import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {TextLabel, InputBox, Radio} from "../components/inputs";
import {ModalButton, FormButton} from "../components/buttons";
import API from "../utils/index";
// import HomePage from "../components/containers/HomePage";





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

  handleLoginFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.password) {
      API.Users.login({
        name: this.state.name,
        password: this.state.password,
        role: this.state.role
      })     
    .then(res => this.props.history.push("/venue/profile/" + res.data.id))
    .catch(err => console.log(err));
    }


    this.setState({
      name: "",
      password: "",
      role: ""
    });
  };


  handleSignUpFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.password) {
      API.Users.signUp({
        name: this.state.name,
        password: this.state.password,
        role: this.state.role
      })     
    .then(res => this.props.history.push("/venue/profile/" + res.data.id))
    .catch(err => console.log(err));
    }


    this.setState({
      name: "",
      password: "",
      role: ""
    });
  };




  render(){
    return (
      <div>

        
        

          
          <div>
            {/* <ModalButton className={"log-in"} 
            data-target={"#login-modal"}
            label={"Log In"}
            /> */}
            
            {/* <ModalButton className={"sign-up"} 
            data-target={"#form-modal"}
            label={"Sign Up"}/>
            <ModalButton className={"sign-up-main"} 
            data-target={"#form-modal"}
            label={"Sign Up"}/> */}
          </div>




          {/* LOGIN */}
          
          {/* <TextLabel>Username</TextLabel>
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
          /> */}
          

          {/* <TextLabel>Are you a Venue or Artist?</TextLabel>
          <Radio value="venue" name="role" checked={this.state.role === "venue"} onChange={this.handleInputChange} />Venue
          <Radio value="artist" name="role" checked={this.state.role === "artist"} onChange={this.handleInputChange} />Artist */}
  
          {/* <FormButton 
          id={"login-submit"} 
          value={"Submit"} 
          className={"log-in"}
          label={"Log In"}
          onClick={this.handleLoginFormSubmit}
          /> */}


          {/* SIGNUP */}
         
          {/* <TextLabel>Username</TextLabel>
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
          <Radio value="artist" name="role" checked={this.state.role === "artist"} onChange={this.handleInputChange} />Artist */}

          {/* <FormButton 
          id={"signup-submit"} 
          type={"submit"} 
          value={"Submit"}
          className={"sign-up-main"} 
          label={"Sign Up"}
          onClick={this.handleSignUpFormSubmit}/> */}




        
          
  
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login-modal">
      Log In
    </button>
    

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

              <TextLabel>Are you a Venue or Artist?</TextLabel>
              <Radio value="venue" name="role" checked={this.state.role === "venue"} onChange={this.handleInputChange} />Venue
              <Radio value="artist" name="role" checked={this.state.role === "artist"} onChange={this.handleInputChange} />Artist
            
          </div>
          <div className="modal-footer">
            <FormButton 
              id={"login-submit"} 
              value={"Submit"} 
              className={"log-in"}
              label={"Log In"}
              onClick={this.handleLoginFormSubmit}
              />
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>




   
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signup">
      Sign Up
    </button>

    <div className="modal fade" id="signup" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
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
      
          <div className="modal-footer">

            <FormButton 
            id={"signup-submit"} 
            type={"submit"} 
            value={"Submit"}
            className={"sign-up-main"} 
            label={"Sign Up"}
            onClick={this.handleSignUpFormSubmit}/>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>

    
       

    







      </div>
    );
  }
}

export default Home;