import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button2 from '../components/Button2'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setRentDuration, setReservationDate } from '../redux/actions/transaction'

export const Reservation = (props) => {
    const auth = useSelector(state => state.auth)
    const detailVehicle = useSelector(state => state.detailVehicle.data)
    const navigate = useNavigate()
    const { vehicleId } = useParams()
    const transaction = useSelector(state => state.transaction)
    const dispatch = useDispatch()

    const updateRentDuration = (event) => {
        dispatch(setRentDuration(event.target.value))
    }

    const updateReservationDate = (event) => {
        dispatch(setReservationDate(event.target.value))
    }

    const goToDetail = (dataID) => {
        navigate(`/payment/${dataID}`)
    }

    return (
        <>{auth.token == null && <Navigate to='/login' />}
            <Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reservation | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="my-5">
                        <Link to="/" className="href text-decoration-none">
                            <i className="reserv-back fa-solid fa-chevron-left"></i>
                            <span className="span-reserv">Reservation</span>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className='d-block d-sm-none col-xl-12 px-5 py-5'>
                        <img src={detailVehicle?.image} alt={detailVehicle?.name} className="img-fluid img-thumbnail inline-block" />
                    </div>
                    <div className='d-flex'>
                        <div className="col d-none d-sm-block ">
                            <img src={detailVehicle?.image} alt={detailVehicle?.name} className="img-fluid img-thumbnail inline-block" />
                        </div>
                        <div className="col  px-5 ">
                            <h2><b>{detailVehicle?.name} </b> </h2>
                            <h5 className="text-secondary"><b>{detailVehicle?.location}</b></h5><br />
                            <h5 className="text-danger"><b>No Prepayment</b></h5>
                            <br />
                            <Button2 max={detailVehicle?.stock} />
                            <div className="d-grid gap-2 px-1">
                                <label htmlFor="Reservation"> Reservation Date : </label>
                                <div className="mb-3 ">
                                    <input type="date" defaultValue={null} onChange={updateReservationDate} placeholder="Date" className="form-control form-select" />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select" onChange={updateRentDuration}>
                                        <option className="d-none">Reservation Day</option>
                                        <option value="1">1 day</option>
                                        <option value="2">2 Day</option>
                                        <option value="3">3 Day</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 mt-5">
                        <div className='d-grid gap-2'>
                            <button onClick={() => goToDetail(vehicleId)} type="button" className="btn-pay-now btn btn-info">Pay now : Rp. 178.000 </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reservation