/**
* RentalsReducer.js
* Redux Reducer for rentals
**/

import actionTypes from '../actionTypes';

function handleSetRentalList(state, data) {
  return Object.assign({}, state, {setRentalList: data});
}

export default function setrentalsReducer(state, action) {
	switch(action.type) {
		case actionTypes.setRentalList:
			return handleSetRentalList(state, action.payload);
		default:
			return state || {};
	}
}
