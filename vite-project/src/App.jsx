import React from 'react';
import './App.css'; // Assuming your main CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
        </header>
        <main className="container mt-4">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={HomePage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
