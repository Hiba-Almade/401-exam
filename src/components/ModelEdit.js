import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';

export class ModelEdit extends Component {

    update=(e,id)=>{

        const conflig = {
            method: 'put',
            baseURL: 'http://localhost:8000',
            url: `/edit/${id}?email=${this.props.auth0.user.email}`,
            data: {
              title:e.target.title.value,
              desc: e.target.desc.value,
              usd: e.target.usd.value,
            }
          }
          axios(conflig).then(result => {
            console.log("edit")
          })
    }
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Foem</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit ={(e)=> this.update(e,this.props.id)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>title</Form.Label>
                                <Form.Control type="text" placeholder="" name="title"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>toUsd</Form.Label>
                                <Form.Control type="text" placeholder="" name="usd" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>desc</Form.Label>
                                <Form.Control type="text" placeholder="" nme="desc" />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default ModelEdit

