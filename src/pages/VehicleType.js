import React, { Component } from 'react'

export default class VehicleType extends Component {
  render() {
    return (
      <>
        <header>
    <div class="row">
      <div class="col-xl-12 d-flex for-margin-search ">
        <div class="input-group mb-3 rounded mx-auto button-type-name ">
          <input type="text" class="btn-search-type form-control bg-transparent "
            placeholder="Search vehicle (ex. cars, cars name)"/>
          <button class="btn " type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  </header>

  <div class="main">
    <div class="popular container">
      <h2><b> Popular in town</b></h2>
      <div class="row">
        <div class="col d-none d-xxl-block">
          <div class="img1">
            <img src="../assets/images/img3-home.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Merapi</button>
              <button type="submit" class="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-xl-block">
          <div class="img1">
            <img src="../assets/images/img2-home.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Teluk Bogam</button>
              <button type="submit" class="btn">Kalimantan</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-md-block">
          <div class="img1 ">
            <img src="../assets/images/img1-home.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Bromo</button>
              <button type="submit" class="btn">Malang</button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="img1">
            <img src="../assets/images/img4-home.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Malioboro</button>
              <button type="submit" class="btn">Yogyakarta</button>
            </form>
            <div class="next">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popular container">
      <h2><b> Cars</b></h2>
      <div class="row">
        <div class="col d-none d-xxl-block">
          <div class="img1">
            <img src="../assets/images/car1.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Van</button>
              <button type="submit" class="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-xl-block">
          <div class="img1">
            <img src="../assets/images/car2.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Lamborghini</button>
              <button type="submit" class="btn">South Jakarta</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-md-block">
          <div class="img1 ">
            <img src="../assets/images/car3.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Jeep</button>
              <button type="submit" class="btn">Malang</button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="img1">
            <img src="../assets/images/car4.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">White Jeep</button>
              <button type="submit" class="btn">Kalimantan</button>
            </form>
            <div class="next">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popular container">
      <h2><b> Motorbike</b></h2>
      <div class="row">
        <div class="col d-none d-xxl-block">
          <div class="img1">
            <img src="../assets/images/motor1.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Vespa</button>
              <button type="submit" class="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-xl-block">
          <div class="img1">
            <img src="../assets/images/motor2.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Honda KLX</button>
              <button type="submit" class="btn">Kalimantan</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-md-block">
          <div class="img1 ">
            <img src="../assets/images/motor3.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Honda</button>
              <button type="submit" class="btn">Malang</button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="img1">
            <img src="../assets/images/motor4.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Matic Bike</button>
              <button type="submit" class="btn">Yogyakarta</button>
            </form>
            <div class="next">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popular container">
      <h2><b> Popular in town</b></h2>
      <div class="row">
        <div class="col d-none d-xxl-block">
          <div class="img1">
            <img src="../assets/images/bike1.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Fixie</button>
              <button type="submit" class="btn">Yogyakarta</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-xl-block">
          <div class="img1">
            <img src="../assets/images/bike2.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Sport Bike</button>
              <button type="submit" class="btn">Kalimantan</button>
            </form>
          </div>
        </div>
        <div class="col d-none d-md-block">
          <div class="img1 ">
            <img src="../assets/images/bike3.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Onthel</button>
              <button type="submit" class="btn">Malang</button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="img1">
            <img src="../assets/images/bike4.png" class="float-start rounded"/>
            <form class="text-img1">
              <button type="submit" class="btn head">Fixie Gray</button>
              <button type="submit" class="btn">Yogyakarta</button>
            </form>
            <div class="next">
              <i class="fa-solid fa-circle-chevron-right"></i>
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
