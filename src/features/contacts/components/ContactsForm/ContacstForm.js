/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import InputMask from 'react-input-mask';
import { FormTitle, ContactRow, ContactItemWrapper, ContactItem, ContactName, ContactButtonWrapper} from "./style";

class ContactsForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contactId:null,
        }
    }
    
    add = async () => {
        console.log('send')
    }

    render() {
        return (
            <>
                <FormTitle>Adicionar contatos</FormTitle>

                { this.props.users.map( contact => {            
                    return (<ContactRow className='row'>
                        <ContactItemWrapper className='column'>
                            <ContactItem className='column float-left'>
                                <ContactName className='column column-50 float-left'>{contact.name}</ContactName>
                                <ContactButtonWrapper className='column column-50 float-right'>
                                    <button 
                                        className='float-right' 
                                        onClick={() => this.props.add(contact.id)}>
                                            Adicionar
                                    </button>
                                </ContactButtonWrapper>
                            </ContactItem>
                        </ContactItemWrapper>
                    </ContactRow>)
                })}

                <div className='row'>
                    <div className='column' style={{textAlign:'center'}}>
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
