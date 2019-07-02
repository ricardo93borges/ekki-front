import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import api from '../../../services/Api'
import { storeContacts, storeUsers } from '../actions/index'
//import {  } from '../styles/style.js';
import ContactsForm from "../components/ContactsForm/ContacstForm";


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
                                <tr>
                                    <td>Jon Snow</td>
                                    <td>
                                        <button className={"float-right"}>
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <Modal display={this.state.modalDisplay}>
                    <ContactsForm
                        closeModal={() => this.setState({ modalDisplay: 'none' })}
                        users={this.props.users}
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

const getUsers = async (dispatch) => {
    api.get(`/users`).then( res => {
        dispatch(storeUsers(res.data))
    })
}

const mapStateToProps = state => {
    console.log(state)
    return {contacts: state.contacts.contacts,
    users: state.contacts.users,
    user: state.user}
}

const mapDispatchToProps = dispatch => ({
    getContacts: (userId) => getContacts(userId, dispatch),
    getUsers: () => getUsers(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Contacts)

Contacts.propTypes = {
    getContacts: PropTypes.func,
    contacts: PropTypes.array,
    users: PropTypes.array,
}

Contacts.defaultProps = {
    contacts:[],
    users:[],
}