/**
* UserReducer.js
* Redux Reducer for user
**/

import Immutable, {Map} from 'immutable';
import actionTypes from '../actionTypes';

function handleSetUser(state, data) {
	return Map.isMap(data)
		? data
		: Immutable.fromJS(data);
}

export default function setuserReducer(state, action) {
	switch(action.type) {
		case actionTypes.setUser:
			return handleSetUser(state, action.payload);
		default:
			return state || new Map()
	}
}
