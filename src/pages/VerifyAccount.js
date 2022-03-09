import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { verifyAccount } from '../redux/actions/auth'

export const VerifyAccount = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    console.log(auth)


    const onVerify = (event) => {
        event.preventDefault()
        const email = event.target.elements['email']?.value
        const code = event.target.elements['code']?.value
        console.log(code)
        dispatch(verifyAccount(code, email))
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
                    <form onSubmit={(event) => onVerify(event)}>
                        <div>
                            <input name="email" defaultValue={auth?.email} placeholder="Enter email" type="text" />
                        </div>
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