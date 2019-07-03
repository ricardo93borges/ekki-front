/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import InputMask from 'react-input-mask';
import { FormTitle } from "./style";

class TransactionsForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accountId: null,
            amount: null
        }
    }

    checkFunds = async () => {
        console.log('checkFunds')
    }

    send = async () => {
        console.log('send')
    }

    render() {
        return (
            <>
                <FormTitle>Transferência</FormTitle>

                {this.props.warnLimitUse ?
                    <div className='row'>
                        <div className='column'>
                            <p style={{ textAlign: 'center' }}>
                                Será utilizado seu limite, pois você não possui
                                saldo sufuciente para esta transação, deseja prosseguir?
                        </p>
                            <button className='button button-outline float-left' onClick={() => this.props.closeModal()}>Cancelar</button>
                            <button className='button float-right' onClick={() => this.send()} >Prosseguir</button>
                        </div>
                    </div>
                    :
                    <div className='row'>
                        <div className='column'>
                            <label htmlFor='select-contacts'>Transferir para</label>
                            <select id='select-contacts'>
                                {this.props.contacts.map(contact => <option key={contact.accountId} value={contact.accountId}>{contact.name}</option>)}
                            </select>

                            <label htmlFor='amount'>Valor</label>
                            <input type="text" placeholder="00,00" id="amount" />

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
    warnLimitUse: PropTypes.bool,
    processing: PropTypes.bool,
    contacts: PropTypes.array,
    closeModal: PropTypes.func,
}

export default TransactionsForm;
