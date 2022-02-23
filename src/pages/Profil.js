import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Payment extends Component {
    render() {
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
                                <img className=" rounded-circle" src="../assets/images/iamge-profil-page.png" alt="" />
                                <button className="rounded-circle bg-warning border-0 button-edit-profile"><i
                                    className="fa-solid fa-pencil"></i></button>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <h2 className="profile-name">
                                Samantha Doe
                            </h2>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="profile-detail">
                                <p>samanthadoe@gmail.com</p>
                                <p>+62833467823</p>
                                <p>Has been active since 2013</p>
                            </div>
                        </div>
                        <div className="col-12 profile-gender d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input border-warning" type="radio" name="exampleRadios" id="exampleRadios1"
                                    value="option1" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input border-warning" type="radio" name="exampleRadios" id="exampleRadios2"
                                    value="option2" />
                                <label className="form-check-label" for="exampleRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <form>
                                <label className="profile-contacts" for="Contacts">Contacts</label>
                                <div className="form-group">
                                    <label className="text-contact">Email address :</label>
                                    <input type="email"
                                        className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label className="text-contact">Address :</label>
                                    <input type="text"
                                        className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        placeholder="Address" />
                                </div>
                                <div className="form-group">
                                    <label className="text-contact">Mobile Number :</label>
                                    <input type="text"
                                        className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        placeholder="Mobile Number" />
                                </div>
                            </form>
                        </div>
                        <div className="col-12">
                            <label className="profile-contacts" for="Contacts">Identity</label>
                            <div className="row">
                                <div className="col">
                                    <label className="text-contact">Display Name :</label>
                                    <input type="text"
                                        className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        placeholder="Display Name" aria-label="Display Name" />
                                </div>
                                <div className="col-1"></div>
                                <div className="col">
                                    <label for="date" className="col-sm-1 col-form-label">DD/MM/YY</label>
                                    <input id="datepicker" type="text"
                                        className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0 " />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <form className="d-flex justify-content-between form-button-profile">
                                    <a href="#"><button type="button" className="btn-profile-save btn btn-sm btn-lg btn-md "> Save Change
                                    </button></a>
                                    <a href="#"><button type="button" className="btn-profile-edit-password btn "> Edit Password </button></a>
                                    <a href="#"><button type="button" className="btn-profile-cancel btn "> Cancel </button></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
