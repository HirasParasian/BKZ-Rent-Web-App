import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { default as axios } from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Helmet } from "react-helmet";
import { connect, useSelector } from 'react-redux'
import { getPopularInTown, filterVehicles, getCars, getMotors, getBikes } from '../redux/actions/popularInTown'
import Skeleton from 'react-loading-skeleton'



export const VehicleType = ({ getPopularInTown, filterVehicles, getCars, getMotors, getBikes }) => {
  //PopularInTown
  const { popularInTown: popular } = useSelector(state => state)
  // eslint-disable-next-line no-unused-vars
  const [popularInTown, setPopularInTown] = useState([])
  const [page, setPage] = useState({})


  //Cars
  const { cars: car } = useSelector(state => state)
  // eslint-disable-next-line no-unused-vars
  const [cars, setCars] = useState([])
  const [pageCars, setPageCars] = useState({})


  //Motors
  const { motors: motor } = useSelector(state => state)
  // eslint-disable-next-line no-unused-vars
  const [motors, setMotors] = useState([])
  const [pageMotors, setPageMotors] = useState({})


  //Bikes
  const { bikes: bike } = useSelector(state => state)
  // eslint-disable-next-line no-unused-vars
  const [bikes, setBikes] = useState([])
  const [pageBikes, setPageBikes] = useState({})



  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState(null)


  useEffect(() => {
    getPopularInTown()
    getCars()
    getMotors()
    getBikes()
  }, [])


  const getNextData = async (url, replace = false) => {
    try {
      setErrorMsg(null)
      const { data } = await axios.get(url)
      if (replace) {
        setPopularInTown(data.results)
      } else {
        setPopularInTown([
          ...data.results
        ])
      }
      setPage(data.pageInfo)
    } catch (e) {
      if (e.message.includes('404')) {
        setErrorMsg('Data not found!')
        setPopularInTown([])
        setPage({
          next: null
        })
      }
    }
  }
  const getNextDataBike = async (url, replace = false) => {
    try {
      setErrorMsg(null)
      const { data } = await axios.get(url)
      if (replace) {
        setBikes(data.results)
      } else {
        setBikes([
          ...data.results
        ])
      }
      setPageBikes(data.pageInfo)
    } catch (e) {
      if (e.message.includes('404')) {
        setErrorMsg('Data not found!')
        setBikes([])
        setPageBikes({
          next: null
        })
      }
    }
  }
  const getNextDataMotor = async (url, replace = false) => {
    try {
      setErrorMsg(null)
      const { data } = await axios.get(url)
      if (replace) {
        setMotors(data.results)
      } else {
        setMotors([
          ...data.results
        ])
      }
      setPageMotors(data.pageInfo)
    } catch (e) {
      if (e.message.includes('404')) {
        setErrorMsg('Data not found!')
        setMotors([])
        setPageMotors({
          next: null
        })
      }
    }
  }
  const getNextDataCars = async (url, replace = false) => {
    try {
      setErrorMsg(null)
      const { data } = await axios.get(url)
      if (replace) {
        setCars(data.results)
      } else {
        setCars([
          ...data.results
        ])
      }
      setPageCars(data.pageInfo)
    } catch (e) {
      if (e.message.includes('404')) {
        setErrorMsg('Data not found!')
        setCars([])
        setPageCars({
          next: null
        })
      }
    }
  }
  let searchclick = false
  const onSearch = async (event) => {

    searchclick = true
    event.preventDefault();
    const url = (name, type) => `http://localhost:5000/vehicles?search=${name}&category=${type}`
    const name = event.target.elements["search"].value
    const type = event.target.elements["type"].value
    setSearchParams({ name, type })
    await getNextData(url(name, type), true)
    console.log(url)
    navigate(`/search`, { replace: true })
  }


  const goToDetail = (vehicleId) => {
    navigate(`/vehicles/${vehicleId}`)
  }

  return (

    <><Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vehicle Type | Planet BKZ Rent</title>
        <link rel="canonical" to="/" />
      </Helmet>
      <header>
        <div className="row">
          <div className="col-xl-12 d-flex for-margin-search ">
            <form id='search' to='/search' onSubmit={onSearch} className="border-brown input-group mb-3 rounded mx-auto button-type-name ">
              <input name="search" onClick={onSearch} type="text" className="btn-search-type form-control bg-transparent "
                placeholder="Search vehicle (ex. cars, cars name)" />
              <select onClick={onSearch} name='type' className='form-select bg-transparent text-secondary border-start border-end-0 border-top-0 border-bottom-0  form-control'>
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
                  <h2><b> Popular in town</b></h2>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                  {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                </div>
              </div>
              {popular.isLoading &&
                <Skeleton height={150} containerClassName='row' count={8} wrapper={({ children }) => (<div className='col-md-3'>{children}</div>)} />
              }
              {
                popular.popularInTown.map((data, idx) => {
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
          {
            <div className='mt-5'>
              <div className="col-md-12 d-flex ">
                <div className='col-md-6'>
                  <h2><b> Bike</b></h2>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  {pageBikes.prev !== null && <button onClick={() => getNextDataBike(pageBikes.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                  {pageBikes.next !== null && <button onClick={() => getNextDataBike(pageBikes.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                </div>
              </div>
              <div className="row">
                {bike.bikes.map((data, idx) => {
                  return (
                    <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)} className='col-md-3 my-5'>
                      <div className='position-relative mb-2 '>
                        <img id="img-object-home" className=' img-thumbnail img-001 img-fluid' src={data.image} alt={data.name} />
                        <div className='position-absolute bottom-0 start-0 px-3 py-2 text-img1'>
                          <div>{data.name}</div>
                          <div>{data.location}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>}

          {
            <div className='mt-5'>
              <div className="col-md-12 d-flex ">
                <div className='col-md-6'>
                  <h2><b> Motorbike</b></h2>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  {pageMotors.prev !== null && <button onClick={() => getNextDataMotor(pageMotors.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                  {pageMotors.next !== null && <button onClick={() => getNextDataMotor(pageMotors.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                </div>
              </div>
              <div className="row">
                {motor.motors.map((data, idx) => {
                  return (
                    <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)} className='col-md-3 my-5 d-flex'>
                      <div className='position-relative mb-2 '>
                        <img id="img-object-home" className=' img-thumbnail img-001 img-fluid' src={data.image} alt={data.name} />
                        <div className='position-absolute bottom-0 start-0 px-3 py-2 text-img1'>
                          <div>{data.name}</div>
                          <div>{data.location}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>}

          {
            <div className='mt-5'>
              <div className="col-md-12 d-flex ">
                <div className='col-md-6'>
                  <h2><b> Cars</b></h2>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  {pageCars.prev !== null && <button onClick={() => getNextDataCars(pageCars.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                  {pageCars.next !== null && <button onClick={() => getNextDataCars(pageCars.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                </div>
              </div>
              <div className="row">
                {car.cars.map((data, idx) => {
                  return (
                    <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)} className='col-md-3 my-5'>
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
              </div>
            </div>}
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({ popularInTown: state.popularInTown, cars: state.cars, bikes: state.bikes, motors: state.motors })

const mapDispatchToProps = { getPopularInTown, filterVehicles, getCars, getMotors, getBikes }

export default connect(mapStateToProps, mapDispatchToProps)(VehicleType)