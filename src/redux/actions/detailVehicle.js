import http from "../../helpers/http"

export const getDetailVehicle = (vehicleId) => {
    return {
        type: 'GET_DETAIL_VEHICLE',
        payload: http().get(`vehicles/search/${vehicleId}`)
    }
}