import React, {Component} from "react";
import {ModalButton, FormButton} from "../components/buttons";


class Home extends Component {




  render() { 
    return (
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
      
    );
  };
}

export default Home;
