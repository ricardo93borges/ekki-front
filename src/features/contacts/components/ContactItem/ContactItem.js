import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ContactItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            processing: false
        }
    }

    deleteContact = () => {
        this.setState({ processing: true })
        this.props.deleteContact(this.props.contact)
    }

    render() {
        return (
            <tr>
                <td>{this.props.contact.contact.name}</td>
                <td>
                    <button className={"float-right"} onClick={() => this.deleteContact()}>
                        {this.state.processing ? <FontAwesomeIcon icon="spinner" size="lg" spin /> : 'Remover'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default ContactItem

ContactItem.propTypes = {
    contact: PropTypes.object,
    deleteContact: PropTypes.func
}