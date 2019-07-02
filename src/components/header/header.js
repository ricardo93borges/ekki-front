/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Title, Menu, MenuItem, MenuLink } from "./style";
import { storeUser } from '../../features/user/actions/index'
import api from '../../services/Api'

class Header extends Component {

    componentDidMount(){
        this.props.getUser()
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

const getUser = async (dispatch) => {
    api.get('/users/1').then( res => dispatch(storeUser(res.data)))
}

const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    getUser: () => getUser(dispatch),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)

Header.propTypes = {
    getUser: PropTypes.func,
    user: PropTypes.object
}
