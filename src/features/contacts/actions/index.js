import { STORE_CONTACT, STORE_CONTACTS } from "../actions/actionsTypes";

export const storeContact = (contact) => ({
    type: STORE_CONTACT,
    payload: {contact}
})

export const storeContacts = (contacts) => ({
    type: STORE_CONTACTS,
    payload: {contacts}
})