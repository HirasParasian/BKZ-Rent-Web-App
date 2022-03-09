import React, { Component } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Helmet } from "react-helmet";
import Logo from '../assets/images/logo-bkz.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import InputForm from '../components/InputForm'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser, login } from '../redux/actions/auth'

export const Login = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onLogin = (event) => {
        event.preventDefault()
        const username = event.target.elements['username'].value
        const password = event.target.elements['password'].value
        dispatch(login(username, password))
    }
    return (
        <><React.Fragment><Helmet>
            <meta charSet="utf-8" />
            <title>Login | Planet BKZ Rent</title>
            <link rel="canonical" to="/" />
        </Helmet>
            {auth.token != null && <Navigate to='/' />}
            {auth.isError &&
                <div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold" role="alert">
                    {auth.errorMsg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            <header className="header-login">
                <div className="header-content row">
                    <div className="header-left gutter-0 col-md-6">
                    </div>
                    <div className="header-right gutter-0 col-md-6">
                        <form onSubmit={onLogin} className='form-control bg-transparent border-0 py-5'>
                            <h1 className='pb-5 px-5'>Login</h1>
                            <span>LET S EXPLORE THE WORLD</span>
                            <InputForm id='username' name="username" placeholder='username' />
                            <InputForm id='password' name="password" placeholder='Password' />
                            <Button type="submit" block='d-grid px-5' variant='info btn btn-login'>Login</Button>
                            <p className="forgot"><Link className="text-light" to="/forgotpassword">Forgot password?</Link></p>
                            <h2><span className="hr-sect">or try another way</span></h2>
                            <Link to="/verifyuser"> Verify </Link>
                            <Button block='d-grid px-5' variant='info btn btn-google'><FcGoogle />  Login With Google</Button>
                            <Link to="/signup" block='d-grid px-5' variant='info btn btn-signup'>Sign Up</Link>
                            <p className="signupnow">Dont Have Account ? <Link className="text-light" to="/signup">SignUp Now</Link></p>
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
            </header></React.Fragment>
        </>

    )
}


export default Login 