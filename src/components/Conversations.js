import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';


function Conversations() {
    const { conversations, selectConversationIndex } = useConversations();
    console.log(conversations);
    return (
        <ListGroup variant='flush' >
            {
                conversations ? conversations.map((conversation, index) => (
                    <ListGroup.Item
                        key={index}
                        action
                        onClick={() => selectConversationIndex(index)}
                    >
                        {conversation.recipients.map(r => r.name).join(', ')}
                    </ListGroup.Item>
                )) : null}
        </ListGroup>
    )
}

export default Conversations