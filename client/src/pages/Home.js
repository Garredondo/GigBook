import React, { Component } from "react";
// import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";


class Home extends Component {
    state = {
        username: "",
        password: "",
        role: ""

    };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.username && this.state.password) {
    //         API.userLogin({
    //             username: this.state.username,
    //             password: this.state.password,
    //             role: this.state.role
    //         })
    //             .then(res => this.showProfile())
    //             .catch(err => console.log(err));
    //     }
    // };

    // showProfile = () => {
    //     API.getProfile()
    //     .then(res => )
    // }



    render() {
        return (
            <div className="container">
                <div className="row">

                <form>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                
                    <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Login
                    </FormBtn>
            </form>


                </div>
            </div>
        );
    }
}



export default Home;
