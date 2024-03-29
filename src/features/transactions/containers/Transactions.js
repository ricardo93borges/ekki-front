import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import TransactionForm from '../components/TransactionForm/TransactionForm';
import * as services from '../services/transactions'
import Paginator from '../../../components/paginator/paginator.js';

class Transactions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalDisplay: 'none'
        }
    }

    addTransaction = async (accountId, amount) => {
        await this.props.addTransaction(this.props.user.accountId, accountId, amount)
    }

    checkFunds = (amount) => {
        return services.checkFunds(this.props.user.accountId, amount)
    }

    formatDate = (date) => {
        let d = new Date(date)
        return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
    }

    getTransactions = async (page) => {
        if(this.props.total > 10){
            const transactions = await this.props.getTransactions(this.props.user.accountId, page)
            return transactions.transactions.length
        }else{
            return this.props.transactions.total
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
                                    <th style={{ textAlign: 'center' }}>Para</th>
                                    <th>Valor</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.transactions.map(transaction => {
                                    return (
                                        <tr key={transaction.id}>
                                            <td style={{ textAlign: 'center' }}>
                                                <p style={{ marginBottom: 0 }}>{transaction.to_account.account.name}</p>
                                                <small>{this.formatDate(transaction.createdAt)}</small>
                                            </td>
                                            <td>R$ {transaction.amount}</td>
                                            <td>{transaction.status.name}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </section>

                <Paginator fetch={this.getTransactions} perPage={10} />

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

const mapStateToProps = state => ({
    user: state.user,
    contacts: state.contacts.contacts,
    transactions: state.transactions.transactions,
    total: state.transactions.total,
})

const mapDispatchToProps = dispatch => ({
    getTransactions: (userId, page) => services.getTransactions(userId, page, dispatch),
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
    contacts: PropTypes.array,
    total: PropTypes.number,
}