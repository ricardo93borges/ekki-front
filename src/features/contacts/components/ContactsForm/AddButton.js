import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            processing: false
        }
    }

    add = () => {
        this.setState({ processing: true })
        this.props.add(this.props.id)
    }

    render() {
        return (
            <button className='float-right' onClick={() => this.add()}>
                {this.state.processing ? <FontAwesomeIcon icon="spinner" size="lg" spin /> : 'Adicionar'}
            </button>
        )
    }
}

export default AddButton

AddButton.propTypes = {
    id: PropTypes.number,
    add: PropTypes.func
}