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
            modalDisplay: 'block'
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
                    <h3 style={{ textAlign: 'center', borderBottom: '2px solid #9b4dca', marginBottom: -2 }}>Adicionar contatos</h3>

                    <div className='row' style={{ padding: 10 }}>
                        <div className='column' style={{ marginTop: 20 }}>                        
                            <div className='column float-left' style={{ marginBottom: 5 }}>
                                <div style={{ margin: 0, paddingTop: 5 }} className='column column-50 float-left'>Ricardo Borges</div>
                                <div style={{ margin: 0 }} className='column column-50 float-right'><button style={{ margin: 0 }} className='float-right'>Adicionar</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column' style={{textAlign:'center'}}>
                            <button className='button button-outline' onClick={() => this.setState({ modalDisplay: 'none' })}>Fechar</button>
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