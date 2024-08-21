import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn me-3' onClick={handleShow}>
                <i className='fa-solid fa-pen-to-square fa-2xl'></i>
            </button>

            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Row>
                            <Col>
                                <img src="data:image/png;base64,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" alt="" />
                            </Col>
                            <Col>
                                <div>
                                    <FloatingLabel controlId="titleinp" label="Title" className='mb-3'>
                                        <Form.Control type="text" placeholder="Project Title" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="overviewinp" label="Overview" className='mb-2'>
                                        <Form.Control type="text" placeholder="Brief about Project" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="langinp" label="Languages" className='mb-2'>
                                        <Form.Control type="text" placeholder="Languages used" />
                                    </FloatingLabel>

                                </div>
                            </Col>
                            <FloatingLabel controlId="githubinp" label="Git URL" className='mb-2'>
                                <Form.Control type="text" placeholder="Git URL" />
                            </FloatingLabel>
                            <FloatingLabel controlId="demoinp" label="Demo URL" className='mb-2'>
                                <Form.Control type="text" placeholder="Demo URL" />
                            </FloatingLabel>

                        </Row>
                    </div>

                </Modal.Body >
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default Edit