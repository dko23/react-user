import React, { Component } from 'react'

export class Person extends Component {
  render() {
    return (
        <div>
    
            <div class="card" style={{width: "18rem"}} >
  <div class="card-body">
      <p>{this.props.you.name}</p>
      <p>{this.props.you.email}</p> 
      <p>{this.props.you.gen}</p>
            <div className="d-flex justify-content-between">
            <button type="button" class="btn btn-primary">Edit</button>
      <button type="button" class="btn btn-primary">Delete</button>
     </div>
  </div>
</div>
     



      </div>
    )
  }
}

export default Person


