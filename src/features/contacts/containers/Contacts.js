import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import * as services from '../services/contacts'
import ContactsForm from "../components/ContactsForm/ContacstForm";
import ContactItem from "../components/ContactItem/ContactItem";


class Contacts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalDisplay: 'none'
        }
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

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    users: state.contacts.users,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    addContact: (userId, contactId) => services.addContact(userId, contactId, dispatch),
    deleteContact: (contact) => services.deleteContact(contact, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Contacts)

Contacts.propTypes = {
    addContact: PropTypes.func,
    contacts: PropTypes.array,
    users: PropTypes.array,
}

Contacts.defaultProps = {
    contacts: [],
    users: [],
}