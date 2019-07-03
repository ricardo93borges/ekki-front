import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import TransactionForm from '../components/TransactionForm/TransactionForm';
import * as services from '../services/transactions'

class Transactions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalDisplay: 'none'
        }
    }

    addTransaction = (accountId, amount) => {
        this.props.addTransaction(this.props.user.accountId, accountId, amount)
    }

    checkFunds = (amount) => {
        return services.checkFunds(this.props.user.accountId, amount)
    }

    formatDate = (date) => {
        let d = new Date(date)
        return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
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
                                {this.props.transactions.map(transaction => {
                                    return (
                                        <tr key={transaction.id}>
                                            <td>{this.formatDate(transaction.createdAt)}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{transaction.to_account.account.name}</td>
                                            <td>{transaction.status.name}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </section>

                <Modal display={this.state.modalDisplay}>
                    <TransactionForm
                        closeModal={() => this.setState({ modalDisplay: 'none' })}
                        warnLimitUse={false}
                        contacts={this.props.contacts}
                        addTransaction={this.addTransaction}
                        checkFunds={this.checkFunds}
                    />
                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user,
        contacts: state.contacts.contacts,
        transactions: state.transactions.transactions,
    }
}

const mapDispatchToProps = dispatch => ({
    getTransactions: (userId) => services.getTransactions(userId, dispatch),
    addTransaction: (fromAccountId, toAccountId, amount) => services.addTransaction(fromAccountId, toAccountId, amount, dispatch),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Transactions)

Transactions.propTypes = {
    getTransactions: PropTypes.func,
    addTransaction: PropTypes.func,
    user: PropTypes.object,
    contacts: PropTypes.array
}