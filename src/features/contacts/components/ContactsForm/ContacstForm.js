/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { FormTitle, ContactRow, ContactItemWrapper, ContactItem, ContactName, ContactButtonWrapper } from "./style";
import AddButton from './AddButton'

class ContactsForm extends Component {

    render() {
        return (
            <>
                <FormTitle>Adicionar contatos</FormTitle>

                {this.props.users.map(user => {
                    return (<ContactRow key={user.id} className='row'>
                        <ContactItemWrapper className='column'>
                            <ContactItem className='column float-left'>
                                <ContactName className='column column-50 float-left'>{user.name}</ContactName>
                                <ContactButtonWrapper className='column column-50 float-right'>
                                    <AddButton id={user.id} add={(id) => this.props.addContact(id)} />
                                </ContactButtonWrapper>
                            </ContactItem>
                        </ContactItemWrapper>
                    </ContactRow>)
                })}

                <div className='row'>
                    <div className='column' style={{ textAlign: 'center' }}>
                        <button className='button button-outline' onClick={() => this.props.closeModal()}>Fechar</button>
                    </div>
                </div>

            </>
        );
    }
}

ContactsForm.propTypes = {
    users: PropTypes.array,
    closeModal: PropTypes.func,
    add: PropTypes.func,
}

export default ContactsForm;
