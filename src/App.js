import React, { Component, useId } from 'react';
import './App.css';
import User from './Users';
import { UsersForm } from './UsersForm';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addUser } from './features/userSlice';




class App extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     details: [
  //       { id: uuidv4(), name: "Goku", email: 'danielowusu326@hotmail.co.uk', gen: 24 },
  //       { id: uuidv4(), name: "Vegeta", email: 'james24@hotmail.co.uk', gen: 24 },
  //       { id: uuidv4(), name: "Piccolo", email: 'james24@hotmail.co.uk', gen: 24 },
        
  //     ]
  //   };
  // }

  // updateContacts = (contact) => {
  //   this.setState({ details: [...this.state.details, contact] });
  // }
/////////////////Above is old
updateContacts = (contact) => {
  this.props.addUser(contact);
}






  delete= (userid) => { 
    let deletePersons = this.state.details.filter((user) => user.id !== userid)
    this.setState({ details: deletePersons });

  }

  editUser = (id, updatedUser) => {
    this.setState({details:this.state.details.map(user=>user.id === id ? updatedUser:user)})
  }


  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'> 
          <div class="col-lg-5 sales">
<UsersForm update={this.updateContacts} />
</div>
< div class="col-lg-7 part">  
<User array={this.props.details} delete={this.delete} editUser={this.editUser} />

              
  
</div> 
          
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    details: state.user.details,
  };
};

const mapDispatchToProps = {
  addUser: addUser,
  // Add other action creators here if needed
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


















////UUID yarn add uuid








