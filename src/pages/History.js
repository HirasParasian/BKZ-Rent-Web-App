import React, { useState, useEffect } from 'react'
import { default as axios } from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import history1 from "../assets/images/history1.png"
import history2 from '../assets/images/history2.png'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'



export const History = () => {

    const [history, setHistory] = useState([])
    const [page, setPage] = useState({})

    const getNextData = async (url, replace = false) => {
        try {
            // setErrorMsg(null)
            const { data } = await axios.get(url)
            console.log(data.pageInfo)
            if (replace) {
                setHistory(data.results)
            } else {
                setHistory([
                    ...data.results
                ])
            }
            setPage(data.pageInfo)
        } catch (e) {
            if (e.message.includes('404')) {
                // setErrorMsg('Data not found!')
                setHistory([])
                setPage({
                    next: null
                })
            }
        }
    }

    useEffect(() => {
        getHistory()
    }, [])

    const getHistory = async () => {
        const { data } = await axios.get('http://localhost:5000/vehicles?sort=createdAt&limit=2')
        setHistory(data.results)
        setPage(data.pageInfo)
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="d-flex">
                            <div className="input-group mb-3 rounded mx-auto button-type-name2 ">
                                <input type="text" className=" form-control bg-transparent " placeholder="Search History" />
                                <button className="btn " type="button" id="button-addon2"><i
                                    className="fa-solid fa-magnifying-glass"></i></button>

                            </div>
                            <div className="mb-3 cover-filter rounded">
                                <a className="nav-link filter-history" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Filter <i className="arrow-filter fa-solid fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu ul-for-filter orange-200" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Type</a></li>
                                    <hr className="dropdown-divider" />
                                    <li><a className="dropdown-item" href="#">Date Added</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Name</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Favorite Product</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-secondary col-xl-12 px-3 mx-5 mt-4 mb-5">
                            <p>Today</p>
                        </div>
                        <div className="my-3 mx-5 d-flex">
                            <div className="mx-auto for-text-history border-bottom border-secondary d-flex ">
                                <p className="">Please finish your payment for vespa for Vespa Rental Jogja </p>
                                <i className=" ms-auto fa-solid fa-chevron-right"></i>
                            </div>
                            <div className=" d-flex for-check-history">
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                        <div className="my-3 mx-5 d-flex">
                            <div className="mx-auto for-text-history border-bottom border-secondary d-flex ">
                                <p className="">Your payment has been confirmed! </p>
                                <i className=" ms-auto fa-solid fa-chevron-right"></i>
                            </div>
                            <div className=" d-flex for-check-history">
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                        <div className="text-secondary col-xl-12 px-3 mx-5 mt-4 mb-5">
                            <p>A Week Ago</p>
                        </div>
                        <div className="my-3 mx-5 d-flex ">
                            <div className="ms-3 width-img-history for-img-history d-flex ">
                                <img src={history1} alt="" className="src" />
                            </div>
                            <div className="mx-auto for-medium-history-text">
                                <p><b>Vespa Matic</b></p>
                                <p>Jan 18 to 21 2021</p>
                                <p><b>Prepayment : Rp. 245.000</b></p>
                                <p className="text-success">Has been returned</p>
                            </div>
                            <div className=" d-flex for-check-history mt-5">
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                        <div className="my-3 mx-5 d-flex ">
                            <div className="ms-3 width-img-history for-img-history d-flex ">
                                <img src={history2} alt="" className="src" />
                            </div>
                            <div className="mx-auto for-medium-history-text">
                                <p><b>Vespa Matic</b></p>
                                <p>Jan 18 to 21 2021</p>
                                <p><b>Prepayment : Rp. 245.000</b></p>
                                <p className="text-success">Has been returned</p>
                            </div>
                            <div className=" d-flex for-check-history mt-5">
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                        <div className="my-5 mx-5 d-flex ">
                            <div className="mx-auto">
                                <button className="btn bg-brown bg-brown-size"><b>Delete selected item</b></button>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-3 mb-5 d-none d-xl-block d-xxl-block">
                        <div className="border border-2 border-secondary text-center pt-4 ">
                            <h5 className="text-center pb-4">New Arrival</h5>
                            {history.map((data, idx) => {
                                return (
                                    <div className=" mb-4" key={String(data.vehicleId)}>
                                        <div className="position-relative " >
                                            <img src={data.image} alt="" className="src img-fluid img-arrival rounded" />
                                            <form className="text-img-2">
                                                <button type="submit" className="btn head">{data.name} </button>
                                                <button type="submit" className="btn">{data.location}</button>
                                            </form>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="text-center">
                                {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default History