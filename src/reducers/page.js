import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Page'

const initialState = {
	year: 2016,
	photos: [],
	fetching: false
}

export default function page(state = initialState, action) {
	switch (action.type)
	{		
		// case SET_YEAR:
		// 	// мы не изменили объект state, а вернули новый 
		// 	//с полем year равным action.payload (а значит годом, выбранным пользователем)
		// 	return { ...state, year: action.payload }
		case GET_PHOTOS_REQUEST:
			return { ...state, year: action.payload, fetching: true }
		case GET_PHOTOS_SUCCESS:
			return { ...state, photos: action.payload, fetching: false }
		default:
			return state
	}
}