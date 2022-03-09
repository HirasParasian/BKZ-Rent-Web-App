import { combineReducers } from 'redux'
import auth from './auth'
import vehicle from './vehicle'
import counter from './counter'
import detailVehicle from './detailVehicle'
import transaction from './transaction'
import user from './user'


const rootReducer = combineReducers({
	auth,
	vehicle,
	counter,
	detailVehicle,
	transaction,
	user

})

export default rootReducer