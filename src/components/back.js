import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

export const Back = () => {
    return (
        <div className=" my-2 ">
            <div className="row">
                <a href="/" className="text-decoration-none href">
                    <span className="span-reserv"><FaChevronLeft /></span>
                </a>
            </div>
        </div>
    )
}

export default Back