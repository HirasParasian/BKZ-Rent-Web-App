import React, { Component } from 'react'

export default class signup extends Component {
    render() {
        return (
            <>
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
                                            <p className="forgot"><a className="text-dark" href="forgot-password.html">Forgot password?</a></p>
                                        </div>
                                        <div>
                                            <h2><span className="hr-sect">or try another way</span></h2>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-google btn btn-info"><img src="../assets/images/logo-google.png"
                                                alt="Google"/> SignUp
                                                With Google</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-signup btn btn-info">Sign Up</button>
                                            <p className="signupnow">Already Have an Account ? <a className="text-light" href="#">Login Now</a></p>
                                        </div>
                                        <div className="footer2 container">
                                            <div className="img">
                                                <img className="logofooter2" src="../assets/images/logo.png" alt="Logo" />
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
                                                <i className="fa-brands fa-twitter"></i>
                                                <i className="fa-brands fa-facebook-f"></i>
                                                <i className="fa-brands fa-instagram"></i>
                                                <i className="fa-brands fa-linkedin-in"></i>
                                                <i className="fa-brands fa-youtube"></i>
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
