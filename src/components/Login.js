import React, { useContext, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

function Login({ onIdSubmit }) {
    const idRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        onIdSubmit(idRef.current.value)
    }
    const createNewId = () => {
        onIdSubmit(uuidV4());
    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter your Id</Form.Label>
                    <Form.Control type='text' placeholder='John Doe' ref={idRef} required />
                </Form.Group>
                <div className='mt-2 gap-3'>
                    <Button type="submit" className="mr-2" >Login</Button>
                    <Button onClick={createNewId} variant="secondary" >Create new Id</Button>
                </div>
            </Form>
        </Container>
    )
}

export default Login