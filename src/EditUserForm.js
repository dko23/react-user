import React, { Component } from 'react'

export class EditUserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: this.props.you.name,
          email: this.props.you.email,
          gen: this.props.you.gen,
          id: this.props.you.id,
        }
      } 

      handlechange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted", this.state)
        this.props.editUser(this.state.id, this.state)
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

export default EditUserForm