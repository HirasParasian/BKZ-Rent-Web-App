import http from '../../helpers/http'

export const transaction = (token, data) => {
    const params = new URLSearchParams()
    for (const key in data) {
        params.append(key, data[key])
    }
    return ({
        type: 'RENT_TRANSACTION',
        payload: http(token).post('history', params)
    })
}

export const setQuantity = (quantity) => {
    return ({
        type: 'SET_QUANTITY',
        payload: { quantity }
    })
}

export const setRentDuration = (rentDuration) => {
    return ({
        type: 'SET_RENT_DURATION',
        payload: { rentDuration }
    })
}
export const setPaymentType = (paymentType) => {
    return ({
        type: 'SET_PAYMENT_TYPE',
        payload: { paymentType }
    })
}


export const setReservationDate = (reservationDate) => {
    return ({
        type: 'SET_RESERVATION_DATE',
        payload: { reservationDate }
    })
}