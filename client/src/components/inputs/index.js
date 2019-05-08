import React from "react";

export function TextLabel(props) {
    return (
        <div className="form-group">
            <label {...props}>{props.children}</label>
        </div>
    );
}

export function InputBox(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" {...props}/>
        </div>
    );
}

export function Radio(props) {
    return (
        <div>
            <input type="radio" {...props}/>
        </div>
    );
}