import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import { FaPlus, FaMinus, FaHeart } from 'react-icons/fa'

export const VehicleDetail = (props) => {
    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()
    const navigate = useNavigate()


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
    const goToDetail = (dataID) => {
        navigate(`/vehicles/reservation/${dataID}`)
    }
    return (
        <>
            <Layout>
                <div className='container'>
                    <div className='row my-5'>
                        <div className="col-xl-6 detail-left">
                            <img src={vehicle?.image} alt={vehicle?.name} className="img-detail-vehicle" />
                            <div>
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
                                    <button type="button" className="btn d-flex justify-content-center align-items-center btn-secondary btn-circle"><FaMinus /></button>
                                    <button type="button" className="btn d-flex justify-content-center align-items-center bg-transparent btn-circle"><b>2</b></button>
                                    <button type="button" className="btn d-flex justify-content-center align-items-center btn-warning btn-circle"><FaPlus /></button>
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