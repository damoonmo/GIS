import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Login from './user/components/Login'

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
