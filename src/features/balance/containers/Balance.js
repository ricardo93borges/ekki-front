import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../styles/style.js'
//import api from '../../../services/Api'
//import { storeBalance } from '../actions/index'
import { StyledBalance, Content, Digits } from '../styles/style.js';

class Balance extends Component {

    render() {
        return (
            <>
                <StyledBalance className='row'>
                    <Content className="column">
                        <Digits fontSize='1.5em'>R$</Digits>
                        <Digits fontSize='5em'>1000,</Digits>
                        <Digits fontSize='2em'>00</Digits>
                        <div className='row'>
                            <div className='column'>
                                Limite: R$ 500
                            </div>
                        </div>
                    </Content>

                </StyledBalance>
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
)(Balance)

Balance.propTypes = {
    getBalance: PropTypes.func,
    balance: PropTypes.object
}