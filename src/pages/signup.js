import React, { Component } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Logo from '../assets/images/logo-bkz.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { userSignUp } from '../redux/actions/user'
import Alert from '../components/Alert'


export const Signup = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const onSignUp = (event) => {
        event.preventDefault()
        const username = event.target.elements['username'].value
        const email = event.target.elements['email'].value
        const password = event.target.elements['password'].value
        dispatch(userSignUp(username, email, password))
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <header className="header-login container">
                <div className="header-content row">
                    <div className="header-left col-md-6">
                    </div>
                    <div className="header-right col-md-6">
                        {user.isError &&
                            <Alert>{user.errorMsg}</Alert>

                        }

                        <form onSubmit={onSignUp} id='signUp' className='form-control border-0 bg-transparent'>
                            <h1 className='px-5'>Sign Up</h1>
                            <span>LET’S EXPLORE THE WORLD</span>
                            <InputForm name='username' placeholder='Username' />
                            <InputForm name='email' placeholder='Email' />
                            <InputForm name='password' placeholder='Password' />
                            <Button type="submit" block='d-grid px-5' variant='info btn btn-login'>Sign Up</Button>
                            <div className='row'>
                                <div className='col-6 d-flex justify-content-start'>
                                    <p className="forgot px-5 my-2"><Link className="text-secondary text-decoration-none" to="/forgotpassword">Forgot password?</Link></p>
                                </div>
                            </div>
                            <h2><span className="hr-sect">or try another way</span></h2>
                            <Button block='d-grid px-5' variant='info btn btn-google'><FcGoogle /> Sign Up With Google</Button>
                            <p className="signupnow">Already Have an Account ? <Link className="text-light" to="#">Login Now</Link></p>
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


export default Signup