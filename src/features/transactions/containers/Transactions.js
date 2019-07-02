import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import api from '../../../services/Api'
import { storeBalance } from '../actions/index'
//import {  } from '../styles/style.js';
import TransactionForm from '../components/TransactionForm/TransactionForm';

class Transactions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalDisplay: 'block'
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="column">
                        <button className="float-right" onClick={() => this.setState({ modalDisplay: 'block' })}>Transferir</button>
                    </div>
                </div>

                <section className="row">
                    <div className="column">
                        <table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Valor</th>
                                    <th>Para</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01/07/2019</td>
                                    <td>R$ 50.00</td>
                                    <td>Jon Snow</td>
                                    <td>Concluído</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <Modal display={this.state.modalDisplay}>
                    <TransactionForm 
                        closeModal={() => this.setState({ modalDisplay: 'none' })} 
                        processing={false} 
                        warnLimitUse={false}
                        contacts={[{accountId:1, name:'Ricardo Borges'}]}
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