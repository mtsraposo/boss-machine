import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/img/logo.svg";

export const Heading = () => {
    return (
        <div id="heading">

            <div id="logo">
                <Link to="/">
                    <img id="logo-img" className="button" src={logo} alt="logo"/>
                </Link>
            </div>
            <div id="title">
                <Link to="/">
                    <span className="button">Boss Machine</span>
                </Link>
            </div>
        </div>
    )
}
