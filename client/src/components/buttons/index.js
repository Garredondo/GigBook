import React from 'react';
import "./style.css";

export function ModalButton({
    className,
    dataEventTarget,
    label
    }) {
    return (
        <button type="button" className={`${className} btn btn-primary btn-lg`} data-toggle="modal"
        data-target={dataEventTarget}>{label}</button>
    );
}

export function ModalButton2({
    className,
    dataEventTarget,
    label
    }) {
    return (
        <button type="button" className={`${className} btn btn-primary btn-lg`} data-toggle="modal"
        data-target={dataEventTarget}>{label}</button>
    );
}

export function FormButton({
    id,
    value,
    className,
    label,
    onClick,
    dataDismiss
    }) {
    return (
        <button id={id} type="submit" value={value} onClick={onClick}
        className={`${className} btn btn-primary btn-lg`} data-dismiss={dataDismiss}>{label}</button>
    );
}

export function LogoutButton({
    onClick
}) {
    return (
        <button className="btn btn-primary btn-lg logout" onClick={onClick}>
        Logout</button>
    );
}

export function PostGigButton() {
    return (
        <button className="btn btn-primary btn-lg btn-main" 
        id="gig-create" type="submit" value="Post-Gig">Post Gig</button>
    );
}

export function BookGigButton({
    dataId,
    onClick
    }) {
    return (
        <button className="btn btn-primary btn-lg btn-main book card-button" 
        data-id={dataId} onClick={onClick}>Request</button>
    );
}

export function StartButton(props){
    return (
        <button className="btn btn-primary btn-lg btn-scnd"
        id={props.id} onClick = {props.onClick}>{props.label}</button>
        
    );
}

export function DeleteGigButton({
    dataId,
    label,
    onClick
    }) {
    return (
        <button className="btn btn-primary btn-lg"
        data-id={dataId} onClick={onClick}>
            {label}
        </button>
    );
}

export function DeleteProfileButton({
    onClick
    }) {
    return (
        <button className="btn btn-primary btn-lg logout" onClick={onClick}>
        Delete Profile</button>
    );
}
