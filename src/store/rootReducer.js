import * as reducerTypes from './reducerTypes.js'

const initialState = {
   images: [],
   page: 0,
   section_view: "hot",
   window: true,
   sort: "viral",
   show_viral: false,
   show_mature: true, 
   album_previews: true,
   modal: false,
   loading: false
}
 
export default function RootReducer (state = initialState, action) {
	switch (action.type) {
	case reducerTypes.SET_IMAGES:
        return { ...state, images: action.payload}
    case reducerTypes.SET_SECTION_IN_VIEW:
        return { ...state, section_view: action.payload}
    case reducerTypes.SET_PAGE:
        return { ...state, page: action.payload}
    case reducerTypes.SET_WINDOW:
        return { ...state, window: action.payload}
    case reducerTypes.SET_SORT:
        return { ...state, sort: action.payload}
    case reducerTypes.SET_VIRAL_STATUS:
        return { ...state, show_viral: action.payload}
    case reducerTypes.SET_MODAL:
        return { ...state, modal: action.payload}
    case reducerTypes.SET_LOADING:
        return { ...state, loading: action.payload}
	default:
		return state
	}
}