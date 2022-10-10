import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

function Contacts() {
    const { contacts } = useContacts();
    return (
        <ListGroup variant='flush' >
            {
                contacts ? contacts.map(contact => (
                    <ListGroup.Item key={contact.id}>
                        {contact.name}
                    </ListGroup.Item>
                )) : null}
        </ListGroup>
    )
}

export default Contacts