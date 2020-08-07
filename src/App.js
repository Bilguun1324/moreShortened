import React from 'react';
import {HomeDefault} from './pages/home-default'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
