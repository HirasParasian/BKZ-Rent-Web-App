import React, { Component } from 'react'

export default class VehicleType extends Component {
  render() {
    return (
      <>
        <header>
    <div className="row">
      <div className="col-xl-12 d-flex for-margin-search ">
        <div className="input-group mb-3 rounded mx-auto button-type-name ">
          <input type="text" className="btn-search-type form-control bg-transparent "
            placeholder="Search vehicle (ex. cars, cars name)"/>
          <button className="btn " type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  </header>

  <div className="main">
    <div className="popular container">
      <h2><b> Popular in town</b></h2>
      <div className="row">
        <div className="col d-none d-xxl-block">
          <div className="img1">
            <img src="../assets/images/img3-home.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Merapi</button>
              <button type="submit" className="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-xl-block">
          <div className="img1">
            <img src="../assets/images/img2-home.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Teluk Bogam</button>
              <button type="submit" className="btn">Kalimantan</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-md-block">
          <div className="img1 ">
            <img src="../assets/images/img1-home.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Bromo</button>
              <button type="submit" className="btn">Malang</button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="img1">
            <img src="../assets/images/img4-home.png" className="float-start rounded"/>
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
            <img src="../assets/images/car1.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Van</button>
              <button type="submit" className="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-xl-block">
          <div className="img1">
            <img src="../assets/images/car2.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Lamborghini</button>
              <button type="submit" className="btn">South Jakarta</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-md-block">
          <div className="img1 ">
            <img src="../assets/images/car3.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Jeep</button>
              <button type="submit" className="btn">Malang</button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="img1">
            <img src="../assets/images/car4.png" className="float-start rounded"/>
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
            <img src="../assets/images/motor1.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Vespa</button>
              <button type="submit" className="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-xl-block">
          <div className="img1">
            <img src="../assets/images/motor2.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Honda KLX</button>
              <button type="submit" className="btn">Kalimantan</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-md-block">
          <div className="img1 ">
            <img src="../assets/images/motor3.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Honda</button>
              <button type="submit" className="btn">Malang</button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="img1">
            <img src="../assets/images/motor4.png" className="float-start rounded"/>
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
            <img src="../assets/images/bike1.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Fixie</button>
              <button type="submit" className="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-xl-block">
          <div className="img1">
            <img src="../assets/images/bike2.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Sport Bike</button>
              <button type="submit" className="btn">Kalimantan</button>
            </form>
          </div>
        </div>
        <div className="col d-none d-md-block">
          <div className="img1 ">
            <img src="../assets/images/bike3.png" className="float-start rounded"/>
            <form className="text-img1">
              <button type="submit" className="btn head">Onthel</button>
              <button type="submit" className="btn">Malang</button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="img1">
            <img src="../assets/images/bike4.png" className="float-start rounded"/>
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
}
