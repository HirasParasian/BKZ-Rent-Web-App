import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class reservation extends Component {
    render() {
        return (
            <> <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="margin-reserv">
                            <a href="#" className="href text-decoration-none">
                                <i className="reserv-back fa-solid fa-chevron-left"></i>
                                <span className="span-reserv">Reservation</span>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 detail-left">
                            <img src="../assets/images/vehicle-detail.png" className="img-detail-vehicle1" />
                        </div>
                        <div className="col-xl-6">
                            <div>
                                <h2><b>Fixie - Gray Only </b> </h2>
                                <h5 className="text-secondary"><b>Yogyakarta</b></h5><br />
                                <h5 className="text-danger"><b>No Prepayment</b></h5>
                                <br />
                                <div className="d-flex">
                                    <button type="button" className="btn btn-secondary rounded btn-circle"><i
                                        className="fa-solid fa-minus"></i></button>
                                    <button type="button" className="btn bg-transparent btn-circle"><b>2</b></button>
                                    <button type="button" className="btn btn-warning rounded btn-circle"><i className="fa-solid fa-plus"></i></button>
                                </div>
                                <div className="col-xl-12 reservation-date">
                                    <label for="Reservation"> Reservation Date : </label>
                                    <div className="mb-3 ">
                                        <input id="datepicker" type="text" placeholder="Date" className="form-control form-select form-date-reserv" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select form-date-reserv mx-9">
                                            <option className="d-none">Location</option>
                                            <option value="Bekasi">Bekasi</option>
                                            <option value="Bandung">Bandung</option>
                                            <option value="Bogor">Bogor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div>
                                <a href="#"><button type="button" className="btn-pay-now btn btn-info">Pay now : Rp. 178.000 </button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
