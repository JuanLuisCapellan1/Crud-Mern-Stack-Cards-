import React, { Component } from 'react';
import Navigation from './Navbar'; 
import Card from './Card';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';

class App extends Component{
    render() {
        return(
            <>
                <Navigation />
                <Card />

                <div>
                <BrowserRouter>
                    <Route path="/login" exact component={Login} />
                    
			    </BrowserRouter>
                </div>
            </>
        )
    }
}

export default App;