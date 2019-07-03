
import { STORE_CONTACT, STORE_CONTACTS, STORE_USERS, STORE_USER, REMOVE_USER, REMOVE_CONTACT } from "../actions/actionsTypes";
import createReducer from '../../../redux/createReducer'

export const initialState = {
    contacts: [],
    users: [],
}

const contacts = createReducer(initialState, {
    [STORE_CONTACT]: (state, action) => {
        const contacts = state.contacts
        contacts.push(action.payload.contact)
        return { contacts, users: state.users }
    },
    [STORE_CONTACTS]: (state, action) => ({
        contacts: action.payload.contacts,
        users: state.users
    }),
    [STORE_USERS]: (state, action) => ({
        contacts: state.contacts,
        users: action.payload.users
    }),
    [STORE_USER]: (state, action) => {
        const users = state.users
        users.push(action.payload.user)
        return { users, contacts: state.contacts }
    },
    [REMOVE_USER]: (state, action) => {
        let users = state.users.slice()
        let index = users.findIndex(c => c.id === action.payload.id)
        if (index > -1) users.splice(index, 1)

        return {
            contacts: state.contacts,
            users: users
        }
    },
    [REMOVE_CONTACT]: (state, action) => {
        let contacts = state.contacts.slice()
        let index = contacts.findIndex(c => c.id === action.payload.id)
        if (index > -1) contacts.splice(index, 1)

        console.log(index, action.payload.id)

        return {
            contacts: contacts,
            users: state.users
        }
    },
})

export default contacts