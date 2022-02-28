import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import { FaPlus, FaMinus, FaHeart } from 'react-icons/fa'


export const Profil = (props) => {
    const url = "http://localhost:5000/users?userId=34"

    const [user, setUser] = useState({})
    const userId = 34
    console.log(userId)

    useEffect(() => {
        getDataComponent(userId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataComponent = async (userId) => {
        try {
            const { data } = await getData(`http://localhost:5000/users?userId=${userId}`, props.history)
            setUser(data.results[0])
            console.log(data.results[0])
        } catch (e) {

        }
    }



    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="profile-text">Profile</h4>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <div className="position-relative">
                            <img className=" rounded-circle img-thumbnail img-fluid img-profile-thumbnail" src={user?.images} alt="" />
                            <button className="rounded-circle bg-warning border-0 button-edit-profile"><i
                                className="fa-solid fa-pencil"></i></button>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <h2 className="profile-name">
                            {user?.fullName}
                        </h2>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="profile-detail">
                            <p>{user?.email}</p>
                            <p>{user?.mobileNumber}</p>
                            <p>Has been active since 2013</p>
                        </div>
                    </div>
                    <div className="col-12 profile-gender d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input border-warning" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="option1" checked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input border-warning" type="radio" name="exampleRadios" id="exampleRadios2"
                                value="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <form>
                            <label className="profile-contacts" htmlFor="Contacts">Contacts</label>
                            <div className="form-group">
                                <label className="text-contact">Email address :</label>
                                <input type="email"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    aria-describedby="emailHelp" placeholder={user?.email} />
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Address :</label>
                                <input type="text"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder={user?.address} />
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Mobile Number :</label>
                                <input type="text"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder={user?.mobileNumber} />
                            </div>
                        </form>
                    </div>
                    <div className="col-12">
                        <label className="profile-contacts" htmlFor="Contacts">Identity</label>
                        <div className="row">
                            <div className="col">
                                <label className="text-contact">Display Name :</label>
                                <input type="text"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder={user?.displayName} aria-label="Display Name" />
                            </div>
                            <div className="col-1"></div>
                            <div className="col">
                                <label htmlFor="date" className="col-sm-1 col-form-label">DD/MM/YY</label>
                                <input type="date"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0 " placeholder={user?.birthDate} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-between my-5">
                            <div className="col-xl-4  d-grid gap-2">
                                <button type="button" className=" btn btn-profile-save btn-sm btn-lg btn-md "> Save Change
                                </button>
                            </div>
                            <div className="col-xl-4  d-grid gap-2 mx-3">
                                <button type="button" className=" btn btn-profile-edit-password"> Edit Password </button>
                            </div>
                            <div className="col-xl-4  d-grid gap-2 ">
                                <button type="button" className=" btn  btn-profile-cancel"> Cancel </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profil