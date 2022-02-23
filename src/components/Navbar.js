import React, { Component } from 'react'
import logo from '../assets/images/logo-bkz.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar ms-auto navbar-expand-lg navbar-light bg-transparent">
                <div className="container ">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Avatar Logo"
                            className="w-25 logo-bkz rounded-pill" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse center-navbar navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item nav-menu-before">
                                <a className="nav-link active" aria-current="page" href="../views/index.html">Home</a>
                            </li>
                            <li className="nav-item nav-menu-before">
                                <a className="nav-link" href="../views/history.html">History</a>
                            </li>
                            <li className="nav-item dropdown nav-menu-before">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Vehicle Type
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="../views/vehicles-type.html">Bike</a></li>
                                    <li><a className="dropdown-item" href="#">Motorbike</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Car</a></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-menu-before">
                                <a className="nav-link" href="#" tabindex="-1">About</a>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-center">
                            <a href="../views/login.html"><button type="button" className="btn-login btn btn-info"> Login</button></a>
                            <a href="../views/signup.html"><button type="button" className="btn-register btn btn-info">Register</button></a>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
