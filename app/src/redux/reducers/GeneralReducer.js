/**
* GeneralReducer.js
* Redux Reducer for general
**/

import actionTypes from '../actionTypes';

function handleSetTitle(state, data) {
  return Object.assign({}, state, {setTitle: data});
}

export default function setgeneralReducer(state, action) {
	switch(action.type) {
		case actionTypes.setTitle:
			return handleSetTitle(state, action.payload);
		default:
			return state || {};
	}
}
