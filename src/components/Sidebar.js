import React, { useState } from 'react'
import { Button, Modal, Nav, Tab } from 'react-bootstrap'
import Contacts from './Contacts'
import Conversations from './Conversations'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'
import { useNavigation } from 'react-router-dom'
const CONVERSATIONS_KEY = "conversations"
const CONTACTS_KEY = "contacts"

function Sidebar({ id }) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false);
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    function closeModal() {
        setModalOpen(false)
    }
    const handleLogout = () => {
        if (window.confirm("Do you really want to Logout?")) {
            try {
                localStorage.removeItem('chat-app-conversations');
                localStorage.removeItem('chat-app-id');
                localStorage.removeItem('chat-app-contacts');
                // navigate('/')
                window.location.href = window.location.href;
                // window.location.href = window.location.href;

            } catch (error) {
                console.log(error);
            }
        }

    }
    return (
        <div style={{ width: '250px' }} className='d-flex flex-column '>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='border border-dark overflow-auto flex-grow-1' >
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border-top border border-dark small'>
                    YourId:<span className='text-muted'>{id}</span>
                </div>
                <Button onClick={() => setModalOpen(true)} className='rounded-0 border border-dark'>
                    New {conversationsOpen ? "Coversation" : "Contact"}
                </Button>
                <Button onClick={() => handleLogout()} className='m-1 mx-5 rounded-0 border border-dark btn btn-outline-danger font-weight-bold'>Logout</Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ? <NewConversationModal closeModal={closeModal} /> : <NewContactModal closeModal={closeModal} />}
            </Modal>
        </div>
    )
}

export default Sidebar