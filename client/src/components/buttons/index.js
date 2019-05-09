import React from 'react';
import "./style.css";

export function ModalButton({
    className,
    dataEventTarget,
    label,
    }) {
    return (
        <button className={`${className} btn btn-primary btn-lg`} data-toggle="modal"
        data-target={dataEventTarget}>{label}</button>
    );
}

export function FormButton({
    id,
    value,
    className,
    label,
    onClick
    }) {
    return (
        <button id={id} type="submit" value={value} onClick={onClick}
        className={`${className} btn btn-primary btn-lg`}>{label}</button>
    );
}

export function LogoutButton() {
    return (
        <button className="btn btn-primary btn-lg logout">
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
    dataId
    }) {
    return (
        <button className="btn btn-primary btn-lg btn-main book card-button" 
        dataId={dataId}>Book</button>
    );
}

export function StartButton({
    id,
    label
    }) {
    return (
        <button className="btn btn-primary btn-lg btn-scnd"
        id={id}>{label}</button>
    );
}