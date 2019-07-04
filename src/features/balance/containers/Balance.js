import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { StyledBalance, Content, Digits } from '../styles/style.js';

class Balance extends Component {

    renderBalance = () => {
        if (this.props.user.account) {
            const [balance, digits] = this.props.user.account.balance.split('.')
            return (
                <Content className="column">
                    <Digits fontSize='1.5em'>R$</Digits>
                    <Digits fontSize='5em'>{balance},</Digits>
                    <Digits fontSize='2em'>{digits}</Digits>
                    <div className='row'>
                        <div className='column'>
                            Limite: R$ {this.props.user.account.limit}
                        </div>
                    </div>
                </Content >
            )
        }
    }

    render() {
        return (
            <>
                <StyledBalance className='row'>
                    {this.renderBalance()}
                </StyledBalance>
            </>
        )
    }
}

const mapStateToProps = state => ({
    balance: state.balance,
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Balance)

Balance.propTypes = {
    balance: PropTypes.object,
    user: PropTypes.object
}