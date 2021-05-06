import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="Users">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
