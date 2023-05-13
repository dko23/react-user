import React, { Component, useId } from 'react';
import './App.css';
import User from './Users';
import { UsersForm } from './UsersForm';
import { v4 as uuidv4 } from 'uuid';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        { id: uuidv4(), name: "Goku", email: 'danielowusu326@hotmail.co.uk', gen: 24 },
        { id: uuidv4(), name: "Vegeta", email: 'james24@hotmail.co.uk', gen: 24 },
        { id: uuidv4(), name: "Piccolo", email: 'james24@hotmail.co.uk', gen: 24 },
        
      ]
    };
  }

  updateContacts = (contact) => {
    this.setState({ details: [...this.state.details, contact] });
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
              <User array={this.state.details} delete={this.delete} editUser={this.editUser} />
              
  
</div> 
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;


















////UUID yarn add uuid








