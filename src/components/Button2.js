import React from "react"
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity } from '../redux/actions/transaction'


export const Button2 = ({ max, min = 1 }) => {
    const transaction = useSelector(state => state.transaction)
    const dispatch = useDispatch()
    const incrementNumber = () => {
        if (transaction.quantity < max) {
            dispatch(setQuantity(transaction.quantity + 1))
        }
    }
    const decrementNumber = () => {
        if (transaction.quantity > min) {
            dispatch(setQuantity(transaction.quantity - 1))
        }
    }
    return (
        <div className="d-flex d-grid ms-4 justify-content-center align-item-center my-3">
            <button className="btn bg-brown rounded btn-circle d-flex justify-content-center align-item-center" onClick={decrementNumber}>
                <FaMinus />
            </button>
            <button disabled className="btn d-flex justify-content-center align-item-center" >
                <h4>{transaction.quantity}</h4>
            </button>
            <button className="btn bg-brown ms-4  rounded btn-circle d-flex justify-content-center align-item-center" onClick={incrementNumber}>
                <FaPlus />
            </button>
        </div>
    )
}
export default Button2
