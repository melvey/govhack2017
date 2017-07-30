/**
* RentalsReducer.js
* Redux Reducer for rentals
**/

import Immutable, {List} from 'immutable';
import actionTypes from '../actionTypes';

// fudge some existing data
const defaultList = [
	{
			hostId: 1,
			hostName: 'Horatio Rube',
			suburb: 'Malak',
			address: 'Applegum St. Malak'
			campusDist: 4,
			price: 60,
			minStay: null,
			photo: 'images/sample1.jpg'
	},
	{
			hostId: 2,
			hostName: 'Nicky Abram',
			suburb: 'Alawa',
			campusDist: 0.2,
			price: 70,
			minStay: null,
			photo: 'images/sample2.jpg'
	},
	{
			hostId: 3,
			hostName: 'Linden Kirby',
			suburb: 'Wulagi',
			campusDist: 3,
			price: 65,
			minStay: null,
			photo: 'images//sample3.jpg'
	}
]

function handleSetRentalList(state, data) {
	return List.isList(data)
		? data
		: Immutable.fromJS(data);
}

export default function setrentalsReducer(state, action) {
	switch(action.type) {
		case actionTypes.setRentalList:
			return handleSetRentalList(state, action.payload);
		default:
			return state || Immutable.fromJS(defaultList);
	}
}
