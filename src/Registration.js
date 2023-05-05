import React, { Component } from 'react'
export default class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ''
        }
    };

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.updateContacts(users)
        console.log(this.state);
    };


    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label> Name:
                        <input type='text' onChange={this.handleName} value={this.state.name} name='name' id='name' />
                    </label>
                    <br/>
                    <label> Email:
                        <input type='email' onChange={this.handleEmail} value={this.state.email} name='email' id='email' />
                    </label>
                    <br/>
                    <label> Password:
                        <input type='password' onChange={this.handlePassword} value={this.state.password} name='password' id='password' />
                    </label>
                    <button>Submit</button>
                </form>
{}
            </div>
        )
    }
}
