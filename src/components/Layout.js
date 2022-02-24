import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Navbar />
                {this.props.children}
            </>
        )
    }
}
