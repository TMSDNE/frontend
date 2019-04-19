import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import './main.css'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        .then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>
                <h2>Anything</h2>
                <form onSubmit={this.login}>
                    <input
                    className='border py-2 px-3' 
                    type='text' 
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange} />
                    <input
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange} />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {login})(Login)