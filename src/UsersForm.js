import './App.css';
import React, { Component } from 'react'

export class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: ""
    }
  } 
  
  handlechange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state)
    this.props.update(this.state)
  }
      
  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="exampleInputName">Name</label>
          <input type="text" className="form-control" id="exampleInputText" placeholder="Enter Name" name='name' onChange={this.handlechange} value={this.state.name} />
        
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={this.handlechange} value={this.state.email}/>
          </div>
        
          <div className="form-group">
            <label htmlFor="exampleInputGen">Gen</label>
            <input type="text" className="form-control" id="exampleInputText" placeholder="Enter Gen" name='gen' onChange={this.handlechange} value={this.state.gen}/>
          </div>
      
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )  
  }
}






































{/* <form onSubmit={this.handleSubmit}>
                    <label> Name:
                        <input type='text' onChange={this.handlechange} value={this.state.name} name='name' id='name' />
                    </label>
                    <br/>
                    <label> Email:
                        <input type='email' onChange={this.handlechange} value={this.state.email} name='email' id='email' />
                    </label>
                    <br/>
                    <label> gen:
                        <input type='number' onChange={this.handlechange} value={this.state.password} name='gen' />
                    </label>
                    <button>Submit</button>
                </form>
{} */}































// <Container>
//       <Row>
//       <Form>
// <Form.Group className="mb-3" controlId="formBasicEmail">
//   <Form.Label>Email address</Form.Label>
//   <Form.Control type="email" placeholder="Enter email" />
//   <Form.Text className="text-muted">
//     We'll never share your email with anyone else.
//   </Form.Text>
// </Form.Group>

// <Form.Group className="mb-3" controlId="formBasicPassword">
//   <Form.Label>Password</Form.Label>
//   <Form.Control type="password" placeholder="Password" />
// </Form.Group>
// <Form.Group className="mb-3" controlId="formBasicCheckbox">
//   <Form.Check type="checkbox" label="Check me out" />
// </Form.Group>
// <Button variant="primary" type="submit">
//   Submit
// </Button>
// </Form>
//       </Row>
//     </Container>


// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



































