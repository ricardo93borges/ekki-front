import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
import Modal from "../../../components/modal/modal";
import api from '../../../services/Api'
import { storeBalance } from '../actions/index'
//import {  } from '../styles/style.js';

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
                    <h3 style={{ textAlign: 'center', borderBottom: '2px solid #9b4dca', marginBottom: -2 }}>Transferência</h3>

                    <div className='row'>
                        <div className='column' style={{ backgroundColor: '#9b4dca', color: '#FFF', textAlign: 'center', padding: '15px', marginBottom: '15px' }}>
                            Processando... aguarde
                        </div>
                    </div>

                    <div className='row'>
                        <div className='column' style={{ marginTop: 20 }}>
                            <label htmlFor='select-contacts'>Transferir para</label>
                            <select id='select-contacts'>
                                <option>Ricardo</option>
                                <option>Borges</option>
                                <option>Silva</option>
                            </select>
                            <label htmlFor='amount'>Valor</label>
                            <input type="text" placeholder="00,00" id="amount" />

                            <button className='button button-outline float-left' onClick={() => this.setState({ modalDisplay: 'none' })}>Cancelar</button>
                            <button className='button float-right' >Transferir</button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='column' style={{ marginTop: 20 }}>
                            <p style={{ textAlign: 'center' }}>
                                Será utilizado seu limite, pois você não possui 
                                saldo sufuciente para esta transação, deseja prosseguir?
                            </p>
                            <button className='button button-outline float-left' onClick={() => this.setState({ modalDisplay: 'none' })}>Cancelar</button>
                        <button className='button float-right' >Prosseguir</button>
                        </div>
                        
                    </div>

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