import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class history extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="d-flex">
                                <div class="input-group mb-3 rounded mx-auto button-type-name2 ">
                                    <input type="text" class=" form-control bg-transparent " placeholder="Search History" />
                                    <button class="btn " type="button" id="button-addon2"><i
                                        class="fa-solid fa-magnifying-glass"></i></button>

                                </div>
                                <div class="mb-3 cover-filter rounded">
                                    <a class="nav-link filter-history" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Filter <i class="arrow-filter fa-solid fa-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu ul-for-filter orange-200" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Type</a></li>
                                        <hr class="dropdown-divider" />
                                        <li><a class="dropdown-item" href="#">Date Added</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Name</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Favorite Product</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-secondary col-xl-12 px-3 mx-5 mt-4 mb-5">
                                <p>Today</p>
                            </div>
                            <div class="my-3 mx-5 d-flex">
                                <div class="mx-auto for-text-history border-bottom border-secondary d-flex ">
                                    <p class="">Please finish your payment for vespa for Vespa Rental Jogja </p>
                                    <i class=" ms-auto fa-solid fa-chevron-right"></i>
                                </div>
                                <div class=" d-flex for-check-history">
                                    <input class="form-check-input" type="checkbox" />
                                </div>
                            </div>
                            <div class="my-3 mx-5 d-flex">
                                <div class="mx-auto for-text-history border-bottom border-secondary d-flex ">
                                    <p class="">Your payment has been confirmed! </p>
                                    <i class=" ms-auto fa-solid fa-chevron-right"></i>
                                </div>
                                <div class=" d-flex for-check-history">
                                    <input class="form-check-input" type="checkbox" />
                                </div>
                            </div>
                            <div class="text-secondary col-xl-12 px-3 mx-5 mt-4 mb-5">
                                <p>A Week Ago</p>
                            </div>
                            <div class="my-3 mx-5 d-flex ">
                                <div class="ms-3 width-img-history for-img-history d-flex ">
                                    <img src="../assets/images/history1.png" alt="" class="src" />
                                </div>
                                <div class="mx-auto for-medium-history-text">
                                    <p><b>Vespa Matic</b></p>
                                    <p>Jan 18 to 21 2021</p>
                                    <p><b>Prepayment : Rp. 245.000</b></p>
                                    <p class="text-success">Has been returned</p>
                                </div>
                                <div class=" d-flex for-check-history mt-5">
                                    <input class="form-check-input" type="checkbox" />
                                </div>
                            </div>
                            <div class="my-3 mx-5 d-flex ">
                                <div class="ms-3 width-img-history for-img-history d-flex ">
                                    <img src="../assets/images/history2.png" alt="" class="src" />
                                </div>
                                <div class="mx-auto for-medium-history-text">
                                    <p><b>Vespa Matic</b></p>
                                    <p>Jan 18 to 21 2021</p>
                                    <p><b>Prepayment : Rp. 245.000</b></p>
                                    <p class="text-success">Has been returned</p>
                                </div>
                                <div class=" d-flex for-check-history mt-5">
                                    <input class="form-check-input" type="checkbox" />
                                </div>
                            </div>
                            <div class="my-5 mx-5 d-flex ">
                                <div class="mx-auto">
                                    <button class="btn bg-brown bg-brown-size"><b>Delete selected item</b></button>
                                </div>
                            </div>

                        </div>
                        <div class="col-xl-3 mb-5 d-none d-xl-block d-xxl-block">
                            <div class="border border-2 border-secondary text-center pt-4 ">
                                <h5 class="text-center pb-4">New Arrival</h5>
                                <div class=" mb-4">
                                    <div class="position-relative">
                                        <img src="../assets/images/car2.png" alt="" class="src img-arrival rounded" />
                                        <form class="text-img-2">
                                            <button type="submit" class="btn head">Lamborghini </button>
                                            <button type="submit" class="btn">South Jakarta</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <div class="position-relative">
                                        <img src="../assets/images/car3.png" alt="" class="src img-arrival rounded" />
                                        <form class="text-img-2">
                                            <button type="submit" class="btn head">White Jeep </button>
                                            <button type="submit" class="btn">Kalimantan</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <h5>View More</h5>
                                    <i class="fa-solid fa-angle-down fa-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>

        )
    }
}
