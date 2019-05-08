import React from 'react';
import "./style.css";
function Modal(props) {
    
    /* If/Else Statement to show either the Login or Sign Up modal. 
        Might make more intuitive in future.                     */

    /* Subject to change. If we have enough time, we can DRY this up a bit.*/

    if (props.type === "login"){
        return (
            <div>
                <div className = "modal">
                    {/* This is just an assumption of the Login modal */}
                    <form>
                        <h1>Login</h1>
                        <hr />
                        <input id = "username-input" type = "text" placeholder = "Username..." />
                        <br />
                        <input id = "password-input" type = "text" placeholder = "Password..." />
                        <hr />
                        <h3>Are you an Artist or a Venue?</h3>
                        <input type = "radio" />Artist
                        <input type = "radio" />Venue
                        <hr />
                        <button>Log In</button>
                    </form>
                </div>
            <div className = "modal-background" />
        </div>
        );
    }

    else {
        return (
            <div>
            <div className = "modal">
            {/* This is just an assumption of the Sign Up modal */}
            <form>
                <h1>Sign Up</h1>
                <hr />
                <div id = "input-centering">
                    <input id = "username-input" type = "text" placeholder = "Username..." />
                    <br />
                    <input id = "password-input" type = "text" placeholder = "Password..." />
                    <br />
                    <input id = "password-input" type = "text" placeholder = "Confirm Password" />
                </div>
                <hr />
                <h3>Are you an Artist or a Venue?</h3>
                <input type = "radio" />Artist
                <input type = "radio" />Venue
                <hr />
                <button>Get Bookin'!</button>
            </form>
            </div>
            <div className = "modal-background" />
            </div>
        );
    }
}

export default Modal;