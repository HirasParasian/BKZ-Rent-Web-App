import React, { Component } from 'react'
import logo from '../assets/images/logo-bkz.png'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar ms-auto navbar-expand-lg navbar-light bg-transparent">
                <div className="container ">
                    <Link className="navbar-brand" to="#">
                        <img src={logo} alt="Avatar Logo"
                            className="w-25 logo-bkz rounded-pill" />
                    </Link>
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
                                <a className="nav-link" href="/history">History</a>
                            </li>
                            <li className="nav-item dropdown nav-menu-before">
                                <Link className="nav-link dropdown-toggle" to="/VehicleType" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Vehicle Type
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Bike">Bike</Link></li>
                                    <li><Link className="dropdown-item" to="/Motorbike">Motorbike</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="/Car">Car</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-menu-before">
                                <Link className="nav-link" to="/About" tabindex="-1">About</Link>
                            </li>
                        </ul>
                        <li className="d-flex justify-content-center">
                            <a href="/login"><button type="button" className="btn-login btn btn-info"> Login</button></a>
                            <a href="/signup"><button type="button" className="btn-register btn btn-info">Register</button></a>
                        </li>
                    </div>
                </div>
            </nav>
        )
    }
}
