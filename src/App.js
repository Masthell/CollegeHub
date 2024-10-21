// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Grades from './pages/Grades';
import UserProfile from './pages/UserProfile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/grades" component={Grades} />
        <PrivateRoute path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;