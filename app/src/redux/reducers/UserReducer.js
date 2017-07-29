/**
* UserReducer.js
* Redux Reducer for user
**/

import actionTypes from '../actionTypes';

function handleSetUser(state, data) {
  return Object.assign({}, state, {setUser: data});
}

export default function setuserReducer(state, action) {
	switch(action.type) {
		case actionTypes.setUser:
			return handleSetUser(state, action.payload);
		default:
			return state || {};
	}
}
