
import { STORE_CONTACT, STORE_CONTACTS, STORE_USERS } from "../actions/actionsTypes";
import createReducer from '../../../redux/createReducer'

export const initialState = {
    contacts: [],
    users: [],
}

const contacts = createReducer(initialState, {
    [STORE_CONTACT]: (state, action) => ({...action.payload.contact}),
    [STORE_CONTACTS]: (state, action) => ({
        contacts: action.payload.contacts,
        users: state.users
    }),
    [STORE_USERS]: (state, action) => ({
        contacts: state.contacts,
        users: action.payload.users
    }),
})

export default contacts