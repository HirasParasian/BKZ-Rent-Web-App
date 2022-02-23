import React, { Component } from 'react'

export default class signup extends Component {
    render() {
        return (
            <>
                <header class="header-login">
                    <div class="header-content">
                        <div class="row">
                            <div class="header-left col-md-6">
                            </div>
                            <div class="header-right col-md-6">
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
                                            <button type="button" class="btn-login btn btn-info">SignUp</button>
                                        </div>
                                        <div>
                                            <p class="forgot"><a class="text-dark" href="forgot-password.html">Forgot password?</a></p>
                                        </div>
                                        <div>
                                            <h2><span class="hr-sect">or try another way</span></h2>
                                        </div>
                                        <div>
                                            <button type="button" class="btn-google btn btn-info"><img src="../assets/images/logo-google.png"
                                                alt="Google"/> SignUp
                                                With Google</button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn-signup btn btn-info">Sign Up</button>
                                            <p class="signupnow">Already Have an Account ? <a class="text-light" href="#">Login Now</a></p>
                                        </div>
                                        <div class="footer2 container">
                                            <div class="img">
                                                <img class="logofooter2" src="../assets/images/logo.png" alt="Logo" />
                                            </div>
                                            <div class="descripton2">
                                                <p>
                                                    Plan and book your perfect trip with expert
                                                    advice, travel tips for vehicle
                                                    information
                                                    from us
                                                </p>
                                            </div>
                                            <div>©2020 Vehicle Rental Center. All rights reserved</div>

                                            <div class="link-social">
                                                <i class="fa-brands fa-twitter"></i>
                                                <i class="fa-brands fa-facebook-f"></i>
                                                <i class="fa-brands fa-instagram"></i>
                                                <i class="fa-brands fa-linkedin-in"></i>
                                                <i class="fa-brands fa-youtube"></i>
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
