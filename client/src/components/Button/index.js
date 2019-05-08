import {React, Component} from 'react';

function Button(props) {
    return (
        <button className = {props.className}>{props.label}</button>
    );
}