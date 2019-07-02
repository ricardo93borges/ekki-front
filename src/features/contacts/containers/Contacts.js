import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import api from '../../../services/Api'
import { storeBalance } from '../actions/index'
//import {  } from '../styles/style.js';
import ContactsForm from "../components/ContactsForm/ContacstForm";


class Transactions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalDisplay: 'none'
        }
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
                        contacts={[{id:1, name:'Ricardo Borges'}]}
                    />
                </Modal>
            </>
        )
    }
}

const getBalance = async () => {

}

const mapStateToProps = state => ({
    balance: state.balance,
})

const mapDispatchToProps = dispatch => ({
    getBalance: (userId) => getBalance(userId, dispatch),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Transactions)

Transactions.propTypes = {
    getBalance: PropTypes.func,
    balance: PropTypes.object
}