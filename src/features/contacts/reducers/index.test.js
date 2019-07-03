import { expect } from 'chai'
import { STORE_CONTACT, STORE_CONTACTS, STORE_USERS, STORE_USER, REMOVE_USER, REMOVE_CONTACT } from "../actions/actionsTypes";
import contacts, { initialState } from './index'

describe('Contacts reducer tests', () => {

    const user = {
        accountId: 0,
        cpf: "",
        createdAt: "",
        email: "",
        id: 0,
        name: "",
        password: "",
        phone: "",
        updatedAt: "",
    }

    const contact = {
        contact: {
            accountId: 0,
            cpf: "",
            createdAt: "",
            email: "",
            id: 0,
            name: "",
            password: "",
            phone: "",
            updatedAt: "",
        },
        contactId: 0,
        createdAt: "",
        id: 0,
        updatedAt: "",
        userId: 0,
    }

    it('Reducer should be a function', () => {
        expect(contacts).to.be.a('function')
    })

    it('should return inital state when state before is undefined', () => {
        const before = undefined
        const action = { type: 'UNKNOWN' }
        const after = initialState
        expect(contacts(before, action)).to.be.deep.equal(after)
    })

    it('should store a contact', () => {
        const payload = { contact }

        const before = { ...initialState, contacts: [contact] }
        const action = { type: STORE_CONTACT, payload }
        const state = contacts(before, action)
        const after = { ...initialState, contacts: [contact, contact] }

        expect(state).to.be.deep.equal(after)
    })

    it('should store contacts', () => {
        const payload = { contacts: [contact, contact] }

        const before = initialState
        const action = { type: STORE_CONTACTS, payload }
        const state = contacts(before, action)
        const after = { ...initialState, contacts: [contact, contact] }

        expect(state).to.be.deep.equal(after)
    })

    it('should remove a contact', () => {
        const contact1 = { ...contact, id: 0 }
        const contact2 = { ...contact, id: 1 }
        const contactsArr = [contact1, contact2]
        const payload = { id: 1 }

        const before = { ...initialState, contacts: contactsArr }
        const action = { type: REMOVE_CONTACT, payload }
        const state = contacts(before, action)
        const after = { ...initialState, contacts: [contact1] }

        expect(state).to.be.deep.equal(after)
    })

    it('should store users', () => {
        const payload = { users: [user, user] }

        const before = initialState
        const action = { type: STORE_USERS, payload }
        const state = contacts(before, action)
        const after = { ...initialState, users: [user, user] }

        expect(state).to.be.deep.equal(after)
    })

    it('should store a user', () => {
        const payload = { user }

        const before = { ...initialState, users: [user] }
        const action = { type: STORE_USER, payload }
        const state = contacts(before, action)
        const after = { ...initialState, users: [user, user] }

        expect(state).to.be.deep.equal(after)
    })

    it('should remove a user', () => {
        const user1 = { ...user, id: 0 }
        const user2 = { ...user, id: 1 }
        const users = [user1, user2]
        const payload = { id: 1 }

        const before = { ...initialState, users }
        const action = { type: REMOVE_USER, payload }
        const state = contacts(before, action)
        const after = { ...initialState, users: [user1] }

        expect(state).to.be.deep.equal(after)
    })
})