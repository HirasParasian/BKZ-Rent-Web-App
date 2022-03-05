import React, { Component } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Helmet } from "react-helmet";
import Logo from '../assets/images/logo-bkz.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm'
import Button from '../components/Button'

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
                <header className="header-login">
                    <div className="header-content row">
                        <div className="header-left gutter-0 col-md-6">
                        </div>
                        <div className="header-right gutter-0 col-md-6">
                            <form className='form-control bg-transparent border-0 py-5'>
                                <h1 className='pb-5 px-5'>Login</h1>
                                <span>LET S EXPLORE THE WORLD</span>
                                <InputForm placeholder='Username' />
                                <InputForm placeholder='Email' />
                                <Button block='d-grid px-5' variant='info btn btn-login'>Login</Button>
                                <p className="forgot"><Link className="text-light" to="forgot-password.html">Forgot password?</Link></p>
                                <h2><span className="hr-sect">or try another way</span></h2>
                                <Button block='d-grid px-5' variant='info btn btn-google'><FcGoogle />  Login With Google</Button>
                                <Button block='d-grid px-5' variant='info btn btn-signup'>Sign Up</Button>
                                <p className="signupnow">Dont Have Account ? <Link className="text-light" to="#">SignUp Now</Link></p>
                            </form>

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
                    </div>
                </header>
            </>

        )
    }
}
