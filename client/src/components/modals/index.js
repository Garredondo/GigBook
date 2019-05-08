import {React, Component} from 'react';
import "./modal.style.css";
function Modal(props) {
    
    {/* If/Else Statement to show either the Login or Sign Up modal. 
        Might make more intuitive in future.                     */}

    if (props.type = "login"){
        return (
            <div className = "modal">
                {/* This is just an assumption of the Login modal */}
                <form>
                    <h1>Login</h1>
                    <hr />
                    <input id = "username-input" type = "text" placeholder = "Username..." />
                    <input id = "password-input" type = "text" placeholder = "Password..." />
                    <hr />
                    <h3>Are you an Artist or a Venue?</h3>
                    <input type = "radio" />Artist
                    <input type = "radio" />Venue
                    <hr />
                    <button>Log In</button>
                </form>
            </div>
        );
    }

    else {
        return (
            <div className = "modal">
            {/* This is just an assumption of the Sign Up modal */}
            <form>
                <h1>Sign Up</h1>
                <hr />
                <input id = "username-input" type = "text" placeholder = "Username..." />
                <input id = "password-input" type = "text" placeholder = "Password..." />
                <input id = "password-input" type = "text" placeholder = "Confirm Password" />
                <hr />
                <h3>Are you an Artist or a Venue?</h3>
                <input type = "radio" />Artist
                <input type = "radio" />Venue
                <hr />
                <button>Get Bookin'!</button>
            </form>
        </div>
        )
    }
    
}

export default Modal;