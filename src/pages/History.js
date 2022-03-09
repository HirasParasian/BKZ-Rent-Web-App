import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { default as axios } from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaChevronRight, FaChevronLeft, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
var moment = require('moment');
const { REACT_APP_URL } = process.env



export const History = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    // const [userData, setUserData] = useState({})
    const userData = auth.userData || {}

    const [arrival, setArrival] = useState([])
    const [page, setPage] = useState({})
    const [history, setHistory] = useState([])
    const [pageHistory, setPageHistory] = useState({})

    const getNextData = async (url, replace = false) => {
        try {
            // setErrorMsg(null)
            const { data } = await axios.get(url)
            console.log(data.pageInfo)
            if (replace) {
                setArrival(data.results)
            } else {
                setArrival([
                    ...data.results
                ])
            }
            setPage(data.pageInfo)
        } catch (e) {
            if (e.message.includes('404')) {
                // setErrorMsg('Data not found!')
                setArrival([])
                setPage({
                    next: null
                })
            }
        }
    }
 
    const getNextDataHistory = async (url, replace = false) => {
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
            setPageHistory(data.pageInfo)
        } catch (e) {
            if (e.message.includes('404')) {
                // setErrorMsg('Data not found!')
                setHistory([])
                setPageHistory({
                    next: null
                })
            }
        }
    }

    useEffect(() => {
        getArrival()
        getHistory()
    }, [])

    const getArrival = async () => {
        const { data } = await axios.get(`${REACT_APP_URL}/vehicles?sort=createdAt&limit=2`)
        setArrival(data.results)
        setPage(data.pageInfo)
    }
    const getHistory = async () => {
        const { data } = await axios.get(`${REACT_APP_URL}/history?search=&page=&limit=2`)
        setHistory(data.results)
        setPageHistory(data.pageInfo)

    }


    return (
        <>
            <Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>History | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="d-flex">
                            <div className="input-group mb-3 rounded mx-auto button-type-name2 border-brown ">
                                <input name="search" type="text" className="btn-search-type form-control bg-transparent "
                                    placeholder="Search History" />
                                <button className='bg-search me-2'><FaSearch /></button>
                            </div>
                            <div className="mb-3 cover-filter rounded border-brown border-0">
                                <Link className="nav-link filter-history border-0 bg-transparent form-select " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Filter <i className="arrow-filter fa-solid fa-angle-down"></i>
                                </Link>
                                <ul className="dropdown-menu ul-for-filter orange-200" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Type</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" to="/">Date Added</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="/">Name</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="/">Favorite Product</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-secondary col-xl-12 px-3 mx-5 mt-4 mb-5">
                            <p>Today</p>
                        </div>
                        <div className="my-3 mx-5 d-flex ">
                            <div className="mx-auto text-secondary  for-text-history border-bottom border-secondary d-flex ">
                                <p>Please finish your payment for vespa for Vespa Rental Jogja </p>
                                <p className='ms-auto'><FaChevronRight /></p>
                            </div>
                            <div className=" d-flex text-secondary for-check-history">
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                        <div className="my-3 mx-5 d-flex">
                            <div className="mx-auto text-secondary for-text-history border-bottom border-secondary d-flex ">
                                <p>Your payment has been confirmed! </p>
                                <p className='ms-auto'><FaChevronRight /></p>
                            </div>
                            <div className=" d-flex for-check-history">
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                        <div className="text-secondary col-xl-12 px-3 mx-5 mt-4 mb-5">
                            <p>A Week Ago</p>
                        </div>
                        {history.map((data, idx) => {
                            // let date = data.rentStartDate
                            // let day = ;
                            // console.log(day)
                            return (
                                <div className="my-3 mx-5 d-flex " key={String(Math.random() * (999 - 100) + 100)}>
                                    <div className="ms-3 width-img-history for-img-history d-flex ">
                                        <img id="img-object" src={data.image} alt="" className="src rounded" />
                                    </div>
                                    <div className="mx-auto for-medium-history-text">
                                        <p><b>{data.vehicle}</b></p>
                                        <p>{moment(data.rentStartDate).format("MM-DD-YY")} to {moment(data.rentEndDate).format("MM-DD-YY")}</p>
                                        <p><b>Prepayment : Rp. {data.prepayment}</b></p>
                                        <p className="text-success">Has been returned</p>
                                    </div>
                                    <div className=" d-flex for-check-history mt-5">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </div>
                            )
                        })}
                        <div className="my-5 mx-5">
                            <div className="d-grid">
                                <button className="btn btn-info border-0 py-3 bg-brown"><b>Delete selected item</b></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 mb-5 d-none d-xl-block d-xxl-block">
                        <div className="border border-2 border-secondary text-center py-2 px-3 ">
                            <h5 className="text-center pb-4">New Arrival</h5>
                            {arrival.map((data, idx) => {
                                return (
                                    <div className="mb-4" key={String(Math.random() * (9999 - 1000) + 1000)}>
                                        <div className='position-relative mb-2 '>
                                            <img id="img-object-home" className=' img-thumbnail  img-001 img-fluid' src={data.image} alt={data.name} />
                                            <div className='position-absolute bottom-0 start-0  px-3 py-2 text-img1 col-3 d-grid'>
                                                <div>{data.name}</div>
                                                <div>{data.location}</div>
                                            </div>
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