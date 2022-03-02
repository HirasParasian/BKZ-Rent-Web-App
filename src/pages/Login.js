import React, { Component } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Helmet } from "react-helmet";
import Logo from '../assets/images/logo-bkz.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        isLogged: false
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    onLogin = (event) => {
        event.preventDefault()
        if (this.state.email === "admin@mail.com" && this.state.password === "1234") {
            this.setState({ isLogged: true })
            this.props.onLogin(true)
        } else {
            window.alert("Email atau password salah!")
            this.props.onLogin(false)
        }
    }

    render() {
        return (

            <><Helmet>
                <meta charSet="utf-8" />
                <title>Login | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
                <header className="header-login vh-100">
                    <div className="header-content">
                        <div className="row">
                            <div className="header-left col-md-6">
                            </div>
                            <div className="header-right col-md-6">
                                <form className="">
                                    <h1>Login</h1>
                                    <span>LET S EXPLORE THE WORLD</span>
                                    <div>
                                        <div>
                                            <input onChange={(e) => this.setState({ email: e.target.value })} type="text" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" />
                                        </div>
                                        <div>
                                            <Link to="#"><button onClick={this.onLogin} type="button" value="Submit"
                                                className="btn-login btn btn-info">Login</button></Link>
                                        </div>
                                        <div>
                                            <p className="forgot"><Link className="text-light" to="forgot-password.html">Forgot password?</Link></p>
                                        </div>
                                        <div>
                                            <h2><span className="hr-sect">or try another way</span></h2>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-google btn btn-info"><FcGoogle />  Login With Google</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-signup btn btn-info">Sign Up</button>
                                            <p className="signupnow">Dont Have Account ? <Link className="text-light" to="#">SignUp Now</Link></p>
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
