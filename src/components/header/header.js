/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Title, Menu, MenuItem, MenuLink } from "./style";
import api from '../../../src/services/Api'
import { storeUser } from "../../features/user/actions/index"
import * as contactService from '../../features/contacts/services/contacts'
import * as transacionsService from '../../features/transactions/services/transactions'

class Header extends Component {

    componentDidMount() {
        this.props.init()
    }

    render() {
        return (
            <section className="row">
                <div className='column' style={{ padding: 0 }}>
                    <Title className='float-left'>EKKI</Title>
                    <Menu className='float-right'>
                        <MenuItem>
                            <MenuLink>{this.props.user.name}</MenuLink>
                        </MenuItem>
                    </Menu>
                </div>
            </section>
        );
    }
}

const init = async (dispatch) => {
    let user = await api.get('/users/1').then((res) => res.data)
    dispatch(storeUser(user))
    contactService.getContacts(user.id, dispatch)
    contactService.getUsers(user.id, dispatch)
    transacionsService.getTransactions(user.accountId, 1, dispatch)
}


const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    init: () => init(dispatch),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)

Header.propTypes = {
    init: PropTypes.func,
    user: PropTypes.object
}
