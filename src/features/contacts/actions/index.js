import { STORE_CONTACT, STORE_CONTACTS, STORE_USERS, STORE_USER, REMOVE_USER, REMOVE_CONTACT } from "../actions/actionsTypes";

export const storeContact = (contact) => ({
    type: STORE_CONTACT,
    payload: { contact }
})

export const storeContacts = (contacts) => ({
    type: STORE_CONTACTS,
    payload: { contacts }
})

export const removeContact = (id) => ({
    type: REMOVE_CONTACT,
    payload: { id }
})

export const storeUsers = (users) => ({
    type: STORE_USERS,
    payload: { users }
})

export const storeUser = (user) => ({
    type: STORE_USER,
    payload: { user }
})

export const removeUser = (id) => ({
    type: REMOVE_USER,
    payload: { id }
})