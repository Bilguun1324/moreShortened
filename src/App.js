import React from 'react';
// import { HomeDefault, Login, Tuuh, Signup } from './pages';
// import { Shalgagch } from './pages/shalgagch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import './style/main.scss';
// import { AuthUserProvider } from './provider/auth-user-provider';
// import { ShortUrlProvider } from './provider/short-url-provider';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeDefault />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
