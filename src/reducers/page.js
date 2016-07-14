import { SET_YEAR } from '../constants/Page'

const initialState = {
	year: 2016,
	photos: []
}

export default function page(state = initialState, action) {
	switch (action.type)
	{		
		case SET_YEAR:
			// мы не изменили объект state, а вернули новый 
			//с полем year равным action.payload (а значит годом, выбранным пользователем)
			return { ...state, year: action.payload }		
		default:
			return state
	}
}