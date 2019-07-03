/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CurrencyInput from 'react-currency-input';
import { FormTitle } from "./style";

class TransactionsForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accountId: 0,
            amount: 0,
            warnLimitUse: false,
            invalid: false,
            limitUsage: 0,
            insuficientFunds: false,
            processing: false
        }
    }

    checkFunds = async () => {

        if (this.state.accountId === null) {
            this.setState({ invalid: true })
            return
        } else {
            this.setState({ invalid: false })
        }

        this.setState({ processing: true })
        const funds = await this.props.checkFunds(this.state.amount)
        this.setState({ processing: false })

        if ((Number(funds.balance) + Number(funds.limit)) < this.state.amount) {
            this.setState({ insuficientFunds: true })
        } else if (funds.limitUsage > 0) {
            this.setState({ warnLimitUse: true, limitUsage: funds.limitUsage })
        } else {
            this.send(this.state.accountId, this.state.amount)
        }
    }

    send = async (accountId, amount) => {
        this.setState({ processing: true })
        await this.props.addTransaction(accountId, amount)
        this.closeModal()
    }

    handleAmountChange = (event, maskedvalue, amount) => {
        this.setState({ amount })
    }

    closeModal = () => {
        this.setState({
            accountId: 0,
            amount: 0,
            warnLimitUse: false,
            invalid: false,
            limitUsage: 0,
            insuficientFunds: false,
            processing: false
        })
        this.props.closeModal()
    }

    render() {
        return (
            <>
                <FormTitle>Transferência</FormTitle>

                {this.state.invalid && <p style={{ color: '#F00', textAlign: 'center', fontSize: '0.8em' }}>SELECIONE UM CONTATO</p>}

                {this.state.warnLimitUse &&
                    <div className='row'>
                        <div className='column'>
                            <p style={{ textAlign: 'center' }}>
                                Será utilizado R$ {this.state.limitUsage} do seu limite, pois você não possui
                                saldo sufuciente para esta transação, deseja prosseguir?
                        </p>
                            <button className='button button-outline float-left' onClick={() => this.closeModal()}>Cancelar</button>
                            <button
                                className='button float-right'
                                onClick={() => this.send(this.state.accountId, this.state.amount)} >
                                {this.state.processing ? <FontAwesomeIcon icon="spinner" size="lg" spin /> : 'Prosseguir'}
                            </button>
                        </div>
                    </div>
                }

                {this.state.insuficientFunds &&
                    <div className='row'>
                        <div className='column'>
                            <p style={{ textAlign: 'center' }}>
                                Você não possui saldo sucificiente para realizar esta transação.
                            </p>
                            <button className='button button-outline float-left' onClick={() => this.closeModal()}>Cancelar</button>
                        </div>
                    </div>
                }

                {(!this.state.warnLimitUse && !this.state.insuficientFunds) &&
                    <div className='row'>
                        <div className='column'>
                            <label htmlFor='select-contacts'>Transferir para </label>

                            <select
                                value={this.state.accountId}
                                id='select-contacts'
                                onChange={e => this.setState({ accountId: e.target.value })}>
                                <option disabled key={0} value={0}>
                                    Selecione um contato
                                </option>
                                {this.props.contacts.map(contact => {
                                    return (
                                        <option
                                            key={contact.id}
                                            value={contact.contact.accountId}>
                                            {contact.contact.name}
                                        </option>
                                    )
                                })}
                            </select>

                            <label htmlFor='amount'>Valor</label>

                            <CurrencyInput
                                value={this.state.amount}
                                decimalSeparator="."
                                thousandSeparator=","
                                precision="2"
                                prefix="R$ "
                                maxLength='17'
                                placeholder='00,00'
                                onChangeEvent={(event, maskedvalue, floatvalue) => this.handleAmountChange(event, maskedvalue, floatvalue)}
                            />

                            <button className='button button-outline float-left' onClick={() => this.props.closeModal()}>Cancelar</button>
                            <button className='button float-right' onClick={() => this.checkFunds()}>
                                {this.props.processing ? <FontAwesomeIcon icon="spinner" size="lg" spin /> : 'Transferir'}
                            </button>
                        </div>
                    </div>
                }
            </>
        );
    }
}

TransactionsForm.propTypes = {
    processing: PropTypes.bool,
    contacts: PropTypes.array,
    closeModal: PropTypes.func,
    checkFunds: PropTypes.func,
    addTransaction: PropTypes.func,
}

export default TransactionsForm;
