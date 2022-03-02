import React from 'react'
import logo from '../assets/images/logo-bkz.png'
import Profile from '../assets/images/profile.png'
import { Link } from 'react-router-dom'
import { BsEnvelope } from 'react-icons/bs'


export const Navbar = () => {
    return (
        <nav className="navbar ms-auto navbar-expand-lg navbar-light bg-transparent">
            <div className="container ">
                <div className='d-flex'>
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Avatar Logo"
                                className="w-25 rounded-pill" />
                        </Link>
                    </div>
                    <div className='align-self-center'>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="center-navbar collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav ms-auto mb-lg-0">
                        <li className="nav-item nav-menu-before">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-menu-before">
                            <Link className="nav-link" to="/history">History</Link>
                        </li>
                        <li className="nav-item dropdown nav-menu-before">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Vehicle Type
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/vehicletype">Vehicle Type</Link></li>
                                <li><Link className="dropdown-item" to="/viewmoredetail">View More Detail</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/reservation">Reservation</Link></li>
                                <li><Link className="dropdown-item" to="/payment">Payment</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item nav-menu-before">
                            <Link className="nav-link" to="#" tabIndex="-1">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex justify-content-center">
                        <div type="button" class="btn position-relative">
                            <BsEnvelope size={30} color="#BF9270" />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>
                        <div className="img-profile-login">
                            <Link className="" to="/profil">
                                <img src={Profile} alt="Avatar Logo" className=" rounded-pill" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar