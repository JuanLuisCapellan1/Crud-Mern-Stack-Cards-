import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Login extends Component{
    render() {
        return(
            <div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-8'>
                            <div className='card'>
                                <div className="card-content">
                                    <h1>Login</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default Login;