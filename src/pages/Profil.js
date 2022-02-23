import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Payment extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="profile-text">Profile</h4>
                        </div>
                        <div class="col-12 d-flex justify-content-center mt-5">
                            <div class="position-relative">
                                <img class=" rounded-circle" src="../assets/images/iamge-profil-page.png" alt="" />
                                <button class="rounded-circle bg-warning border-0 button-edit-profile"><i
                                    class="fa-solid fa-pencil"></i></button>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <h2 class="profile-name">
                                Samantha Doe
                            </h2>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <div class="profile-detail">
                                <p>samanthadoe@gmail.com</p>
                                <p>+62833467823</p>
                                <p>Has been active since 2013</p>
                            </div>
                        </div>
                        <div class="col-12 profile-gender d-flex justify-content-center">
                            <div class="form-check">
                                <input class="form-check-input border-warning" type="radio" name="exampleRadios" id="exampleRadios1"
                                    value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input border-warning" type="radio" name="exampleRadios" id="exampleRadios2"
                                    value="option2" />
                                <label class="form-check-label" for="exampleRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <form>
                                <label class="profile-contacts" for="Contacts">Contacts</label>
                                <div class="form-group">
                                    <label class="text-contact">Email address :</label>
                                    <input type="email"
                                        class="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group">
                                    <label class="text-contact">Address :</label>
                                    <input type="text"
                                        class="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        placeholder="Address" />
                                </div>
                                <div class="form-group">
                                    <label class="text-contact">Mobile Number :</label>
                                    <input type="text"
                                        class="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        placeholder="Mobile Number" />
                                </div>
                            </form>
                        </div>
                        <div class="col-12">
                            <label class="profile-contacts" for="Contacts">Identity</label>
                            <div class="row">
                                <div class="col">
                                    <label class="text-contact">Display Name :</label>
                                    <input type="text"
                                        class="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                        placeholder="Display Name" aria-label="Display Name" />
                                </div>
                                <div class="col-1"></div>
                                <div class="col">
                                    <label for="date" class="col-sm-1 col-form-label">DD/MM/YY</label>
                                    <input id="datepicker" type="text"
                                        class="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0 " />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <form class="d-flex justify-content-between form-button-profile">
                                    <a href="#"><button type="button" class="btn-profile-save btn btn-sm btn-lg btn-md "> Save Change
                                    </button></a>
                                    <a href="#"><button type="button" class="btn-profile-edit-password btn "> Edit Password </button></a>
                                    <a href="#"><button type="button" class="btn-profile-cancel btn "> Cancel </button></a>
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
