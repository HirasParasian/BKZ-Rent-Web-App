import { combineReducers } from 'redux'
import auth from './auth'
import vehicle from './vehicle'
import counter from './counter'


const rootReducer = combineReducers({
	auth,
	vehicle,
	counter

})

export default rootReducer