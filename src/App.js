import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/users" component={ Users }/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="Users">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
