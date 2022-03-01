import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Button2 from '../components/Button2'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import {FaHeart } from 'react-icons/fa'
const { APP_URL } = process.env

export const VehicleDetail = (props) => {
    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)
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
    const goToDetail = (vehicleId) => {
        navigate(`/vehicles/reservation/${vehicleId}`)
    }
    return (
        <>
            <Layout>
                <div className='container'>
                    <div className='row my-5'>
                        <div className="col-xl-6 detail-left">
                            <img src={vehicle?.image} alt={vehicle?.name} className="img-detail-vehicle" />
                            <div className='my-5'>
                                <a href="../views/index-after-login.html"><button type="button" className="btn-detail-vehicle btn btn-info">Chat
                                    Admin</button></a>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div>
                                <h2><b>{vehicle?.name} - </b> {vehicle?.location}</h2>
                                <h5 className="text-success"><b>Available</b></h5>
                                <h5 className="text-danger"><b>No Prepayment</b></h5>
                                <br />
                                <div>
                                    <p>Capacity : 1 Person</p>
                                    <p>Type : Bike </p>
                                    <p>Reservation Before 2 PM</p>
                                    <br /><br />
                                </div>
                                <div className="d-flex">
                                    <Button2 />
                                    <h4 className="d-flex align-items-center justify-content-center"><b> Rp. {vehicle?.price}/day</b></h4>
                                </div>
                                <div className="d-flex">
                                    <button onClick={() => goToDetail(vehicleId)} type="button"
                                        className="btn-detail-reserv btn btn-info">Reservation</button>
                                    <a href="/"><button type="button" className="btn-detail-fav btn btn-info">
                                        <FaHeart /></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default VehicleDetail