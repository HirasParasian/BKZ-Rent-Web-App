import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Reservation = (props) => {

    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getDataComponent(vehicleId)
    }, [])

    const getDataComponent = async (vehicleId) => {
        try {
            const { data } = await getData(`http://localhost:5000/vehicles/id?vehicleId=${vehicleId}`, props.history)

            setVehicle(data.results[0])
        } catch (e) {

        }
    }
    const goToDetail = (dataID) => {
        navigate(`/payment/${dataID}`)
    }

    return (
        <> <Navbar />
            <div className="container">
                <div className="row">
                    <div className="margin-reserv">
                        <a href="/" className="href text-decoration-none">
                            <i className="reserv-back fa-solid fa-chevron-left"></i>
                            <span className="span-reserv">Reservation</span>
                        </a>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className='d-flex'>
                        <div className="col-xl-6 mx-5 ">
                            <img src={vehicle?.image} alt={vehicle?.name} className="img-fluid" />
                        </div>
                        <div className="col-xl-6 ms-5">
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
                                    <label htmlFor="Reservation"> Reservation Date : </label>
                                    <div className="mb-3 ">
                                        <input type="date" placeholder="Date" className="form-control form-select form-date-reserv" />
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
                    </div>
                    <div className="col-xl-12">
                        <div className='d-grid gap-2'>
                            <button  onClick={() => goToDetail(vehicleId)}  type="button" className="btn-pay-now btn btn-info">Pay now : Rp. 178.000 </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reservation