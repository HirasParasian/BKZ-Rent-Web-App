import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { default as axios } from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Helmet } from "react-helmet";
import { connect, useSelector } from 'react-redux'
import { getPopularInTown, filterVehicles, getCategory, getPopularNext } from '../redux/actions/vehicle'
import Skeleton from 'react-loading-skeleton'
const { REACT_APP_URL } = process.env


export const VehicleType = ({ getPopularInTown, filterVehicles, getCategory }) => {
    const { vehicle } = useSelector(state => state)

    const [errorMsg, setErrorMsg] = useState(null)
    const [list, setList] = useState(false)

    //car list
    const [vehicleCar, setVehicleCar] = useState([])
    const [pageCar, setPageCar] = useState({})

    //motorbike list
    const [vehicleMotorbike, setVehicleMotorbike] = useState([])
    const [pageMotorbike, setPageMotorbike] = useState({})

    //bike list
    const [vehicleBike, setVehicleBike] = useState([])
    const [pageBike, setPageBike] = useState({})

    //popular list
    const [vehiclePopular, setVehiclePopular] = useState([])
    const [pagePopular, setPagePopular] = useState({})

    //vehicle list
    const [vehicleList, setVehicleList] = useState([])
    const [pageList, setPageList] = useState({})

    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {
        const name = searchParams.get('name')
        const location = searchParams.get('location')
        const sortType = searchParams.get('sortType')
        if (name || location || sortType) {
            document.getElementById('search').elements['name'].value = name
            document.getElementById('search').elements['location'].value = location
            document.getElementById('search').elements['sortType'].value = sortType
            const url = (name, location, sortType) => `${REACT_APP_URL}/vehicles?page=1&name=${name}&location=${location}&sortType=${sortType}`
            getDataSearch(url(name, location, sortType))
        } else {
            getData()
        }
    }, [])

    const getData = async () => {
        const { value: { data: popular } } = await getPopularInTown()
        const { value: { data: car } } = await getCategory('3')
        const { value: { data: motorbike } } = await getCategory('2')
        const { value: { data: bike } } = await getCategory('1')
        setVehiclePopular(popular.results)
        setVehicleCar(car.results)
        setVehicleMotorbike(motorbike.results)
        setVehicleBike(bike.results)
        setPagePopular(popular.pageInfo)
        setPageCar(car.pageInfo)
        setPageMotorbike(motorbike.pageInfo)
        setPageBike(bike.pageInfo)
    }

    //did update
    const getNextData = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await axios.get(url)
            if (replace) {
                setVehicleList(data.results)
                setPageList(data.pageInfo)
                setList(true)
            }
        } catch (err) {
            console.log(err)
            if (err.message.includes('404')) {
                setErrorMsg('Data not found!')
                setVehicleList([])
                setPageList({
                    next: null
                })
            }
        }
    }

    const getDataSearch = async (url) => {
        try {
            setErrorMsg(null)
            const { data } = await axios.get(url)
            setVehicleList(data.results)
            setPageList(data.pageInfo)
            setList(true)
        } catch (err) {
            // setErrorMsg(err.response.data.message)
            setErrorMsg('Data not found')
        }
    }

    // const onSearch = async (event) => {
    //   event.preventDefault()
    //   const name = event.target.elements['name'].value
    //   const location = event.target.elements['location'].value
    //   const sortType = event.target.elements['sortType'].value
    //   setSearchParams({ name, location, sortType })
    //   const { value: { data: search } } = await searchVehicle(name, location, sortType)
    //   setVehicleList(search.results)
    //   setPageList(search.pageInfo)
    //   setList(true)
    // }

    const goToDetail = (id) => {
        navigate(`/vehicles/${id}`)
    }
    const goToBikePages = () => {
        navigate(`/AllBikes`)
    }
    const goToMotorPages = () => {
        navigate(`/AllMotors`)
    }
    const goToCarPages = () => {
        navigate(`/AllCars`)
    }
    const goBack = () => {
        window.history.back()
    }

    return (

        <><Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cars | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <header>
                <div className="row">
                    <div className="col-xl-12 d-flex for-margin-search ">
                        <form id='search' to='/search' onSubmit="" className="border-brown input-group mb-3 rounded mx-auto button-type-name ">
                            <input name="search" onClick="" type="text" className="btn-search-type form-control bg-transparent "
                                placeholder="Search vehicle (ex. cars, cars name)" />
                            <select onClick="" name='type' className='form-select bg-transparent text-secondary border-start border-end-0 border-top-0 border-bottom-0  form-control'>
                                <option value='' style={{ display: 'none' }}>Select Category</option>
                                <option value="1">Bike</option>
                                <option value="2">Motorbike</option>
                                <option value="3">Car</option>
                            </select>
                            <button className="btn " type="submit" id="button-addon2"><FaSearch /></button>
                        </form>
                    </div>
                </div>
            </header>

            <div className="main">
                <div className="container mt-5 ">
                    <div className='mt-5'>
                        <div className="row">
                            <div className="d-flex ">
                                <div className='col-md-6 '>
                                    <h2><b> Bikes</b></h2>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    {list.prev !== null && <button onClick={() => getNextData(pageBike.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                    {list.next !== null && <button onClick={() => getNextData(pageBike.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                                </div>
                            </div>
                            {/* {popular.isLoading &&
                <Skeleton height={150} containerClassName='row' count={8} wrapper={({ children }) => (<div className='col-md-3'>{children}</div>)} />
              } */}
                            {
                                vehicleCar.map((data, idx) => {
                                    return (
                                        <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)} className='d-flex flex-column flex-md-row flex-md-wrap col-md-3 my-5'>
                                            <div className='position-relative mb-2 '>
                                                <img id="img-object-home" className='img-thumbnail img-fluid' src={data.image} alt={data.name} />
                                                <div className='position-absolute bottom-0 start-0 px-3 py-2 text-img1'>
                                                    <div>{data.name}</div>
                                                    <div>{data.location}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = state => ({ popularInTown: state.popularInTown, cars: state.cars, bikes: state.bikes, motors: state.motors })

const mapDispatchToProps = { getPopularInTown, getCategory }

export default connect(mapStateToProps, mapDispatchToProps)(VehicleType)