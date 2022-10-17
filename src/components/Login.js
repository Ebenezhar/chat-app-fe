import React, { useRef } from 'react'
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
        <Container className='align-items-center d-flex flex-column justify-content-md-center' style={{ height: '100vh' }}>
            <h1>Chat Application</h1>
            <Form className='border border-secondary p-5' onSubmit={handleSubmit} >
                <Form.Group className='col'>
                    <Form.Label>Enter your Id</Form.Label>
                    <Form.Control type='text' placeholder='John Doe' ref={idRef} required />
                </Form.Group>
                <div className='mt-3 d-flex flex-column'>
                    <Button type="submit" className="mb-2" >Login</Button>
                    <Button className="ml-2" onClick={createNewId} variant="secondary" >Create new Id</Button>
                </div>
            </Form>
        </Container>
    )
}

export default Login
