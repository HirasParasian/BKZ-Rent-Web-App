import React, { Component } from 'react'
import logo from '../assets/images/logo-bkz.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar ms-auto navbar-expand-lg navbar-light bg-transparent">
                <div class="container ">
                    <a class="navbar-brand" href="../views/index-after-login.html">
                        <img src={logo} alt="Avatar Logo"
                            class="w-25 logo-bkz rounded-pill" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="center-navbar collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=" navbar-nav ms-auto mb-lg-0">
                            <li class="nav-item nav-menu-before">
                                <a class="nav-link active" aria-current="page" href="../views/index-after-login.html">Home</a>
                            </li>
                            <li class="nav-item nav-menu-before">
                                <a class="nav-link" href="../views/history.html">History</a>
                            </li>
                            <li class="nav-item dropdown nav-menu-before">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Vehicle Type
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="../views/vehicles-type.html">Vehicle Type</a></li>
                                    <li><a class="dropdown-item" href="../views/view-more-detail.html">View More Detail</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="../views/reservation.html">Reservation</a></li>
                                    <li><a class="dropdown-item" href="../views/payment.html">Payment</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-menu-before">
                                <a class="nav-link" href="#" tabindex="-1">About</a>
                            </li>
                        </ul>
                        <form class="d-flex justify-content-center">
                            <div class="mail">
                                <a class="" href="#">
                                    <i class="text-warning  fa-solid fa-envelope"></i>
                                </a>
                            </div>
                            <div class="img-profile-login">
                                <a class="" href="../views/profil.html">
                                    <img src="../assets/images/profile.png" alt="Avatar Logo" class=" rounded-pill" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
