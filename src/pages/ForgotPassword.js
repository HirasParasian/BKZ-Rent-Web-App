import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { requestResetPassword, resetPassword } from '../redux/actions/auth'

export const ForgotPassword = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onRequestOTP = (event) => {
        event.preventDefault()
        const email = event.target.elements['email'].value
        dispatch(requestResetPassword(email))
        dispatch({
            type: "SET_EMAIL",
            payload: { email }
        })
    }

    return (

        <>
            <header className="header-forgot">
                <div className="header-content">
                    <div className="header-nav">
                        <div>
                            <Link to="../views/login.html" className="href">
                                <i className="fa-solid fa-chevron-left"></i>
                                <span>Back</span>
                            </Link>

                        </div>
                    </div>
                    <h1 className="heading">Don't worry, we got your back!</h1>
                    <form onSubmit={(e) => onRequestOTP(e)}>
                        <div>
                            <input name="email" placeholder="Enter your email address" type="email" />
                        </div>
                        <div>
                            <button type="submit" className="button-send">Send Verification Code</button>
                        </div>
                    </form>

                    <p className="text">
                        <Link to="/resetpassword">Reset Password</Link>
                        You will receive a link to reset your password.<br />If you havent received any link, click Resend Link
                    </p>
                </div>
            </header>
        </>
    )
}
export default ForgotPassword