
import { STORE_CONTACT, STORE_CONTACTS } from "../actions/actionsTypes";
import createReducer from '../../../redux/createReducer'

export const initialState = {}

const contacts = createReducer(initialState, {
    [STORE_CONTACT]: (state, action) => ({...action.payload.contact}),
    [STORE_CONTACTS]: (state, action) => ({...action.payload.contacts}),
})

export default contacts