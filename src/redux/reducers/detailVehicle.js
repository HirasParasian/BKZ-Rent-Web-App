const vehicleDetail = {
    data: {},
    isLoading: false,
    isError: false
}


const detailVehicle = (state = vehicleDetail, action) => {
    switch (action.type) {
        case 'GET_DETAIL_VEHICLE_PENDING': {
            state.isLoading = true
            state.isError = false
            return { ...state }
        }
        case 'GET_DETAIL_VEHICLE_FULFILLED': {
            const { data } = action.payload
            state.data = data.result
            state.isLoading = false
            return { ...state }
        }
        case 'GET_DETAIL_VEHICLE_REJECTED': {
            state.isLoading = false
            state.isError = true
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default detailVehicle