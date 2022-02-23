import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class reservation extends Component {
    render() {
        return (
            <> <Navbar />
                <div class="container">
                    <div class="row">
                        <div class="margin-reserv">
                            <a href="#" class="href text-decoration-none">
                                <i class="reserv-back fa-solid fa-chevron-left"></i>
                                <span class="span-reserv">Reservation</span>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 detail-left">
                            <img src="../assets/images/vehicle-detail.png" class="img-detail-vehicle1" />
                        </div>
                        <div class="col-xl-6">
                            <div>
                                <h2><b>Fixie - Gray Only </b> </h2>
                                <h5 class="text-secondary"><b>Yogyakarta</b></h5><br />
                                <h5 class="text-danger"><b>No Prepayment</b></h5>
                                <br />
                                <div class="d-flex">
                                    <button type="button" class="btn btn-secondary rounded btn-circle"><i
                                        class="fa-solid fa-minus"></i></button>
                                    <button type="button" class="btn bg-transparent btn-circle"><b>2</b></button>
                                    <button type="button" class="btn btn-warning rounded btn-circle"><i class="fa-solid fa-plus"></i></button>
                                </div>
                                <div class="col-xl-12 reservation-date">
                                    <label for="Reservation"> Reservation Date : </label>
                                    <div class="mb-3 ">
                                        <input id="datepicker" type="text" placeholder="Date" class="form-control form-select form-date-reserv" />
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-select form-date-reserv mx-9">
                                            <option class="d-none">Location</option>
                                            <option value="Bekasi">Bekasi</option>
                                            <option value="Bandung">Bandung</option>
                                            <option value="Bogor">Bogor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div>
                                <a href="#"><button type="button" class="btn-pay-now btn btn-info">Pay now : Rp. 178.000 </button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
