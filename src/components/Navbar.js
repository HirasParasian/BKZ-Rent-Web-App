import React, { useEffect } from 'react'
import logo from '../assets/images/logo-bkz.png'
import Profile from '../assets/images/profile.png'
import { Link } from 'react-router-dom'
import { BsEnvelope } from 'react-icons/bs'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser } from '../redux/actions/auth'


export const Navbar = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.token) {
            dispatch(getDataUser(auth.token))
            
        }
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">

                <Link className="navbar-brand " to="/">
                    <img src={logo} alt="Avatar Logo"
                        className="rounded-pill" width={"50"} />
                </Link>
                <div className='align-self-center justify-content-end'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="center-navbar collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className=" ms-auto navbar-nav ">
                        <li className="nav-item my-auto mx-auto">
                            <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item my-auto mx-auto">
                            <Link className="nav-link mx-2" to="/history">History</Link>
                        </li>
                        <li className="nav-item my-auto mx-auto dropdown">
                            <Link className="nav-link dropdown-toggle mx-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Vehicle Type
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/vehicletype">Vehicle Type</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/AllBikes">Bike</Link></li>
                                <li><Link className="dropdown-item" to="/AllMotors">Motorbike</Link></li>
                                <li><Link className="dropdown-item" to="/AllCars">Car</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item my-auto mx-auto">
                            <Link className="nav-link mx-2" to="#" tabIndex="-1">About</Link>
                        </li>
                        {auth.token &&
                            <li className="nav-item dropdown mx-auto">
                                <div className="nav-link dropdown-toggle img-profile-login" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <Link className="" to="/profil">
                                        <img src={Profile} alt="Avatar Logo" className=" rounded-pill" />
                                    </Link>
                                </div>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li>
                                        <Link className="" to="/vehicletype">
                                            <div type="button" className="btn position-relative ">
                                                <BsEnvelope size={30} color="#000" />
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    99
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/profil">Profile</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li onClick={() => dispatch({ type: 'AUTH_LOGOUT' })} style={{ cursor: 'pointer' }} className="dropdown-item" to="/reservation">Logout</li>

                                </ul>
                            </li>
                        }
                        {auth.token === null &&
                            <li className="d-flex justify-content-center row d-grid">
                                <div className='col-6 d-flex justify-content-end'>
                                    <a href="/login"><button type="button" className="btn-login btn btn-info"> Login</button></a>
                                </div>
                                <div className='col-6 d-flex justify-content-start'>
                                    <a href="/signup"><button type="button" className="ms-1 btn-register btn btn-info">Register</button></a>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar