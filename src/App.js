import React, { Component } from 'react';
import './App.css';
import User from './Users';
import { UsersForm } from './UsersForm';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        { id: 1, name: "Goku", email: 'danielowusu326@hotmail.co.uk', gen: 24 },
        { id: 2, name: "Vegeta", email: 'james24@hotmail.co.uk', gen: 24 },
        { id: 3, name: "Piccolo", email: 'james24@hotmail.co.uk', gen: 24 },
        
      ]
    };
  }

  updateContacts = (contact) => {
    this.setState({ details: [...this.state.details, contact] });
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
              <User array={this.state.details} />
              
  
</div> 
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;


















////UUID yarn add uuid








