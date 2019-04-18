import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' 
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange} />
                    <input
                    type='password'
                    name='passowrd'
                    value={this.state.credentials.password}
                    onChange={this.handleChange} />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}