import { combineReducers } from 'redux'
import auth from './auth'
import vehicle from './vehicle'
import counter from './counter'
import detailVehicle from './detailVehicle'
import transaction from './transaction'


const rootReducer = combineReducers({
	auth,
	vehicle,
	counter,
	detailVehicle,
	transaction

})

export default rootReducer