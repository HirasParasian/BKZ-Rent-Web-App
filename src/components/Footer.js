import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="row text">
                    <div className="col">
                        <div>
                            <img className="logo-bkz" src="../assets/images/logo-bkz.png" alt="Logo" />
                        </div>
                        <div className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information
                            from us</div>
                        <div>©2022 Planet BKZ Rental. All rights reserved</div>
                    </div>
                    <div className="col-md-2 footer-list">
                        <h5>Destination</h5>
                        <ul>
                            <li>Bali</li>
                            <li>Yogyakarta</li>
                            <li>Jakarta</li>
                            <li>Kalimantan</li>
                            <li>Malang</li>
                        </ul>
                    </div>
                    <div className="col-md-2 footer-list">
                        <h5>Destination</h5>
                        <ul>
                            <li>Bali</li>
                            <li>Yogyakarta</li>
                            <li>Jakarta</li>
                            <li>Kalimantan</li>
                            <li>Malang</li>
                        </ul>
                    </div>
                    <div className="col-md-2 footer-list">
                        <h5>Destination</h5>
                        <ul>
                            <li>Bali</li>
                            <li>Yogyakarta</li>
                            <li>Jakarta</li>
                            <li>Kalimantan</li>
                            <li>Malang</li>
                        </ul>
                    </div>
                </div>
                <div className="link-social">
                    <FaTwitter />
                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaYoutube />
                </div>
            </footer>
        )
    }
}
