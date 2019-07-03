import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import api from '../../../services/Api'
import { storeContacts, storeContact, storeUsers, storeUser, removeUser, removeContact } from '../actions/index'
//import {  } from '../styles/style.js';
import ContactsForm from "../components/ContactsForm/ContacstForm";
import ContactItem from "../components/ContactItem/ContactItem";


class Contacts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalDisplay: 'none'
        }
    }

    componentDidMount(){
        if(this.props.contacts.length === 0)
            this.props.getContacts(this.props.user.id)
        
        if(this.props.users.length === 0)
            this.props.getUsers(this.props.user.id)
    }

    addContact = (contactId) => {
        this.props.addContact(this.props.user.id, contactId)
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="column">
                        <button className="float-right" onClick={() => this.setState({ modalDisplay: 'block' })}>Adicionar contato</button>
                    </div>
                </div>
                <section className="row contacts">
                    <div className="column">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.props.contacts.map(contact => {
                                        return (
                                            <ContactItem 
                                                key={contact.id}
                                                contact={contact}
                                                deleteContact={(contact) => this.props.deleteContact(contact)}
                                            />
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </section>

                <Modal display={this.state.modalDisplay}>
                    <ContactsForm
                        closeModal={() => this.setState({ modalDisplay: 'none' })}
                        users={this.props.users}
                        addContact={this.addContact}
                    />
                </Modal>
            </>
        )
    }
}

const getContacts = async (userId, dispatch) => {
    api.get(`/contacts/${userId}/1`).then( res => {
        dispatch(storeContacts(res.data.contacts))
    })
}

const getUsers = async (userId, dispatch) => {
    api.get(`/contacts/non-contacts/${userId}`).then( res => {
        dispatch(storeUsers(res.data))
    })
}

const addContact = async (userId, contactId, dispatch) => {
    api.post(`/contacts`, {userId, contactId}).then( res => {
        dispatch(storeContact(res.data))
        dispatch(removeUser(contactId))
    })
}

const deleteContact = async (contact, dispatch) => {
    console.log(contact)
    api.delete(`/contacts/${contact.id}`).then( res => {
        dispatch(removeContact(contact.id))
        dispatch(storeUser(contact.contact))
    })
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    users: state.contacts.users,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    getContacts: (userId) => getContacts(userId, dispatch),
    getUsers: (userId) => getUsers(userId, dispatch),
    addContact: (userId, contactId) => addContact(userId, contactId, dispatch),
    deleteContact: (contact) => deleteContact(contact, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Contacts)

Contacts.propTypes = {
    getContacts: PropTypes.func,
    getUsers: PropTypes.func,
    addContact: PropTypes.func,
    contacts: PropTypes.array,
    users: PropTypes.array,
}

Contacts.defaultProps = {
    contacts:[],
    users:[],
}