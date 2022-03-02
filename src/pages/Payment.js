import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { getData } from '../helpers/http'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Payment = (props) => {
    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()

    useEffect(() => {
        getDataComponent(vehicleId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataComponent = async (vehicleId) => {
        try {
            const { data } = await getData(`http://localhost:5000/vehicles/id?vehicleId=${vehicleId}`, props.history)

            setVehicle(data.results[0])
        } catch (e) {

        }
    }

    return (
        <><Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Payment | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className="container">
                <div className=" my-2 ">
                    <div className="row">
                        <Link to="/" className="text-decoration-none href">
                            <span className="span-reserv"><FaChevronLeft /></span>
                            <span className="span-reserv">Payment</span>
                        </Link>
                    </div>
                </div>


                <div className=" my-2">
                    <div className="row">
                        <div className="col-xl-5 my-3">
                            <img src={vehicle?.image} alt={vehicle?.name} className="payment-img img-fluid img-thumbnail src my-1" />
                        </div>
                        <div className="col-xl-7 my-3">
                            <h2><b>{vehicle?.name} </b> </h2>
                            <h5 className="text-secondary"><b>{vehicle?.location}</b></h5><br />
                            <h5 className="text-danger"><b>No Prepayment</b></h5><br /><br />
                            <h4 className="code-payment">#FG1209878YZS</h4>
                            <button className="btn btn-copy border-0 btn-info fw-bold" type="button">Copy Booking Code</button>
                        </div>
                    </div>
                </div>

                <div className=" my-5 ">
                    <div className="row">
                        <div className="col-xl-5 d-grid my-2">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div>
                                        <input type="text" id="disabledTextInput"
                                            className="bg-transparent border-2 border-secondary form-control"
                                            placeholder="Quantity : 2 Bikes" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-xl-7 d-grid my-2">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div>
                                        <input type="text" id="disabledTextInput"
                                            className="bg-transparent border-2 border-secondary form-control"
                                            placeholder="Reservation Date    :     Jan 18 - 20 2021" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=" my-5 ">
                    <div className="row">
                        <div className="col-xl-5 d-grid my-2">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div className="bg-transparent fw-bold border-2 border-secondary form-control quantity-detail">
                                        <label className="text-dark" htmlFor="">Order Details : </label><br />
                                        <label className="text-secondary pt-4" htmlFor="">1 Bike : Rp. 78.000</label><br />
                                        <label className="text-secondary pt-1" htmlFor="">1 Bike : Rp. 78.000</label><br />
                                        <label className="text-dark pt-5" htmlFor="">Total : Rp. 156.000 </label>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-xl-7 d-grid my-2">
                            <fieldset disabled="disabled">
                                <div className="bg-transparent fw-bold border-2 border-secondary form-control quantity-identity">
                                    <label className="text-dark" htmlFor="">Identity : </label><br />
                                    <label className="text-secondary pt-4" htmlFor="">Samantha Doe (+6290987682)</label><br />
                                    <label className="text-secondary pt-1" htmlFor="">samanthadoe@mail.com</label><br />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className=" my-5 ">
                    <div className="row">
                        <div className="d-grid col-xl-3 d-flex text-center my-2">
                            <label className="label-payment" htmlFor=""><br />
                                <h2 className="fw-bold ">Payment Code : </h2>
                            </label>
                        </div>
                        <div className="col-xl my-2 d-grid ">
                            <div className="form-control border-2 py-4 border-secondary border rounded bg-transparent d-grid d-flex align-self-center justify-content-center">
                                <h4 className=''>#FG1209878YZS<button className='ms-4 bg-brown border-0 rounded'><span className="badge"> Copy</span></button></h4>
                            </div>
                        </div>
                        <div className="col-xl my-2 d-grid">
                            <select className="form-select form-control bg-transparent border-2 border-secondary form-select-payment py-4">
                                <option className="d-none">Select Payment</option>
                                <option value="Bekasi">Cash</option>
                                <option value="Bandung">Transfer</option>
                            </select>
                        </div>
                        <div className="col-xl-12 mt-5 mb-5">
                            <div className="d-grid">
                                <button className="btn-lg  border-0 btn-info " type="button">Pay before : 59:30</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment 