import React, { Component } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Logo from '../assets/images/logo-bkz.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

export default class signup extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Sign Up | Planet BKZ Rent</title>
                    <link rel="canonical" to="/" />
                </Helmet>
                <header className="header-login">
                    <div className="header-content">
                        <div className="row">
                            <div className="header-left col-md-6">
                            </div>
                            <div className="header-right col-md-6">
                                <form>
                                    <h1>Sign Up</h1>
                                    <span>LET’S EXPLORE THE WORLD</span>
                                    <div>
                                        <div>
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div>
                                            <button type="button" className="btn-login btn btn-info">SignUp</button>
                                        </div>
                                        <div>
                                            <p className="forgot"><Link className="text-dark" to="forgot-password.html">Forgot password?</Link></p>
                                        </div>
                                        <div>
                                            <h2><span className="hr-sect">or try another way</span></h2>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-google btn btn-info"><FcGoogle />   SignUp
                                                With Google</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-signup btn btn-info">Sign Up</button>
                                            <p className="signupnow">Already Have an Account ? <Link className="text-light" to="#">Login Now</Link></p>
                                        </div>
                                        <div className="footer2 container">
                                            <div className="img">
                                                <img className="logofooter2 logo-bkz " src={Logo} alt="Logo" />
                                            </div>
                                            <div className="descripton2">
                                                <p>
                                                    Plan and book your perfect trip with expert
                                                    advice, travel tips for vehicle
                                                    information
                                                    from us
                                                </p>
                                            </div>
                                            <div>©2020 Vehicle Rental Center. All rights reserved</div>
                                            <div className="link-social">
                                                <FaTwitter />
                                                <FaFacebookF />
                                                <FaInstagram />
                                                <FaLinkedinIn />
                                                <FaYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
