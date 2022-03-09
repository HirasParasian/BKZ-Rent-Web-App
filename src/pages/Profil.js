import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/http'
import { Helmet } from "react-helmet";
import { BsPencil } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import imgProfile from '../assets/images/profil-edward.png'
import { userEdit } from '../redux/actions/auth'
import Alert from '../components/Alert'
const { REACT_APP_URL } = process.env


export const Profil = (props) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    // const [userData, setUserData] = useState({})
    const userData = auth.userData || {}
    const birthDateDay = userData?.birthDate
    const newdate = new Date(birthDateDay).toLocaleDateString("id")
    console.log(newdate)
    // console.log(auth?.userData.userId)
    const editProfile = (event) => {
        event.preventDefault()
        const userId = auth?.userData.userId
        const gender = event.target.elements['gender'].value
        const mobileNumber = event.target.elements['mobileNumber'].value
        const displayName = event.target.elements['displayName'].value
        const address = event.target.elements['address'].value
        const data = { gender, displayName, mobileNumber, address }
        dispatch(userEdit(data, userId))
    }


    return (
        <>
            <Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className="container">
                <form onSubmit={editProfile}>
                    <div className='row'>
                        {!auth.isError &&
                            <Alert>{auth.errorMsg}</Alert>

                        }
                        {auth.isError &&
                            <Alert>{auth.successMsg}</Alert>

                        }
                        <div className="col-12">
                            <h4 className="profile-text">Profile</h4>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <div className="position-relative">
                                <img className=" rounded-circle img-thumbnail img-fluid img-profile-thumbnail" src={userData?.images || imgProfile} alt="" />
                                <button className="rounded-circle bg-warning border-0 button-edit-profile"><BsPencil /></button>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <h2 className="profile-name">
                                {userData?.fullName}
                            </h2>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="profile-detail">
                                <p>{userData?.email}</p>
                                <p>{userData?.mobileNumber}</p>
                                <p>Has been active since 2013</p>
                            </div>
                        </div>
                        <div className="col-12 profile-gender d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input border-warning" type="radio" name="gender" id="exampleRadios1"
                                    value="Male" defaultChecked={userData?.gender === 'Male'} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input border-warning" defaultChecked={userData?.gender === 'Female'} type="radio" name="gender" id="exampleRadios2"
                                    value="Female" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <label className="profile-contacts" htmlFor="Contacts">Contacts</label>
                            <div className="form-group">
                                <label className="text-contact">Email address :</label>
                                <input type="email" name="email"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    aria-describedby="emailHelp" placeholder={userData?.email} />
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Address :</label>
                                <input type="text" name="address"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0" defaultValue={userData?.address}
                                    placeholder={userData?.address} />
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Mobile Number :</label>
                                <input type="text" name="mobileNumber" defaultValue={userData?.mobileNumber}
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder={userData?.mobileNumber} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12">
                            <label className="profile-contacts" htmlFor="Contacts">Identity</label>
                            <div className="row">
                                <div className="col">
                                    <label className="text-contact">Display Name :</label>
                                    <input type="text" name="displayName"
                                        className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        placeholder={userData?.displayName} aria-label="Display Name" defaultValue={userData?.displayName} />
                                </div>
                                <div className="col-1"></div>
                                <div className="col">
                                    <label className="col-sm-1 col-form-label"></label>
                                    <input type="text" name="date"
                                        className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0 "
                                        /*defaultValue={userData.birthDate}*/ placeholder={new Date(userData.birthDate).toLocaleDateString("id")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 row">
                        <div className="col-12 col-lg-4 col-xl-4 d-grid my-1 mx-auto">
                            <button type="submit" className=" btn btn-profile-save btn-sm btn-lg btn-md "> Save Change
                            </button>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4 d-grid my-1 mx-auto">
                            <button type="button" className=" btn btn-profile-edit-password"> Edit Password </button>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4  d-grid my-1 mx-auto">
                            <button type="button" className=" btn  btn-profile-cancel"> Cancel </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Profil