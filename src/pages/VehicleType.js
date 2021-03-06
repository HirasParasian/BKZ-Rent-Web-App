import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { default as axios } from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Helmet } from "react-helmet";
import { connect, useSelector } from 'react-redux'
import { getPopularInTown, filterVehicles, getCategory, searchVehicle } from '../redux/actions/vehicle'
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
    // const name = searchParams.get('name')
    // const category = searchParams.get('category')

    // // if (name || category) {
    // //   document.getElementById('search').elements['name'].value = name
    // //   document.getElementById('search').elements['category'].value = category
    // //   const url = (name, category) => `${REACT_APP_URL}/vehicles?limit=12&search=${name}&category=${category}`
    // //   getDataSearch(url(name, category))
    // // } else {
    getData()
    // }
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
      const filterBy = url.split('category=')[1]
      const { data } = await axios.get(url)
      if (replace) {
        setVehicleList(data.results)
        setPageList(data.pageInfo)
        setList(true)
      } else {
        if (filterBy === '3') {
          setVehicleCar(data.results)
          setPageCar(data.pageInfo)
        } else if (filterBy === '2') {
          setVehicleMotorbike(data.results)
          setPageMotorbike(data.pageInfo)
        } else if (filterBy === '1') {
          setVehicleBike(data.results)
          setPageBike(data.pageInfo)
        } else {
          setVehiclePopular(data.results)
          setPagePopular(data.pageInfo)
        }
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

  // const getDataSearch = async (url) => {
  //   try {
  //     setErrorMsg(null)
  //     const { data } = await axios.get(url)
  //     setVehicleList(data.results)
  //     setPageList(data.pageInfo)
  //     setList(true)
  //   } catch (err) {
  //     // setErrorMsg(err.response.data.message)
  //     setErrorMsg('Data not found')
  //   }
  // }

  // const onSearch = (event) => {
  //   event.preventDefault()
  //   const name = event.target.elements['name'].value
  //   const category = event.target.elements['category'].value
  //   setSearchParams({ name, category })
  //   console.log(name)
  //   const { value: { data: search } } = searchVehicle(name, category)
  //   setVehicleList(search.results)
  //   setPageList(search.pageInfo)
  //   setList(true)
  // }

  const goToDetail = (vehicleId) => {
    navigate(`/vehicles/${vehicleId}`)
  }
  const goToBikePages = () => {
    window.scrollTo(0, 0)
    navigate(`/AllBikes`)
  }
  const goToMotorPages = () => {
    window.scrollTo(0, 0)
    navigate(`/AllMotors`)
  }
  const goToCarPages = () => {
    window.scrollTo(0, 0)
    navigate(`/AllCars`)
  }
  const goBack = () => {
    window.history.back()
  }
  const goSearch = () => {
    navigate(`/search`)
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
            <form id='search' onSubmit={goSearch} to='/search' className="border-brown input-group mb-3 rounded mx-auto button-type-name ">
              <input name="name" onClick={goSearch} type="text" className="btn-search-type form-control bg-transparent "
                placeholder="Search vehicle (ex. cars, cars name)" />
              <select name='category' className='form-select bg-transparent text-secondary border-start border-end-0 border-top-0 border-bottom-0  form-control'>
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
                  {pageList.prev !== null && <button onClick={() => getNextData(pagePopular.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                  {pageList.next !== null && <button onClick={() => getNextData(pagePopular.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                </div>
              </div>
              {/* {popular.isLoading &&
                <Skeleton height={150} containerClassName='row' count={8} wrapper={({ children }) => (<div className='col-md-3'>{children}</div>)} />
              } */}
              {
                vehiclePopular.map((data, idx) => {
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
                  {pageBike.next !== null && <button onClick={() => goToBikePages()} className='btn '><p>View All Bike <FaChevronRight /></p></button>}
                </div>
              </div>
              <div className="row">
                {vehicleBike.map((data, idx) => {
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
                  {pageBike.next !== null && <button onClick={() => goToMotorPages()} className='btn '><p>View All Motorbike <FaChevronRight /></p></button>}
                </div>
              </div>
              <div className="row">
                {vehicleMotorbike.map((data, idx) => {
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
                  {pageBike.next !== null && <button onClick={() => goToCarPages()} className='btn '><p>View All Cars <FaChevronRight /></p></button>}
                </div>
              </div>
              <div className="row">
                {vehicleCar.map((data, idx) => {
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

const mapDispatchToProps = { getPopularInTown, getCategory }

export default connect(mapStateToProps, mapDispatchToProps)(VehicleType)