import React from 'react';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login'
import Register from './Components/Register'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Router>
  );
}

export default App;
