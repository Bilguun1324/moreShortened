import React from 'react';
import { HomeDefault } from './pages/home-default'
import './styles/main.scss';
import { ShortUrlProvider } from './providers/provider1';
import {Shalgagch} from './Shalgagch';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ShortUrlProvider>
        <Switch>
          <Route path="/" exact>
            <HomeDefault />
          </Route>
          <Route paht="*">
            <Shalgagch />
          </Route>
        </Switch>
      </ShortUrlProvider>
    </Router>
  )
}

export default App;
