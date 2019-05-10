import React, {Component} from "react";
import "./landing.css";
import { FormButton } from "../components/buttons";
import { Redirect } from "react-router-dom";

class NoMatch extends Component {

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
  }

  render(){
    return (
      <div className="bodyClass"> 
          <div className="container">
            <div className="row">
              <div id="main-404" className="col-12">
                <h1>404 Page Not Found</h1>
  
                {this.renderRedirect()}
                
                <FormButton onClick={this.setRedirect} label={"Visit GigBook"} className={"log-in"}/>
                
                  
  
              </div>
            </div>
        </div>
      </div>
    );


  }






}







// returnHome = () => {
//   window.location.replace("/")
// }

// function NoMatch() {
//   return (
//     <div className="bodyClass"> 
//         <div className="container">
//           <div className="row">
//             <div id="main" className="col-12">
//               <h1>404 Page Not Found</h1>

//               <FormButton 
//               id={"return-home"} 
//               value={"Submit"} 
//               className={"log-in"}
//               label={"Vist GigBook"}
//               // onClick={this.returnHome}
//               /> 
              
                

//             </div>
//           </div>
//       </div>
//     </div>
//   );
// }

export default NoMatch;
