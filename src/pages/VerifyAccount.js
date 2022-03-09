import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { verifyUser } from '../redux/actions/auth'

export const VerifyAccount = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    console.log(auth.email)


    const onVerify = (e) => {
        e.preventDefault()
        const email = auth.email
        console.log(email)
        const code = e.target.elements['code'].value
        console.log(code)
        dispatch(verifyUser(code, email))
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
                    {
                        auth.email &&
                        <h1>Enter the OTP we sent to {auth.email}!</h1>
                    }
                    <h1 className="heading">Don't worry, we got your back!</h1>
                    <form onSubmit={(e) => onVerify(e)}>
                        <div>
                            <input name="code" placeholder="Enter Code" type="text" />
                        </div>
                        <div>
                            <button type='submit' className="button-send">Verify</button>
                        </div>
                    </form>
                    <p className="text">
                        You will receive a link to reset your password.<br />If you havent received any link, click Resend Link
                    </p>
                </div>
            </header>
        </>
    )
}
export default VerifyAccount