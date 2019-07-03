import api from '../../../services/Api'
import * as actions from "../actions/index"

export const getContacts = async (userId, dispatch) => {
    api.get(`/contacts/${userId}/1`).then(res => {
        dispatch(actions.storeContacts(res.data.contacts))
    })
}

export const getUsers = async (userId, dispatch) => {
    api.get(`/contacts/non-contacts/${userId}`).then(res => {
        dispatch(actions.storeUsers(res.data))
    })
}

export const addContact = async (userId, contactId, dispatch) => {
    api.post(`/contacts`, { userId, contactId }).then(res => {
        dispatch(actions.storeContact(res.data))
        dispatch(actions.removeUser(contactId))
    })
}

export const deleteContact = async (contact, dispatch) => {
    api.delete(`/contacts/${contact.id}`).then(res => {
        dispatch(actions.removeContact(contact.id))
        dispatch(actions.storeUser(contact.contact))
    })
}