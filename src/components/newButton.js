// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import http from '../helpers/http'
// import LayoutHome from '../components/LayoutHome'
// import { increament, decreament } from '../redux/actions/counter'

// export const newButton = () => {
//     const counter = useSelector(state => state.counter)
//     const dispatch = useDispatch()
//     const onIncreament = () => {
//         dispatch(increament())
//     }

//     const onDecreament = () => {
//         dispatch(decreament())
//     }
//     return (
//         <div className="d-flex justify-content-between">
//             <button className="icon-plus button-third rounded bg-yellow fw-bolder fs-1" onClick={onDecreament}>-</button>
//             <div className="fw-bolder fs-0">{counter.num}</div>
//             <button className="icon-plus rounded fw-bolder fs-1 button-fourth" onClick={onIncreament}>+</button>
//         </div>
//     )
// }
