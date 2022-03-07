const initialState = {
    quantity: 1,
    rentDuration: 1,
    reservationDate: null,
    isLoading: false,
    error: false,
    errorMsg: '',
    message: '',
}

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case 'RENT_TRANSACTION_PENDING': {
            state.isLoading = true
            state.error = false
            return { ...state }
        }
        case 'RENT_TRANSACTION_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.error = false
            state.message = data.message
            return { ...state }
        }
        case 'RENT_TRANSACTION_REJECTED': {
            state.isLoading = false
            state.error = true
            return { ...state }
        }
        case 'SET_QUANTITY': {
            state.quantity = action.payload.quantity
            return { ...state }
        }
        case 'SET_RENT_DURATION': {
            state.rentDuration = action.payload.rentDuration
            return { ...state }
        }
        case 'SET_RESERVATION_DATE': {
            state.reservationDate = action.payload.reservationDate
            return { ...state }
        }
        case 'SET_PAYMENT_TYPE': {
            state.paymentType = action.payload.paymentType
            return { ...state }
        }
        case 'CLEAR_TRANSACTION': {
            return initialState
        }
        default: {
            return { ...state }
        }
    }
}

export default transaction