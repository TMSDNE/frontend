import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import {signup} from '../actions';
import '../styles/main.css'

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

    handleSignUp = e => {
        e.preventDefault();
        this.props.signup(this.state.credentials)
        .then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="flex items-center h-screen w-full bg-shark">
                <div className="w-full bg-white rounded shadow-lg p-8 m-4">
                    <h1 className="block w-full text-center text-grey-darkest mb-6">Log In</h1>
                    <form onSubmit={this.login}>
                        <div className='flex flex-col mb-4'>
                            <label 
                            className='mb-2 uppercase font-bold text-lg text-grey-darkest' 
                            hmtlfor='username'>Username</label>
                            <input
                            className='border py-2 py-3 text-grey-darkest' 
                            type='text' 
                            name='username'
                            value={this.state.credentials.username}
                            onChange={this.handleChange} />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label
                            className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                            htmlfor='password'>Password</label>
                            <input
                            className='border py-2 py-3 text-grey-darkest'
                            type='password'
                            name='password'
                            value={this.state.credentials.password}
                            onChange={this.handleChange} />
                            <button className="block bg-black hover:bg-shark-dark text-white uppercase text-lg mx-auto p-4 rounded"
                            >Log In</button>
                            <a className="block w-full text-center no-underline text-sm text-grey-dark 
                            hover:text-grey-darker cursor-pointer mt-5"
                            onChange={this.handleChange} 
                            onClick={this.handleSignUp}>Not already an user? Sign Up!</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatch = {login, signup}

export default connect(null, mapDispatch)(Login)