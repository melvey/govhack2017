/**
* RootReducer.js
* The root reducer to combine all other reducers used in the application
**/

import {combineReducers} from 'redux';
import generalReducer from './GeneralReducer';
import rentalsReducer from './RentalsReducer';
import userReducer from './UserReducer';

export default combineReducers({
	general: generalReducer,
	rentals: rentalsReducer,
	user: userReducer
});
