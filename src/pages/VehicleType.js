import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { default as axios } from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import defaultvehicle from '../assets/images/default.jpeg'
import qs from 'qs'

export const CharacterList = () => {
  const [popularInTown, setPopularInTown] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('name')
    const gender = searchParams.get('gender')

    if (name || gender) {
      const url = (name, gender) => `https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}`
      document.getElementById('search').elements['search'].value = name
      document.getElementById('search').elements['gender'].value = gender
      getNextData(url(name, gender), true)
    } else {
      getPopularInTown()
    }
  }, [])

  const getPopularInTown = async () => {
    const { data } = await axios.get('http://localhost:5000/vehicles/popularintown?location')
    setPopularInTown(data.results)
    setPage(data.info)
  }

  const getNextData = async (url, replace = false) => {
    try {
      setErrorMsg(null)
      const { data } = await axios.get(url)
      if (replace) {
        setPopularInTown(data.results)
      } else {
        setPopularInTown([
          ...popularInTown,
          ...data.results
        ])
      }
      setPage(data.info)
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
  const onSearch = async (event) => {
    event.preventDefault();
    const url = (name) => `http://localhost:5000/vehicles?search=${name}`
    const name = event.target.elements["search"].value
    console.log(name)
    // const gender = event.target.elements["gender"].value
    setSearchParams({ name })
    await getNextData(url(name), true)
  }

  const goToDetail = (id) => {
    navigate(`/characters/${id}`)
  }
  return (
    <>
      <header>
        <div className="row">
          <div className="col-xl-12 d-flex for-margin-search ">
            <form id='search' onSubmit={onSearch} className="input-group mb-3 rounded mx-auto button-type-name ">
              <input name="search" type="text" className="btn-search-type form-control bg-transparent "
                placeholder="Search vehicle (ex. cars, cars name)" />
              <button className="btn " type="submit" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
        </div>
      </header>

      <div className="main">
        <div className="popular container">
          <h2><b> Popular in town</b></h2>
          <div className="row">
            {popularInTown.map((data, idx) => {
              return (
                <div onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)} className='col-md-3'>
                  <div className='position-relative mb-2'>
                    <img className='img-fluid' src={defaultvehicle} alt={data.name} />
                    <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2'>
                      <div>{data.name}</div>
                      <div>{data.location}</div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="col d-none d-xl-block">
              <div className="img1">
                <img src="../assets/images/img2-home.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Teluk Bogam</button>
                  <button type="submit" className="btn">Kalimantan</button>
                </form>
              </div>
            </div>
            <div className="col d-none d-md-block">
              <div className="img1 ">
                <img src="../assets/images/img1-home.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Bromo</button>
                  <button type="submit" className="btn">Malang</button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="img1">
                <img src="../assets/images/img4-home.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Malioboro</button>
                  <button type="submit" className="btn">Yogyakarta</button>
                </form>
                <div className="next">
                  <i className="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="popular container">
          <h2><b> Cars</b></h2>
          <div className="row">
            <div className="col d-none d-xxl-block">
              <div className="img1">
                <img src="../assets/images/car1.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Van</button>
                  <button type="submit" className="btn">Yogyakarta</button>
                </form>
              </div>
            </div>
            <div className="col d-none d-xl-block">
              <div className="img1">
                <img src="../assets/images/car2.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Lamborghini</button>
                  <button type="submit" className="btn">South Jakarta</button>
                </form>
              </div>
            </div>
            <div className="col d-none d-md-block">
              <div className="img1 ">
                <img src="../assets/images/car3.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Jeep</button>
                  <button type="submit" className="btn">Malang</button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="img1">
                <img src="../assets/images/car4.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">White Jeep</button>
                  <button type="submit" className="btn">Kalimantan</button>
                </form>
                <div className="next">
                  <i className="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="popular container">
          <h2><b> Motorbike</b></h2>
          <div className="row">
            <div className="col d-none d-xxl-block">
              <div className="img1">
                <img src="../assets/images/motor1.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Vespa</button>
                  <button type="submit" className="btn">Yogyakarta</button>
                </form>
              </div>
            </div>
            <div className="col d-none d-xl-block">
              <div className="img1">
                <img src="../assets/images/motor2.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Honda KLX</button>
                  <button type="submit" className="btn">Kalimantan</button>
                </form>
              </div>
            </div>
            <div className="col d-none d-md-block">
              <div className="img1 ">
                <img src="../assets/images/motor3.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Honda</button>
                  <button type="submit" className="btn">Malang</button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="img1">
                <img src="../assets/images/motor4.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Matic Bike</button>
                  <button type="submit" className="btn">Yogyakarta</button>
                </form>
                <div className="next">
                  <i className="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular container">
          <h2><b> Popular in town</b></h2>
          <div className="row">
            <div className="col d-none d-xxl-block">
              <div className="img1">
                <img src="../assets/images/bike1.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Fixie</button>
                  <button type="submit" className="btn">Yogyakarta</button>
                </form>
              </div>
            </div>
            <div className="col d-none d-xl-block">
              <div className="img1">
                <img src="../assets/images/bike2.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Sport Bike</button>
                  <button type="submit" className="btn">Kalimantan</button>
                </form>
              </div>
            </div>
            <div className="col d-none d-md-block">
              <div className="img1 ">
                <img src="../assets/images/bike3.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Onthel</button>
                  <button type="submit" className="btn">Malang</button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="img1">
                <img src="../assets/images/bike4.png" className="float-start rounded" />
                <form className="text-img1">
                  <button type="submit" className="btn head">Fixie Gray</button>
                  <button type="submit" className="btn">Yogyakarta</button>
                </form>
                <div className="next">
                  <i className="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CharacterList