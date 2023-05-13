import React, { Component } from 'react';
import Person from './Person';

class User extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
          {this.props.array.map((contact, index) => {
          return (
            <Person you={contact} delete={this.props.delete} editUser={this.props.editUser} />
          );
        })}
          </div>
        </div>
      </div>
    );
  }
}

export default User;
