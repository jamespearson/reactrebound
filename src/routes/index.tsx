import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';


import HomePage from "./Home"

export default () => (
  <App>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </App>
);
