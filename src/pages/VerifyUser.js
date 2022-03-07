import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { requestResetPassword, resetPassword } from '../redux/actions/auth'
import { getProfile, verifyUser } from '../redux/actions/auth'

export const VerifyUser = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onRequestOTP = (event) => {
        event.preventDefault()
        const code = event.target.elements['code'].value
        dispatch(verifyUser(auth.token, code))
        dispatch(getProfile(auth.token))
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
                            <input name="email" placeholder="Enter Code" type="text" />
                        </div>
                        <div>
                            <button type="submit" className="button-send">Verify</button>
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
export default VerifyUser