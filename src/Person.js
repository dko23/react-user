import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';




class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleDelete = () => {
    this.props.delete(this.props.you.id);
  };

  render() {
    return (
      <div>
    {/* <button onClick={this.handleShow}>Show Modal</button> */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body><EditUserForm you={this.props.you} editUser={this.props.editUser} /></Modal.Body>

        </Modal>
        
        <div class="card" style={{ width: '18rem' }}>
          <div class="card-body">
            <p>{this.props.you.name}</p>
            <p>{this.props.you.email}</p>
            <p>{this.props.you.gen}</p>
            {/* <p>{this.props.you.id}</p> */}

            <div className="d-flex justify-content-between">
              <button type="button" class="btn btn-primary" onClick={this.handleShow}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;

