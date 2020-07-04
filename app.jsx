import React from 'react';
import signIn from './packages/auth/container/sign_in/registration.jsx';
import signUp from './packages/auth/container/sign_up/login.jsx';
import style from './app.css';
// import apiAuth from './packages/auth/api/index.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className={style.App}>
        <Switch>
          <Route path="/signIn" component={signIn} />
          <Route path="/signUp" component={signUp} />
        </Switch>

      </div>
    </Router>
  );
};
export default App;